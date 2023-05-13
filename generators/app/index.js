"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");

module.exports = class extends Generator {
  prompting() {
    this.log(`Welcome to ${chalk.red("vuegen")} generator!`);
    this.argument("appname", { type: String, required: false });
    var prompts = [
      {
        type: "input",
        name: "project_name",
        message: "What is the name of your project?",
        default: this.options.appname,
        when: () => {
          if (this.options.appname) {
            this.log(`Project name is ${chalk.green(this.options.appname)}`);
            return false;
          }

          return true;
        }
      },
      {
        type: "list",
        name: "variant",
        message: "Choose variant",
        choices: [
          {
            name: "Typescript",
            value: "ts",
            checked: true
          }
          // {
          //   name: "Javascript",
          //   value: "js",
          //   checked: false
          // }
        ]
      },
      {
        type: "list",
        name: "formPackage",
        message: "Choose Form package to use",
        choices: [
          {
            name: "I will install myself",
            value: "none",
            checked: true
          },
          {
            name: "Vee-Validate",
            value: "veevalidate",
            checked: false
          },
          {
            name: "Formkit",
            value: "formkit",
            checked: false
          }
        ]
      },
      {
        type: "checkbox",
        name: "extrapackages",
        message: "Extra packages:",
        choices: [
          {
            name: "Pinia",
            value: "pinia",
            checked: true
          },
          {
            name: "Vue I18n",
            value: "internationalization",
            checked: false
          },
          {
            name: "Vue Simple ACL",
            value: "vueacl",
            checked: false
          }
        ]
      },
      {
        type: "list",
        name: "componentLibrary",
        message: "Which component library to use",
        choices: [
          {
            name: "I will install myself",
            value: "none",
            checked: true
          },
          {
            name: "Vuetify",
            value: "vuetify",
            checked: false
          },
          {
            name: "Quasar",
            value: "quasar",
            checked: false
          }
        ]
      },
      {
        type: "list",
        name: "package_manager",
        message: "Which package manager do you use?",
        choices: [
          {
            name: "NPM",
            value: "npm",
            checked: true
          },
          {
            name: "Yarn",
            value: "yarn",
            checked: false
          }
          // {
          //   name: "Bower",
          //   value: "bower",
          //   checked: false
          // }
        ]
      },
      {
        type: "list",
        name: "init_git",
        message: "Initialize empty git repo?",
        choices: [
          {
            name: "Yes",
            value: true,
            checked: true
          },
          {
            name: "No",
            value: false,
            checked: false
          }
        ]
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.project_name;
      if (!props.project_name) {
        // eslint-disable-next-line camelcase
        props.project_name = this.options.appname ?? "testproject";
      }

      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("typescript/base-project/{**/*,*}"),
      this.destinationPath(`${this.props.project_name}`),
      this.props
    );
    // VScode settings
    this.fs.copyTpl(
      this.templatePath("typescript/support/vscode/{**/*,*}"),
      this.destinationPath(`${this.props.project_name}/.vscode`),
      this.props
    );

    if (this.props.extrapackages.includes("pinia")) {
      this.fs.copyTpl(
        this.templatePath(`typescript/support/store/{**/*,*}`),
        this.destinationPath(`${this.props.project_name}/src/store/`),
        this.props
      );
    }

    if (this.props.extrapackages.includes("internationalization")) {
      this.fs.copyTpl(
        this.templatePath(
          `typescript/support/internationalization/locales/{**/*,*}`
        ),
        this.destinationPath(`${this.props.project_name}/src/locales/`),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath(`typescript/support/internationalization/i18n.ts`),
        this.destinationPath(`${this.props.project_name}/src/plugins/i18n.ts`),
        this.props
      );
    }

    if (this.props.extrapackages.includes("vueacl")) {
      this.fs.copyTpl(
        this.templatePath(`typescript/support/acl/acl.ts`),
        this.destinationPath(`${this.props.project_name}/src/plugins/acl.ts`),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath(`typescript/support/acl/rules.ts`),
        this.destinationPath(`${this.props.project_name}/src/acl/rules.ts`),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath(`typescript/support/acl/UnAuthorized.vue`),
        this.destinationPath(
          `${this.props.project_name}/src/pages/unauthorized/UnAuthorized.vue`
        ),
        this.props
      );
    }

    if (this.props.componentLibrary === "vuetify") {
      this.fs.copyTpl(
        this.templatePath(`typescript/support/vuetify/vuetify.ts`),
        this.destinationPath(
          `${this.props.project_name}/src/plugins/vuetify.ts`
        ),
        this.props
      );
    }
  }

  install() {
    const projdir = `${process.cwd()}/${this.props.project_name}`;
    process.chdir(projdir);
    this.log(
      `Installing dependencies this could take some time. Please wait...`
    );
    if (this.props.package_manager === "npm") {
      this.spawnCommandSync(`npm`, ["install"]);
    } else if (this.props.package_manager === "bower") {
      this.spawnCommandSync(`bower`, ["install"]);
    } else if (this.props.package_manager === "yarn") {
      this.spawnCommandSync(`yarn`, ["install"]);
    }

    // Remove this later
    // this.installDependencies({
    //   bower: this.props.package_manager === "bower",
    //   npm: this.props.package_manager === "npm",
    //   yarn: this.props.package_manager === "yarn"
    // });
    // Run lint
    this.spawnCommandSync(`npm`, ["run", "lint", "--", "--fix"]);
    if (this.props.init_git) {
      this.spawnCommandSync(`git`, ["init"]);
      this.spawnCommandSync(`git`, ["add", "."]);
      this.spawnCommandSync(`git`, ["commit", "-m", "project_setup"]);
    }

    this.log(
      `Project generated. Use the following commands to run the project`
    );
    this.log(" ");
    this.log(`cd ${this.props.project_name}`);
    this.log(`npm run serve`);
    this.log(" ");
  }
};

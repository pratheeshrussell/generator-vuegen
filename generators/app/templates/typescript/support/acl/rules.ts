import { defineAclRules } from "vue-simple-acl";
// Check https://www.npmjs.com/package/vue-simple-acl
// to findout how to define the rules
// search for const rules = () in that page
const AclRules = () =>
  defineAclRules((setRule) => {
    setRule("allow-login", (user) => {
      // check user permission and role
      return true;
    });

    setRule("blocked-path", (user) => {
        // check user permission and role
        return false;
      });
  });

export default AclRules;

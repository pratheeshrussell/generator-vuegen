import { createAcl } from "vue-simple-acl";
import AclRules from "../acl/rules";

const simpleAcl = (router: any) =>
  createAcl({
    user: () => {
      // set user details in store and retrieve it here
      // it will be fetched eachtime a rule is evaluated
      return {
        user: 1,
        role: "admin",
        permissions: ["do-anything"],
      };
    },
    rules: AclRules,
    router,
    onDeniedRoute: "/unauthorized",
  });

export default simpleAcl;

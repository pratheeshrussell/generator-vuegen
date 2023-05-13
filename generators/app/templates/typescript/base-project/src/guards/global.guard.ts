import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export const GlobalBeforeEachGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  // check condition
  next();
};
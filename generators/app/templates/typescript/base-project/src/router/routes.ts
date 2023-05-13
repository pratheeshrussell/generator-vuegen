import AppPaths from "@constants/paths.app";
import Layout from "@layout/LayoutComponent.vue";
import { RouteRecordRaw } from "vue-router";
<% if(extrapackages.includes('vueacl')) { %>
import UnAuthorized from "@pages/unauthorized/UnAuthorized.vue";
<% }%>
const AppRoutes: RouteRecordRaw[] = [
  {
    name: AppPaths.root.name,
    path: AppPaths.root.path,
    component: Layout,
    children: [
      {
        name: AppPaths.login.name,
        path: AppPaths.login.path,
        component: () => import("@pages/login/LoginComponent.vue"),
      },
      {
        name: AppPaths.userDashboard.name,
        path: AppPaths.userDashboard.path,
        component: () =>
          import("@src/pages/dashboard/DashboardComponent.vue"),
          <% if(extrapackages.includes('vueacl')) { %>
            // meta: {
            //   can: 'blocked-path',
            // }
          <% }%>
      },
      <% if(extrapackages.includes('vueacl')) { %>
        {
          name: AppPaths.unauthorized.name,
        path: AppPaths.unauthorized.path,
          component: UnAuthorized,
        },
      <% }%>
      {
        path: "/",
        redirect: AppPaths.login.path,
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/pages/notfound/NotFound.vue'),
      },
    ],
  },
];


export default AppRoutes;

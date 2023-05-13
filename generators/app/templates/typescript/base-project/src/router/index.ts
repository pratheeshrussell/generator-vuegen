import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AppRoutes from './routes';
// to add routes check routes.ts
class AppRouterSingleton {
    private static instance: AppRouterSingleton;
    private routerInstance: Router;
  
    private constructor(routes: RouteRecordRaw[]) {
      this.routerInstance = createRouter({
        history: createWebHistory(),
        routes: routes,
      });
    }
  
    public static getInstance(routes: RouteRecordRaw[]): AppRouterSingleton {
      if (!AppRouterSingleton.instance) {
        AppRouterSingleton.instance = new AppRouterSingleton(routes);
      }
  
      return AppRouterSingleton.instance;
    }
  
    public getRouterInstance(): Router {
      return this.routerInstance;
    }
  }
  
  const appRouterSingleton = AppRouterSingleton.getInstance(AppRoutes);
  export default appRouterSingleton.getRouterInstance();
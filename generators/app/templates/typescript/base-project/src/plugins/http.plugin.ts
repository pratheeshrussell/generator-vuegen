import axiosInstance from "@services/api/axios";
export const RequestHandlerPlugin = {
  install(app: any) {
    app.config.globalProperties.$axios = axiosInstance;
  },
};

export default RequestHandlerPlugin;
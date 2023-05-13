import { createApp } from "vue";
import App from "./App.vue";
import RequestHandlerPlugin from "./plugins/http.plugin";
import AppRouter from "./router/index";
import { GlobalBeforeEachGuard } from "@guards/global.guard";
import Notifications from '@kyvg/vue3-notification';
<% if(formPackage === 'formkit') { %> 
import { plugin, defaultConfig } from '@formkit/vue';
import '@formkit/themes/genesis';
<% } %>
<% if(extrapackages.includes('pinia')) { %> 
import { createPinia } from "pinia";
<% }%>
<% if(extrapackages.includes('internationalization')) { %>
import i18nPlugin from "./plugins/i18n";
<% }%> 
<% if(extrapackages.includes('vueacl')) { %>
import aclPlugin from "./plugins/acl";
<% }%> 
<% if(componentLibrary === 'vuetify') { %>
import 'vuetify/styles';
import vuetify from "./plugins/vuetify";
<% }%> 
<% if(componentLibrary === 'quasar') { %> import { Quasar } from 'quasar';<% }%>
import './assets/styles/main.scss';

<% if(extrapackages.includes('pinia')) { %> 
const pinia = createPinia();
<% }%>
const app = createApp(App);
<% if(extrapackages.includes('pinia')) { %> 
app.use(pinia);
<% }%>
// setup global guards
// you can learn about the other types of Guards in the following link
// https://router.vuejs.org/guide/advanced/navigation-guards.html

// AppRouter.beforeEach((to, from, next) => {
//     GlobalBeforeEachGuard(to, from, next);
// });

app.use(RequestHandlerPlugin);
app.use(AppRouter);
app.use(Notifications);
<% if(formPackage === 'formkit') { %>app.use(plugin, defaultConfig);<% } %>
<% if(extrapackages.includes('internationalization')) { %>app.use(i18nPlugin);<% }%> 
<% if(extrapackages.includes('vueacl')) { %> app.use(aclPlugin(AppRouter));<% }%>
<% if(componentLibrary === 'vuetify') { %>app.use(vuetify);<% }%> 
<% if(componentLibrary === 'quasar') { %> app.use(Quasar, { plugins: {},});<% }%>
window.$app = app;
app.config.globalProperties.$router = AppRouter;
app.mount("#app");

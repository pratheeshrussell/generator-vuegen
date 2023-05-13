import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';
import { fileURLToPath, URL } from 'node:url';
import eslintPlugin from 'vite-plugin-eslint';

<% if(componentLibrary === 'quasar') { %> import { quasar, transformAssetUrls } from '@quasar/vite-plugin'<% }%>
<% if(extrapackages.includes('internationalization')) { %> 
import { resolve, dirname } from 'node:path';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
const I18Config = {
  include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
};
<% }%>
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(
    <% if(componentLibrary === 'quasar') { %> 
      {template: { transformAssetUrls }}
      <% }%>
  ),tsconfigPaths(),eslintPlugin()<% if(extrapackages.includes('internationalization')) { %>,VueI18nPlugin(I18Config)<% }%>
  <% if(componentLibrary === 'quasar') { %> ,quasar()<% }%>
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/assets/styles/variables.scss";
        @import "@/assets/styles/mixins.scss";
        @import "@/assets/styles/fonts.scss";
        `,
      },
    },
  },

})

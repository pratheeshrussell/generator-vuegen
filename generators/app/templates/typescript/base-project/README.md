# <%= project_name %>

Add project description here

## Packages
Template generated with
* axios
<% if(formPackage === 'formkit') { -%>
* Formkit  
<% }-%>
<% if(formPackage === 'veevalidate') { -%>
* vee-validate  
<% }-%>
<% if(extrapackages.includes('pinia')) { -%>
* Pinia  
<% }-%>
<% if(extrapackages.includes('internationalization')) { -%>
* vue-i18n  
<% }-%>
<% if(extrapackages.includes('vueacl')) { -%>
* vue-simple-acl  
<% }-%>
<% if(componentLibrary === 'vuetify') { -%>
* vuetify  
<% }-%>
<% if(componentLibrary === 'quasar') { -%>
* quasar  
<% }-%>

## Scripts
<% if(package_manager === 'npm') { -%>
```bash
npm run dev
```

```bash
npm run build
```

```bash
npm run preview
```

```bash
npm run test:unit
```


```bash
npm run build-only
```


```bash
npm run lint
```
<% } -%>

<% if(package_manager === 'yarn') { -%>
```bash
yarn dev
```

```bash
yarn build
```

```bash
yarn preview
```

```bash
yarn test:unit
```


```bash
yarn build-only
```


```bash
yarn lint
```
<% } -%>


## Rules
* Never store data in a service. Only methods and getters are allowed. Use a store like **Pinia** to store data. Services can fetch from the store.
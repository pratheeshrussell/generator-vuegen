<template>
    <header class="header">
      <h1 class="title">{{ title }}</h1>
      <nav class="nav">
        <ul>
          <li>
            <% if(extrapackages.includes('internationalization')) { -%>
            <div class="locale-changer">
              <select v-model="$i18n.locale">
                <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
              </select>
            </div>
            <% } -%> 
          </li>
          
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Vue Template'
      }
    }
  }
  </script>
  
  <style scoped lang="scss"> 
  .header {
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  
  .title {
    font-size: 24px;
    margin: 0;
  }
  
  .nav {
    display: flex;
  }
  
  .nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav li {
    margin: 0 10px;
  }
  
  .nav a {
    color: #fff;
    text-decoration: none;
  }

<% if(extrapackages.includes('internationalization')) { -%>
.locale-changer{
    select{
      -webkit-appearance: auto;
      background-color: #fff;
    }
}   
<% } -%> 
</style>
  
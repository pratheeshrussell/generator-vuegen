<template>
    <footer class="footer">
      <p class="text">&copy; {{ year }} Vue Template</p>
    </footer>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const year = ref(new Date().getFullYear());
      return {
        year
      };
    }
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    margin-top: 50px;
  }
  
  .text {
    font-size: 14px;
    margin: 0;
  }
  </style>
  
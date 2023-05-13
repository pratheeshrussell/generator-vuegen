<template>
  <div class="full-height">
    <HeaderComponent title="Vue Template" />
    <div class="full-height">
      <router-view />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@components/footer/FooterComponent.vue";
import HeaderComponent from "@components/header/HeaderComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

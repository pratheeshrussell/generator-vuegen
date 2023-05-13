<template>
  <div class="not-found">
    <h1>404</h1>
    <h4>Page Not Found</h4>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  @include flex-centered;
  flex-direction: column;
  height: 77vh;
  h1,
  h4 {
    margin: 0.1em;
  }
}
</style>

<template>
  <div class="error">
    <h1>Error 404</h1>
    <div class="errors__links">
      <nuxt-link to="/"> Go to Home</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 5em;
  text-align: center;
  color: red;
  margin-bottom: 30px;
}
.errors__links {
  text-align: center;
}
nuxt-link {
  color: #999;
}
</style>

<template>
  <footer class="container">
    <router-link class="btn btn-primary btn-sm" to="create">Add New</router-link>
  </footer>
</template>

<script>
export default {
  name: "clfooter"
};
</script>

<style lang="scss">
@import "src/scss/colors.scss";
footer {
  background: $primary-color;
  border-radius: 0px 0px 5px 5px;
  height: 50px;
  display: flex;
  text-align: center;
  align-items: center;
  p {
    margin: 0px;
  }
}
</style>
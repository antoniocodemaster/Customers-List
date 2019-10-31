<template>
  <div id="app" class="app">
    <clnav />
    <div class="container appcontainer">
      <div class="row main-content">
        <div class="list col-md-4">
          <customerslist />
        </div>
        <div class="details col-md-8">
          <router-view />
        </div>
      </div>
    </div>
    <clfooter />
  </div>
</template>

<script>
// Layout
import clnav from "./components/layout/clnav.vue";
import clfooter from "./components/layout/clfooter.vue";

import customerslist from "./components/customerslist.vue";

export default {
  name: "app",
  components: {
    clfooter,
    clnav,
    customerslist
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "src/scss/colors.scss";
@import "src/scss/styles.scss";
</style>

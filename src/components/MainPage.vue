<template>
  <div id="mainPage">
    <div class="row">
      <div class="row">
        <top-bar></top-bar>
      </div>
      <div class="page-bottom">
        <left-menu></left-menu>
        <div class="col-xs-9 view">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopBar from "./TopBar.vue"
  import LeftMenu from "./LeftMenu.vue"

  export default {
    name: 'MainPage',
    components: {TopBar, LeftMenu}
  }
</script>

<style scoped>
  .inner-page {
    left: 390px;
    position: fixed;

  }
  .view{
    margin:10px 0px;
  }
  .page-bottom > div {
    float: left;
  }
</style>

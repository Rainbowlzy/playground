<template>
  <div id="playground">
    <div class="row">
      <div class="row">
        <top-bar></top-bar>
      </div>
      <div class="page-bottom">
        <left-menu></left-menu>
        <div class="col-xs-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopBar from "./TopBar"
  import LeftMenu from "./LeftMenu"

  export default {
    name: 'Playground',
    components:{ TopBar,LeftMenu }
  }
</script>

<style scoped>
#playground{
  background: #ffffff;
}

  .inner-page{
    left:390px;
    position: fixed;

  }
  .page-bottom>div{
    float:left;
  }
</style>

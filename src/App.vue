<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Index from '@/components/Index'
  import Login from '@/components/Login'
  import Playground from '@/components/Playground.vue'
  import VueTable from '@/components/VueTable.vue'
  import TempBusinessPage from '@/components/TempBusinessPage.vue'


  export default {
    name: 'App',
    components: {Index, Login,Playground,TempBusinessPage,VueTable}
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body{
    background: url(assets/dark_theme/fade-lg-bg.jpg);
    background-repeat: no-repeat;
  }
</style>

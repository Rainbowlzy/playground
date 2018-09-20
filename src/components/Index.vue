<template>
  <div id="index">
    <banner></banner>
    <div class="container">
      <nav-block></nav-block>
    </div>
  </div>
</template>

<script>

  import Banner from './Banner.vue'
  import NavBlock from './NavBlock.vue'

  export default {
    name: 'Index',
    components: { Banner,NavBlock },
    data: function () {
      return {

      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #index {
    /*width: 100%;*/
    /*height: 100%;*/
    /*display: block;*/
    /*position: fixed;*/
    /*top: 0px;*/
    /*left: 0px;*/
    /*background-image: url(../assets/dark_theme/big_bg.png);*/
    /*background-repeat: no-repeat;*/
    margin:55px 0px;
  }

  h1, h2, h3, a{
    color: #ffffff;
  }



</style>

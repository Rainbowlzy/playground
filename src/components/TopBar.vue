<template>
  <div id="top-bar">
    <div id="bar"></div>
    <div class="bar-nav">
      <router-link to="/index">
        <div class="top-index-btn">
          <div class="top-bar-index-icon"></div>
          <div class="top-bar-index-icon-text">首页</div>
        </div>
      </router-link>
      <div class="">
        <router-link to="../main_page/map"><div class="top-nav-btn">{{current_left_menu_root.title}}</div></router-link><div class="gt-marker">&gt;</div>
        <router-link to="../main_page/temp"><div class="top-nav-btn">{{current_left_menu_second.MCCaption}}</div></router-link><div class="gt-marker">&gt;</div>
      </div>
    </div>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'

  export default{
    name:'TopBar',
    computed:{
      ...mapGetters(['current_left_menu_root','current_left_menu_second'])
    }
  }
</script>

<style scoped>
  #bar{
    background:url(../assets/dark_theme/top_bar.png);
    width:1920px;
    height:146px;
  }
  .bar-nav{
    background: url(../assets/dark_theme/top-bar-bg.png);
    height: 72px;
  }
  .bar-nav>div,a{
    float: left;
    margin: 0px 0px;
  }
  .top-nav-btn, .top-index-btn, .gt-marker{
    height:72px;
    line-height: 72px;
    background: url(../assets/dark_theme/top-bar-bg.png);
  }

  .top-nav-btn{
    float: left;
    margin:0px 25px;
    font-size:25px;
    color: #168ac5;

  }
  .top-index-btn{
    color: #000;
    margin:0px 15px;
    padding:0px 75px;
    font-size: 30px;
    width:390px;
    border-right: lightgray 1px solid;
  }

  .top-bar-index-icon{
    width:32px;
    height:28px;
    float: left;
    margin:22px 0px;
    background: url(../assets/dark_theme/top-bar-index-icon.png);
  }
  .top-bar-index-icon-text{
    float:left;
    margin:0px 55px;
  }

  .gt-marker{
    float: left;
  }
</style>

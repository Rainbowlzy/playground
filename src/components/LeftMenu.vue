<template>
  <div id="leftMenu">
    <div v-if="left_menu">
      <div class="row" v-for="menu in left_menu">
        <div class="first-level" @click="click_left_menu_root(menu)">{{menu.title}}</div>
        <transition name="slide-fade"
                    v-for="second in menu.children">
          <div class="second-level"
               v-if="current_left_menu_root.title===menu.title">
            <p
              @click="click_left_menu_second(second)">{{second.MCCaption}}</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name:'LeftMenu',
    methods: { ...mapMutations(['click_left_menu_root','click_left_menu_second']) },
    computed:{
      ...mapGetters(['left_menu','current_left_menu_root'])
    }
  }
</script>

<style scoped>
  #leftMenu{
    /*background: url(../assets/dark_theme/left_menu_bg.png);*/
    width: 390px;
    height: 890px;
    color:#ffffff;
    background-repeat: no-repeat;
  }

  .first-level{
    height:72px;
    line-height: 72px;
    background: url(../assets/dark_theme/top-bar-bg.png);
    color: #000;
    font-size: 22px;
    width: 405px;
  }

  .second-level{
    height:60px;
    line-height:60px;
    font-size: 18px;;
  }

  .slide-fade-enter-active {
    transition: all .8s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
    height:0px;
  }
</style>

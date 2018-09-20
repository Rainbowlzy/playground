<template>
  <div id="nav">
    <div class="">
      <router-link to="/">退出登陆</router-link>
      <div class="row">
        <div v-for="(block,i) in index_blocks" class="nav-block">
          <router-link :to="'../main_page/map'">
            <!--<image-block :title="block.title" :width="200" :height="200" :color="$store.state.colorList[i]"></image-block>-->
            <img v-bind:src="`http://localhost/${block.img}`" v-bind:alt="block.title"/>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//  import { store } from '../vuex/store'
import {mapGetters} from 'vuex'
import ImageBlock from './ImageBlock'
  export default {
    name:'NavBlock',
    components:{
      ImageBlock
    },
    data:function(){
      this.$store.commit('load_menu');
      return {
        blocks:this.$store.state.indexBlocks
      }
    },
    computed:{
      ...mapGetters(['index_blocks'])
    }
  }
</script>

<style scoped>
  a{
    color:#ffffff;
  }
  #nav{
    width:1570px;
  }

  .nav-block{
    /*border: #ffffff 1px solid;*/
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    float:left;
    /*margin: 30px 10px;*/
  }

  .nav-block>a>img{
    /*width: 27.6%;*/
    /*height:21.5%;*/
  }
</style>

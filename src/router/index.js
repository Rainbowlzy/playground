import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Map from '@/components/Map'
import TempBusinessPage from '@/components/TempBusinessPage'
import Playground from '@/components/Playground.vue'
import MainPage from '@/components/MainPage.vue'

import MenuConfigurationList from '@/components/gen/MenuConfigurationList.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/app',
      name: 'App',
      component: App
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
      ]
    },
    {
      path: '/main_page',
      name: 'MainPage',
      component: MainPage,
      children:[
        {
          path: 'map',
          name: 'Map',
          component: Map
        },
        {
          path: 'temp',
          name: 'MenuConfigurationList',
          component: MenuConfigurationList
        }
      ]
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
//MainPage

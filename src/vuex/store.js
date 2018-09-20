import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'
import $cookie from 'jquery.cookie'
import router from '../router'

function callMethod(method, data) {
  "use strict";
  //var host = 'http://122.97.218.162:18606/BaoHua';
  var host = 'http://localhost/BaoHua';
  var response = $.ajax({
    url: `${host}/DefaultHandler.ashx?method=${method}`,
    type: 'POST',
    async: false,
    dataType: 'json',
    crossDomain: true,
    data: {
      data: JSON.stringify(data),
      auth_user: $.cookie('auth_user')
    }
  });
  var text = response.responseText;
  try {
    var json = JSON.parse(text);
    if (!json) {
      alert('网络错误');
      return null;
    }
    if (!json.success && json.message) {
      alert(json.message);
      return null;
    }
    return json;
  } catch (e) {
    alert(e);
  }
  alert(text);
}

Vue.use(Vuex);

const state = {
  userInfo: null,//已登录的用户对象
  table: null,//当前表格对象
  current_left_menu_root: null,// 默认选中的左侧根节点
  current_left_menu_second: null, //默认选中的二级节点
  //颜色色值表
  colorList: `28AD64
F9BD5D
9EAD2D
D64285
498FC6
AE76EC
73D8FD
E59701
12C4B2
F05665
418BC3
F05665
FADF6D
`.split('\n'),

  indexBlocks: [
    //{path: '/', img: '', title: '城管'}
  ]
};


const go = (path)=> {
  router.push(path);
  router.go(1);
};

const page_load = (state)=> {
  if (!state.userInfo && $.cookie("auth_user")) {
    state.userInfo = callMethod('getuserinformationlist')
  }
};

const check_login = (state)=> {

  //debugger
  if (!state.userInfo && !$.cookie("auth_user")) {
    login(state, {UILoginName: 'admin', UICode: 'admin'});
  }
  //debugger

  page_load(state);
  if (!state.userInfo && !$.cookie("auth_user")) {
    go('/');
    return false;
  }
  return true;
};

const get_mc_link = (menu_entity)=> {
  if (!menu_entity) return "/index";
  if (!menu_entity.MCLink || menu_entity.MCLink.length <= 0) return `/index/${encodeURIComponent(JSON.stringify(menu_entity))}}`;
  return menu_entity.MCLink;
};

const get_left_menu_link = (menu_entity)=> {
  if (!menu_entity) return "/index";
  if (!menu_entity.MCLink || menu_entity.MCLink.length <= 0) return `/index/${encodeURIComponent(JSON.stringify(menu_entity))}}`;
  return menu_entity.MCLink;
}

const load_menu = (state)=> {
  if (!check_login(state)) {
    return;
  }
  if (!state.menu || state.menu.length <= 0) {
    var menu = callMethod('GetMenuConfigurationTreeByAuth');
    if (!menu)go('/');
    if (menu) state.menu = menu.menu;
  }
};

const index_blocks = (state) => {
  load_menu(state);
  if (!state.menu) return [];
  return state.menu.slice(0, 20).map(t=>({
    title: t.MCCaption || t.title,
    img: t.MCPicture,
    path: get_mc_link(t),
    children: t.children
  }))
};

const left_menu = (state) => {
  load_menu(state);
  if (!state.menu) return [];
  return state.menu.slice(0, 20).map(t=>({
    title: t.MCCaption || t.title,
    img: t.MCPicture,
    path: get_left_menu_link(t),
    children: t.children
  }));
};
const current_table_index = (state)=> {
  return state.current_table_index || (state.current_table_index = 1);
}

// 选中左侧根节点并更新状态
const click_left_menu_root = (state, menu)=> {
  if (state.current_left_menu_root && state.current_left_menu_root.title === menu.title) {
    state.current_left_menu_root = state.current_left_menu_second = null;
    return;
  }
  state.current_left_menu_root = menu;
}
const click_left_menu_second = (state, menu)=> {
  state.current_left_menu_second = menu;
}

// 左侧根节点选中状态
const current_left_menu_root = (state)=>state.current_left_menu_root||{title:'地图'};
const current_left_menu_second = (state)=>state.current_left_menu_second||{title:'表格'};
const getters = {
  current_table_index,
  index_blocks,
  left_menu,
  current_left_menu_root,
  current_left_menu_second
};

const init_table = (state, vueTable)=> {
  let table = callMethod(vueTable.method, {
    search: vueTable.search,
    PageIndex: vueTable.PageIndex,
    PageSize: vueTable.PageSize,
  });
  state.table = table;
};

const login = (state, user_info)=> {
  //调接口
  var r = callMethod("login", user_info);
  if (!r)return;

  //存状态
  state.userInfo = user_info;
  state.userInfo.token = r.data;
  $.cookie('auth_user', r.data, {expires: 99999, path: "/"});

  load_menu(state);
  //去首页
  router.push('/index');
  router.go(1);
};

const mutations = {
  load_menu,
  init_table,
  login,
  click_left_menu_root,
  click_left_menu_second
};
export default new Vuex.Store({
  getters,
  state,
  mutations,
  actions: {
    init({ dispatch }, user_info){
      dispatch('INIT', user_info)
    }
  }
})

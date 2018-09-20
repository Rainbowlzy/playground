<template>
  <div id="login">
    <div class="banner_with_logo">

    </div>
    <div id="login_form">
      <div class="login_form_control">
        <div class="login_user_icon"></div>
        <input type="text" placeholder="请输入用户名" v-model="user_info.UILoginName" autocomplete="off"/>
      </div>
      <div class="login_form_control">
        <div class="login_pass_icon"></div>
        <input type="password" placeholder="请输入密码" v-model="user_info.UICode" autocomplete="off"/>
      </div>
      <button class="login_button" @click="login(user_info)"></button>
    </div>
  </div>
</template>


<script>

  import { mapMutations } from 'vuex'
  import { doLogin } from '../vuex/actions'

  export default {
    name:"Login",
    methods:{ ...mapMutations(["login"]) },
    data: function () {
      return {
        user_info: {
          UILoginName: "admin",
          UICode: "admin"
        }
      }
    }
  }

</script>

<style scoped>

  #login {
    width: 100%;
    height: 100%;
    display: block;
    position: fixed;
    top: 0px;
    left: 0px;
    /*background-image: url(../assets/dark_theme/1-login/login_bg.png);*/
    background: url(../assets/dark_theme/fade-lg-bg.jpg);
    background-repeat: no-repeat;
  }

  #login_form {
    position: fixed;
    top: 35%;
    left: 704px;
    border: #ffffff 1px solid;
    border-radius: 10px;
    padding:39px 67px;
  }

  .login_form_control {
    margin-top:59px;
    font-size:20px;
    width:404px;
    height:52px;
    display: block;
    background-image: url(../assets/1-login/login_user_pass_border.png);
  }

  .login_form_control > input {
    background: transparent;
    height: 52px;
    line-height: 52px;
    border-width: 0px;
    color: #ffffff;
  }

  .login_button {
    background-image: url(../assets/1-login/login_button.png);
    width:408px;
    height:54px;
    margin-top:57px;
    border-radius: 30px;
  }

  .login_user_icon{
    background-image: url(../assets/1-login/login_user_icon.png);
    width:26px;
    height:26px;
    float: left;
    margin:10px 20px;
  }
  .login_pass_icon{
    background-image: url(../assets/1-login/login_pass_icon.png);
    width:25px;
    height:26px;
    float: left;
    margin:10px 20px;
  }

  .banner_with_logo{
    background: url("../assets/dark_theme/banner_with_logo.png");
    width:1320px;
    height:137px;
    position: relative;
    top:18%;
    left:15%;
  }



</style>

<template lang="html">
<div class="head">
  <span><router-link to="/home">{{nav.home}}</router-link></span>
  <span><router-link to="/user">{{nav.user}}</router-link></span>
  <span><router-link to="/about">{{nav.about}}</router-link></span>
  <span><router-link to="/login">{{nav.login}}</router-link></span>
  <span><router-link to="/test">{{nav.test}}</router-link></span>
</div>
</template>

<script>
export default {
  data () {
    return {
      nav: {
        home: '首页',
        user: '用户',
        about: '关于',
        login: '登录',
        test: '测试'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.head{
  background-color: yellow;
  height:40px;
  padding-top: 10px;

  span{
    margin-left:10px;
    margin-right: 10px;
  }
}
</style>

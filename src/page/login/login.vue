<template lang="html">
  <div class="login">
    <head-top></head-top>
    <h2>{{title}}</h2>
    <div>
      <label>用户名:</label><input type="text" name="username">
      <label>密码:</label><input type="text" name="password">
    </div>
  </div>
</template>

<script>
import headTop from '../../components/header/head'
export default {

  data () {
    return {
      title: '登录页'
    }
  },
  components: {
    headTop
  }

}
</script>

<style lang="css">
.login{

}
</style>

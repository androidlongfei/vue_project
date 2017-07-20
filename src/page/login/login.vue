<template lang="html">
  <div class="login">
    <h2>{{title}}</h2>
    <div class="">
      <label>用户名:</label><input type="text" name="username">
      <label>密码:</label><input type="text" name="password">
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      title: '登录页'
    }
  }

}
</script>

<style lang="css">
.login{

}
</style>

<template>
  <div class="home">
    <head-top></head-top>
    <img src="../../images/logo.png" />
    <h1>{{ msg }}</h1>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <h2>router-link页面跳转</h2>
    <ul>
      <li><router-link to="/about">about</router-link></li>
      <li><router-link to="/login">login</router-link></li>
      <li><router-link to="/user">user</router-link></li>
      <li><router-link to="/test">test</router-link></li>
    </ul>
  </div>
</template>

<script>
import headTop from '../../components/header/head'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    headTop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../style/common.scss';

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

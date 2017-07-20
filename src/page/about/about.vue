<template lang="html">
<div class="about">
  <head-top></head-top>
  <h2>{{msg}}</h2>
  <div class="">
      <p>{{content}}</p>
  </div>
</div>
</template>

<script>
import headTop from '../../components/header/head'
export default {
  data () {
    return {
      msg: '关于页',
      content: 'this is about'
    }
  },
  components: {
    headTop
  }
}
</script>

<style lang="css" scoped>
.about{
color:red;
}
</style>

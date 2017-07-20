<template lang="html">
<div class="home">
  <h2>{{msg}}</h2>
  <div class="">
      <p>{{content}}</p>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: '关于页',
      content: 'this is about'
    }
  }
}
</script>

<style lang="css" scoped>
.about{
color:red;
}
</style>

<template lang="html">
<div class="home">
  <div class="">
    {{msg}}
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'this is about'
    }
  }
}
</script>

<style lang="css" scoped>
.about{
color:red;
}
</style>

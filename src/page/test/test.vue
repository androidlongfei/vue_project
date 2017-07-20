<template lang="html">
  <div class="test">
      <h2>{{title}}</h2>
      <div class="nav">
        <span><router-link to="/test/vuexTest">vuex</router-link></span>
        <span><router-link to="/test/vBindTest">vBind</router-link></span>
      </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'vue语法测试页'
        }
    }
}

</script>

<style lang="scss">
@import '../../style/common.scss';

.test {
  .nav{
    span{
      padding: 5px;
      margin: 5px;
    }
  }
}
</style>

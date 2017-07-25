<template lang="html">
  <div class="test">
    <head-top></head-top>
      <h2>{{title}}</h2>
      <div class="nav">
        <span><router-link to="/test/directiveTest">基本指令</router-link></span>
        <span><router-link to="/test/componentTest">组件</router-link></span>
        <span><router-link to="/test/elementUITest">element-ui</router-link></span>
        <span><router-link to="/test/vuexTest">vuex</router-link></span>
      </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import headTop from '../../components/header/head'
export default {
    data() {
        return {
            title: 'vue语法测试页'
        }
    },
    components: {
        headTop
    }
}

</script>

<style lang="scss">@import '../../style/common.scss';

.test {
    .nav {
        span {
            padding: 5px;
            margin: 5px;
        }
    }
}
</style>

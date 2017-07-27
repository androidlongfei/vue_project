<template lang="html">
<div class="about">
  <head-top></head-top>
  <h2>{{msg}}</h2>
  <div class="">
      <p>{{content}}</p>
  </div>
  <el-row>
    <el-col :span="22" :offset="1">
      <user-list title="用户列表" :userList="aboutUserList"></user-list>
    </el-col>
  </el-row>
</div>
</template>

<script>
import headTop from '../../components/header/head'
import userList from './components/userList'
import {
    mapGetters
} from 'vuex'
export default {
    data() {
        return {
            msg: '关于页',
            content: 'this is about'
        }
    },
    computed: {
        // 使用对象展开运算符将 getters 混入 computed 对象中
        ...mapGetters([
            'aboutUserList'
        ])
    },
    components: {
        headTop,
        userList
    }
}

</script>

<style lang="css" scoped>
.about{
color:red;
}
</style>

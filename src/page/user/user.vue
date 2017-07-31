<template lang="html">
<div class="user">
  <head-top></head-top>
  <h2>{{msg}}</h2>
  <div>
    <p>{{loading ? '加载中...': '加载完成'}}</p>
    <el-row>
      <el-col :span="6" :offset="1">
        <user-list title="用户列表" :userList="userList"></user-list>
      </el-col>
      <el-col :span="16" :offset="1">
        <user-info title="用户" :user="chooseUser"></user-info>
      </el-col>
    </el-row>
  </div>
</div>
</template>

<script>
import headTop from '../../components/header/head'
import userList from './components/userList'
import userInfo from './components/userInfo'
import * as userType from './module/mutations_types'
import {
    mapMutations,
    mapGetters,
    mapActions
} from 'vuex'
export default {
    data() {
        return {
            msg: '用户列表界面',
            content: 'this is about',
            users: []
        }
    },

    mounted() {
        // 显示loading
        this.fetchUserListBefore({
            loading: true
        })
        // 加载用户列表
        this.fetchUserList({
            test: true
        })
    },

    methods: {
        ...mapMutations({
            // 映射 this.fetchUserListBefore() 为 this.$store.commit('FETCH_USER_LIST_BEFORE')
            fetchUserListBefore: userType.FETCH_USER_LIST_BEFORE
        }),
        ...mapActions({
            // 映射 this.fetchUserList() 为 this.$store.dispatch('FETCH_USER_LIST')
            fetchUserList: userType.FETCH_USER_LIST
        })
    },

    computed: {
        // 使用对象展开运算符将 getters 混入 computed 对象中
        ...mapGetters([
            'loading', 'userList', 'chooseUser'
        ])
    },

    components: {
        headTop,
        userList,
        userInfo
    }
}

</script>

<style lang="scss">@import '../../style/common.scss';
.user {
    color: red;
    li,
    ul {
        list-style-type: none;
    }
}
</style>

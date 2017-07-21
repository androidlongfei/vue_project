<template lang="html">
<div class="user">
  <head-top></head-top>
  <h2>{{msg}}</h2>
  <div>
      <ul>
        <li v-for="user in users">
          {{user.title}}---{{user.id}}
        </li>
      </ul>
  </div>
</div>
</template>

<script>
import {
    findAll
} from '../../service/User'
import headTop from '../../components/header/head'
export default {
    data() {
        return {
            msg: '用户列表界面',
            content: 'this is about',
            users: []
        }
    },

    mounted() {
        // 加载用户列表
        findAll().then(res => {
            console.log('users', res)
            this.users = res
        }).catch((ex) => {
            console.log('error', ex)
        })
    },

    components: {
        headTop
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

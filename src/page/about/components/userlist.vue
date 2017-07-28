<template>
<div class="userList">
    <el-row>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span style="line-height: 36px;">{{title}}</span>
            </div>
            <div class="content">
                <div v-for="(user, index) in userList" :key="index" class="text item">
                    <el-card class="box-card">
                        <div class="" @click="itemclick(user)">
                            {{user.title}}---{{user.id}}
                        </div>
                    </el-card>
                </div>
            </div>
        </el-card>
    </el-row>
</div>

</template>

<script>
// import * as userType from '../model/mutations_types'
export default {

    props: {
        title: {
            type: String,
            required: true
        },
        userList: {
            type: Array,
            default: function () {
                return []
            },
            required: true
        }
    },
    data() {
        return {}
    },

    methods: {
        itemclick(currentUser) {
            // alert(currentUser.id)
            // this.$store.commit({
            //     type: userType.SWITCH_USER,
            //     payload: {
            //         currentUser: currentUser
            //     }
            // })
            // this.$emit('currentUser', currentUser)
        }
    }

}

</script>

<style lang="scss">
.userList {
    color: red;
    .item {
        margin: 5px;
        padding: 5px;
    }
    .content {
        min-height: 1000px;
    }
}
</style>

<template>
<div>
    <group>
        <x-input title="用户ID" :required="true" type="number" v-model="usercode" keyboard="number" placeholder="请输入用户ID" placeholder-align="right">
        </x-input>
    </group>
    <div style="padding:15px;">
        <x-button @click.native="login" type="primary">登陆</x-button>
    </div>
</div>

</template>

<script>
import {
    XInput,
    Group,
    XButton
} from 'vux'
import storageHelp from '../../config/storageHelp'
import * as type from './module/mutations_types'
export default {
    components: {
        XInput,
        XButton,
        Group
    },
    data() {
        return {
            usercode: '',
            usercodeCheck: function (value) {
                return {
                    valid: value === '2333',
                    msg: 'Must be 2333'
                }
            }
        }
    },
    methods: {
        login() {
            this.$store.dispatch({
                type: type.LOGIN,
                payload: {
                    usercode: this.usercode
                }
            })
        }
    }
}

</script>

<style lang="css">
</style>

<template>
<div class="login">
    <head-top></head-top>
    <h2>{{title}}</h2>
    <el-row type="flex" class="row-bg" justify="center">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="100px" :style="{'width':'500px','background':'white'}" class="demo-ruleForm">
            <el-form-item label="用户名" prop="userName">
                <el-input v-model="ruleForm.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item prop="rememberMe">
                <!-- <el-col :span="1">
                    <el-switch on-text="" off-text="" v-model="ruleForm.rememberMe"></el-switch>
                    <el-checkbox :value="ruleForm.rememberMe" v-model="ruleForm.rememberMe">记住我</el-checkbox>
                </el-col> -->
                <el-col :span="12">
                    <input v-model="ruleForm.rememberMe" type="checkbox">记住我</input>
                </el-col>
                <!-- <span>{{ruleForm.rememberMe}}</span> -->

            </el-form-item>
            <el-form-item>
                <el-col :span="24">
                    <el-button @click="login('ruleForm')">登录</el-button>
                    <el-button @click="register('ruleForm')">注册</el-button>
                    <el-button @click="reset('ruleForm')">重置</el-button>
                </el-col>
            </el-form-item>
        </el-form>
    </el-row>
</div>

</template>

<script>
import headTop from '../../components/header/head'
import storageHelp from '../../config/storageHelp'
import * as type from './module/mutations_types'
export default {

    data() {
        return {
            title: '登录页',
            ruleForm: {
                userName: '',
                password: '',
                rememberMe: false
            },
            rules: {
                userName: [{
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur'
                    },
                    {
                        min: 3,
                        max: 8,
                        message: '长度在3到8个字符',
                        trigger: 'blur'
                    }
                ],
                password: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'change'
                }]
            }
        };
    },
    methods: {
        login(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$store.dispatch({
                        type: type.LOGIN,
                        payload: {
                            rememberMe: this.ruleForm.rememberMe,
                            userName: this.ruleForm.userName,
                            passWord: this.ruleForm.password
                        }
                    })
                } else {
                    console.log('login submit!!');
                    return false;
                }
            })
        },
        register(formName) {

        },
        reset(formName) {
            this.$refs[formName].resetFields();
        }

    },
    mounted() {
        if (storageHelp.rememberMe) {
            this.ruleForm.rememberMe = storageHelp.rememberMe
        }
        console.log('this.ruleForm.rememberMe', this.ruleForm.rememberMe);
        if (storageHelp.currentUsername) {
            this.ruleForm.userName = storageHelp.currentUsername
        }
        // storageHelp.accessToken = 123
    },

    components: {
        headTop
    }

}

</script>

<style lang="css">
.login{

}
</style>

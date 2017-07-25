<template>
<div class="component">
    <p>{{title}}</p>
    <el-row>
        <el-col :span="18" :offset="3">
            <el-collapse v-model="activeNames">
                <el-collapse-item :title="componentRegister.title" :name="componentRegister.id">
                    <!--  引用局部组件,驼峰命名需要变成'-' -->
                    <show-time></show-time>
                    <p>组件注册与使用模块</p>
                </el-collapse-item>
            </el-collapse>
        </el-col>
    </el-row>
</div>

</template>

<script>
// 组件名不能与html标签名一样，如head,ul,li等
import showTime from './components/showTime'
export default {
    data() {
        return {
            title: '组件测试页面',
            activeNames: ['1'],
            componentRegister: {
                title: '组件注册与引用',
                id: 1
            }
        }
    },

    created() {

    },

    // 注册局部组件
    components: {
        showTime
    }
}

</script>

<style lang="scss">
.component {}</style>

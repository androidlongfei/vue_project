<template>
<div class="test">
    <p>{{title}}</p>
    <el-row>
        <el-col :span="18" :offset="3">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item :title="vBind.title" :name="vBind.id">
                    <span :mouseContent="vBind.message" v-on:mouseenter="vBindShowMessage">
                      鼠标悬停此处几秒，可以看到此处动态绑定的 title！
                    </span>
                </el-collapse-item>
                <el-collapse-item :title="vIf.title" :name="vIf.id">
                    <el-button @click="vIfToggle(true)">显示</el-button>
                    <el-button @click="vIfToggle(false)">隐藏</el-button>
                    <p v-if="vIf.seen">{{vIf.content}}</p>
                </el-collapse-item>
                <el-collapse-item :title="vFor.title" :name="vFor.id">
                    <el-row>
                        <el-col :span="22">
                            <el-input v-model="vFor.inputItem" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="2">
                            <el-button :span="12" @click="addItem">增加</el-button>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-card class="box-card">
                            <div v-for="(todo, index) in vFor.todos" :key="index" class="text item">
                                {{todo.text}}
                            </div>
                        </el-card>
                    </el-row>
                    <el-row>
                        <el-button :span="12" @click="deleteItem">删除</el-button>
                        <el-button @click="reverseTodos">反转列表</el-button>
                    </el-row>
                </el-collapse-item>
                <el-collapse-item :title="vWatch.title" :name="vWatch.id">
                    <el-form label-width="80px">
                        <el-form-item label="firstName">
                            <el-input v-model="vWatch.name.firstName"></el-input>
                        </el-form-item>
                        <el-form-item label="lastName">
                            <el-input v-model="vWatch.name.lastName"></el-input>
                        </el-form-item>
                        <el-form-item label="fullName">
                            <el-input v-model="vWatch.name.fullName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-form>
                </el-collapse-item>
                <el-collapse-item :title="vComputed.title" :name="vComputed.id">
                    1.依赖缓存
                    <el-row>
                        <el-col :span="6">
                            <el-input v-model="vComputed.calculator.oneParameter"></el-input>
                        </el-col>
                        <el-col :span="3">+</el-col>
                        <el-col :span="6">
                            <el-input v-model="vComputed.calculator.twoParameter"></el-input>
                        </el-col>
                        <el-col :span="3">
                            <el-button @click="calculatorAddMethod">=</el-button>
                        </el-col>
                        <el-col :span="6">
                            <el-input v-model="vComputed.calculator.result"></el-input>
                        </el-col>
                    </el-row>
                    <p>计算结果为:{{calculatorAdd}}</p>
                    2.不依赖缓存
                    <p>当前时间为:{{time}}</p>
                </el-collapse-item>
            </el-collapse>
        </el-col>
    </el-row>
</div>

</template>


<script>
import _ from 'lodash'
export default {
    data() {
        return {
            title: '指令',
            activeNames: ['1'],
            vBind: {
                title: 'v-bind指令demo',
                message: '页面加载于' + new Date(),
                id: 1
            },
            vIf: {
                title: 'v-if指令demo',
                seen: true,
                content: '现在可以看到我',
                id: 2
            },
            vFor: {
                title: 'v-for指令demo',
                inputItem: '',
                todos: [{
                        text: '学习 JavaScript'
                    },
                    {
                        text: '学习 Vue'
                    },
                    {
                        text: '创建激动人心的代码'
                    }
                ],
                id: 3
            },
            vWatch: {
                title: 'watch监控demo',
                name: {
                    firstName: '',
                    lastName: '',
                    fullName: ''
                },
                id: 4
            },

            vComputed: {
                title: 'computed demo',
                calculator: {
                    oneParameter: '',
                    twoParameter: '',
                    result: ''
                },
                time: '',
                id: 5
            }

        }
    },

    // watch主要用来监听data中值的变化
    watch: {
        // this.$data可以获取data中的数据
        'vWatch.name.firstName': {
            handler(curVal, oldVal) {
                // console.log('firstName', curVal, oldVal)
                let vWatch = this.$data.vWatch
                // console.log('vWatch', vWatch)
                vWatch.name.fullName = curVal + vWatch.name.lastName
            }
        },
        'vWatch.name.lastName': {
            handler(curVal, oldVal) {
                // console.log('lastName', curVal, oldVal)
                let vWatch = this.$data.vWatch
                // console.log('vWatch', vWatch)
                vWatch.name.fullName = vWatch.name.firstName + curVal
            }
        },

        'vComputed.calculator.oneParameter': {
            handler(curVal, oldVal) {
                let vComputed = this.$data.vComputed
                let num = curVal.replace(/\D/g, '')
                // console.log('oneParameter num', parameterNum);
                vComputed.calculator = Object.assign({}, vComputed.calculator, {
                    'oneParameter': num
                })
            }
        }
    },

    // computed计算属性. 计算属性是基于它的依赖缓存.也就是说只有在它的相关依赖发生改变时才会重新取值(调用方法).
    // computed 主要使用在{{}}中
    computed: {
        calculatorAdd() {
            // console.log('compute', this.vComputed.calculator.oneParameter, this.vComputed.calculator.twoParameter)
            let result = _.toInteger(this.vComputed.calculator.oneParameter) + _.toInteger(this.vComputed.calculator.twoParameter)
            this.vComputed.calculator.result = result
            return result
        },

        // time不依赖任何其它属性
        time: function () {
            return Date.now()
        }
    },

    // dom主要用来处理dom事件,如click,change等。一般用来处理@修饰的指令
    methods: {
        handleChange() {
            // alert('12')
        },

        vBindShowMessage() {
            alert(this.vBind.message)
        },

        vIfToggle(status) {
            this.vIf.seen = status
        },

        addItem() {
            // console.log('this.vFor.inputItem', this.vFor.inputItem);
            if (this.vFor.inputItem) {
                this.vFor.todos.push({
                    text: this.vFor.inputItem
                })
            }
        },

        deleteItem() {
            if (this.vFor.todos.length > 0) {
                this.vFor.todos.pop()
            }
        },

        reverseTodos() {
            let oldTodos = _.clone(this.vFor.todos)
            this.vFor.todos = _.reverse(oldTodos)
        },

        calculatorAddMethod() {
            let result = _.toInteger(this.vComputed.calculator.oneParameter) + _.toInteger(this.vComputed.calculator.twoParameter)
            this.vComputed.calculator.result = result
        }
    },

    components: {}
}

</script>

<style lang="scss">
.test {
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }

    .box-card {
        // width: 480px;
        .text {
            font-size: 14px;
        }

        .item {
            padding: 8px 0;
        }
    }
}
</style>

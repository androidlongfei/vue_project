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
            }

        }
    },

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

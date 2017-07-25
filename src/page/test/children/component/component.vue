<template>
<div class="component">
    <p>{{title}}</p>
    <el-row>
        <el-col :span="18" :offset="3">
            <el-collapse v-model="activeNames">
                <el-collapse-item :title="componentRegister.title" :name="componentRegister.id">
                    <!--  3.使用组件. 因为HTML属性会忽略大小写,所以驼峰命名需要变成串联式命名连字符分隔） -->
                    <show-time></show-time>
                    <p>父组件中使用子组件分为三块:1.引入组件; 2.注册组件; 3.使用组件</p>
                </el-collapse-item>
                <el-collapse-item :title="componentProps.title" :name="componentProps.id">
                    <el-row>
                        <el-col :span="22">
                            <el-input v-model="componentProps.info.dataItem" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="2">
                            <el-button :span="12" @click="addItem">增加</el-button>
                        </el-col>
                    </el-row>
                    <!--  父组件通过属性向子组件传递数据-->
                    <info-list :title="componentProps.info.title" :data-list="componentProps.info.datalist"></info-list>
                    <p>父组件通过props向子组件传递数据</p>
                </el-collapse-item>
                <el-collapse-item :title="componentEmit.title" :name="componentEmit.id">
                    <p>total:{{componentEmit.emitData.total}}</p>
                    <!-- 监控increment事件,并用incrementTool方法进行绑定-->
                    <el-row>
                        <el-col :span="2" :offset="10">
                            <button-count @increment="incrementTool"></button-count>
                        </el-col>
                        <el-col :span="2">
                            <button-count @increment="incrementTool"></button-count>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <p>自定义事件</p>
                        </el-col>
                        <el-col :span="24">
                            <number-input v-model="componentEmit.emitData.price" label="Price" @newInput="currencyInput"></number-input>
                        </el-col>
                    </el-row>
                    <p>子组件通过emit和on模式向父组件传递数据</p>
                </el-collapse-item>
                <el-collapse-item :title="componentSlot.title" :name="componentSlot.id">
                    <h1>单个slot,显示备用slot</h1>
                    <el-row>
                        <h2>我是父组件的标题</h2>
                        <single-slot>
                        </single-slot>
                    </el-row>
                    <h1>单个slot,将父组件的内容显示到子组件中(slot标签所在的位置)</h1>
                    <el-row>
                        <h2>我是父组件的标题</h2>
                        <single-slot>
                            <!-- 将父组件的内容插入到子组件指定的地方 -->
                            <p :style="componentSlot.slotData.styleObject">父组件的内容</p>
                            <p :style="{color:'red','font-size':'13px'}">
                                {{componentSlot.slotData.content}}
                            </p>
                        </single-slot>
                    </el-row>
                </el-collapse-item>
            </el-collapse>
        </el-col>
    </el-row>
</div>

</template>

<script>
// 父组件中使用子组件分为三块:1.引入组件; 2.注册组件; 3.使用组件
// 1.引入组件.组件名不能与html标签名一样，如head,ul,li等
import showTime from './components/showTime'
import infoList from './components/infoList'
import buttonCount from './components/buttonCount'
import numberInput from './components/numberInput'
import singleSlot from './components/singleSlot'
export default {
    data() {
        return {
            title: '组件测试页面',
            activeNames: ['1'],
            componentRegister: {
                title: '组件注册与引用',
                id: 1
            },
            componentProps: {
                title: 'props用法',
                id: 2,
                info: {
                    title: '信息列表',
                    // title: {},
                    dataItem: '',
                    datalist: [1, 2]
                }
            },
            componentEmit: {
                title: 'emit用法',
                id: 3,
                emitData: {
                    total: 0,
                    price: 0
                }
            },
            componentSlot: {
                title: 'slot用法',
                id: 4,
                slotData: {
                    content: '我是父组件的内容',
                    styleObject: {
                        color: 'blue',
                        'font-size': '13px'
                    }
                }
            }

        }
    },

    created() {},

    methods: {
        addItem() {
            if (this.componentProps.info.dataItem) {
                this.componentProps.info.datalist.push(this.componentProps.info.dataItem)
            }
        },

        incrementTool(childrenCount) {
            console.log('childrenCount', childrenCount);
            this.componentEmit.emitData.total += 1
        },

        currencyInput(value) {
            console.log('currency-input', value)
        }
    },

    // 2.注册组件
    components: {
        showTime,
        infoList,
        buttonCount,
        numberInput,
        singleSlot
    }
}

</script>

<style lang="scss">
.component {}</style>

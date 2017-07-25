<template>
<div class="buttonCount">
    <el-button @click.native="doTheThing" @click="increment()">{{count}}</el-button>
</div>

</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },

    methods: {
        increment() {
            this.count += 1
            // $emit 发送事件
            this.$emit('increment', this.count)
        },

        // 原生点击事件
        doTheThing(ev) {
            console.log('ev', ev);
        }
    }
}

</script>

<style lang="css">
</style>

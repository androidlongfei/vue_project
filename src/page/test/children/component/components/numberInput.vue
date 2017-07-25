<template>
<div>
    <label v-if="label">{{label}}:</label>
    <input ref="numberInput" :value="value" @input="updateValue">
</div>

</template>

<script>
// import _ from 'lodash'
export default {
    props: {
        value: {
            type: [Number, String],
            default: 0
        },
        label: {
            type: String,
            default: ''
        }
    },

    data() {
        return {

        }
    },

    mounted() {
        this.formatValue()
    },

    methods: {
        // input value change callback
        updateValue(event) {
            let value = event.target.value
            // 只准输入数字
            let formattedValue = value.replace(/\D/g, '')
            console.log('formattedValue', formattedValue)
            this.$refs.numberInput.value = formattedValue
            // 向父组件传递参数
            this.$emit('newInput', formattedValue)
        },

        formatValue: function () {
            // 只准输入数字
            this.$refs.numberInput.value = this.$refs.numberInput.value.replace(/\D/g, '')
        }
    }
}

</script>

<style lang="css">
</style>

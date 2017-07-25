<template>
<div class="showTime">
    <p>当前时间为:{{currentTime}}</p>
</div>

</template>

<script>
import moment from 'moment'
import _ from 'lodash'
export default {
    data() {
        return {
            currentTime: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
            intervals: []
        }
    },

    created() {
        let interval = setInterval(() => {
            this.changeTime()
        }, 1000)
        console.log('showTime component created', interval)
        this.intervals.push(interval)
    },

    beforeDestroy() {
        console.log('showTime component destoryed', this.intervals)
        _.each(this.intervals, function (item) {
            clearInterval(item)
        })
    },

    methods: {
        changeTime() {
            this.currentTime = moment().format('YYYY-MM-DD h:mm:ss')
        }
    }

}

</script>

<style lang="css">
.showTime{
color: red
}
</style>

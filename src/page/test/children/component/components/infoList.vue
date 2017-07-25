<template>
<div class="infoList">
    <p>{{title}}</p>
    <el-row>
        <el-card class="box-card">
            <div v-for="(item, index) in dataList" :key="index" class="text item">
                {{item}}
            </div>
        </el-card>
    </el-row>
</div>

</template>

<script>
export default {

    props: {
        title: {
            type: String,
            required: true
        },
        dataList: {
            type: Array,
            default: function () {
                return []
            },
            required: true
        }
    },
    data() {
        return {}
    }

}

</script>

<style lang="css">
.infoList{
color: red
}
</style>

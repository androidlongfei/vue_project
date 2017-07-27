<template>
<div class="userInfo">
    <el-row>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span style="line-height: 36px;">{{title}}{{user.title}}{{user.id}}</span>
            </div>
            <div class="content">
                {{user.content}}
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
        user: {
            type: Object,
            default: function () {
                return {}
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
.content{
  height: 800px
}
</style>

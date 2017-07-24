<template lang="html">
  <div class="test">
      <p>{{title}}</p>
      <el-button @click.native="startHacking">Let's do it</el-button>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">11</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">22</div></el-col>
      </el-row>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'element-ui组件页面'
        }
    },

    components: {}
}

</script>

<style lang="scss">
.test {}</style>

<template>
<div>
    <h3>我是子组件的标题</h3>
    <slot>
        只有在没有要分发的内容时才会显示。
    </slot>
    <p>我是子组件的内容</p>
</div>

</template>

<script>
export default {}

</script>

<style lang="css">
</style>

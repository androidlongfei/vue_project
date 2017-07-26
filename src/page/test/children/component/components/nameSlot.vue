<template>
<div>
    <div class="container">
        <header>
            <!--  属性slot=header的元素显示在这-->
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <!--  属性slot=footer的元素显示在这-->
            <slot name="footer"></slot>
        </footer>
    </div>
</div>

</template>

<script>
export default {}

</script>

<style lang="css">
</style>

<template>
    <div class="comp-a">
        组件B
    </div>
</template>
<script>

export default {
    mounted(){
        console.log('组件B渲染');
    },
    destroed(){
        console.log('组件B销毁');
    }
}
</script>

<style scoped>

</style>
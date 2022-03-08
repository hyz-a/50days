<template>
    <div class="comp-a">
        组件C
    </div>
</template>
<script>

export default {
    mounted(){
        console.log('组件C渲染');
    },
    destroed(){
        console.log('组件C销毁');
    }
}
</script>

<style scoped>

</style>
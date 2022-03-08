<template>
    <div id="app">
        <button @click="state = 'A'"></button>
        <button @click="state = 'B'"></button>
        <button @click="state = 'C'"></button>

        <comp-a v-if="state === 'A'"></comp-a>
        <comp-b v-if="state === 'B'"></comp-b>
        <comp-c v-if="state === 'C'"></comp-c>
      <!--<comp-a v-show="state === 'A'"></comp-a>
        <comp-b v-show="state === 'B'"></comp-b>
        <comp-c v-show="state === 'C'"></comp-c>-->

    </div>
</template>
<script>
import CompA from './CompA.vue';
import CompB from './CompB.vue';
import CompC from './CompC.vue';
export default defineComponent({
    data(){
       return {
           state:'A'
       }
    },
    components:{
        CompA,
        CompB,
        CompC
    }
})
</script>

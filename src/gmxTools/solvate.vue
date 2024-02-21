<script setup>
    import textBox from '../components/textBox.vue';
    const v = defineModel()
</script>
<template>
    <div class="flex flex-row m-1 flex-nowrap">
        <div>water topology:&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div><textBox class="w-20" v-model="v.waterTop"/></div>
    </div>
</template>
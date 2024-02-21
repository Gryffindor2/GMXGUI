<script setup>
    import textBox from '../components/textBox.vue';
    const v = defineModel()
</script>
<template>
    <div class="flex flex-row">
        <div>water topology</div>
        <div class="flex-1"></div>
        <div><textBox v-model="v.waterTop"/></div>
    </div>
</template>
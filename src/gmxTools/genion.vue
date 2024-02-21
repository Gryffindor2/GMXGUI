<script setup>
    const v = defineModel()
    import textBox from '../components/textBox.vue'
</script>
<template>
    <div class="flex flex-col">
        <div class="flex flex-row">
            <div>p/n ion name</div>
            <div class="flex-1"></div>
            <div><textBox v-model="v.positiveIonName"/>+</div>
            <div><textBox v-model="v.negativeIonName"/>-</div>
        </div>
        <div class="flex flex-row">
            <div>c</div>
            <div class="flex-1"></div>
            <div><textBox v-model="v.concentration"/></div>
        </div>
    </div>
</template>

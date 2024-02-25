<script setup>
    const v = defineModel()
    import textBox from '../components/textBox.vue'
</script>
<template>
    <div class="flex flex-col m-1 min-w-max">
        <div class="flex flex-row flex-nowrap">
            <div>p/n ion name:&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div class="flex-1"></div>
            <div>
                <textBox class="w-8" v-model="v.positiveIonName"/>
                <sup>+</sup>
            </div>
            &nbsp;
            <div>
                <textBox class="w-8" v-model="v.negativeIonName"/>
                <sup>-</sup>
            </div>
        </div>
        <div class="flex flex-row">
            <div>c</div>
            <div class="flex-1"></div>
            <div><textBox class="w-20" v-model="v.concentration"/></div>
        </div>
    </div>
</template>

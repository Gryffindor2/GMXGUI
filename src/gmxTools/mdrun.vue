<script setup>
import textBox from "../components/textBox.vue";

const v = defineModel();
</script>

<template>
    <div class="flex flex-col m-1">
        <div class="flex flex-row">
            <div>name&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div class="flex-1"></div>
            <textBox v-model="v.name" />
        </div>
        <div class="flex flex-row">
            <div>gpu</div>
            <div class="flex-1"></div>
            <input type="checkbox" v-model="v.gpu" />
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue'
    const v = defineModel()
    const props = defineProps(['temp'])
    const state = computed(()=>{
        return props.temp.length == 1
    })
</script>

<template>
    <input type="text" v-model="v" v-if="state" class="border border-gray-400 rounded-sm"/>
	<select v-if="!state" v-model="v" class="border border-gray-400 rounded-sm">
        <template v-for="i in props.temp">
            <option v-bind:value="i">{{i}}</option>
        </template>
	</select>
</template>

<script setup>
    const v = defineModel()
    const props = defineProps(['temp'])
</script>

<template>
	<select v-model="v" class="border border-gray-400 rounded-sm">
        <template v-for="i in props.temp">
            <option v-bind:value="i">{{i}}</option>
        </template>
	</select>
</template>

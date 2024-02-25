<script setup>
    const s = defineModel()
</script>

<template>
    <div class="flex flex-row">
        <input
            type="text"
            v-model="s"
            class="rounded-md border-gray-400 border flex-1 px-1 py-1"
            placeholder="Search for option" />
        <div>

        </div>
    </div>
</template>
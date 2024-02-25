<script setup>
    import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
    const s = defineModel()
</script>

<template>
    <div class="flex flex-row">
        <input
            type="text"
            v-model="s"
            class=" border-gray-400 border flex-1 px-1 py-1 rounded-l-md"
            placeholder="Search for option" />
        <div>
            <MagnifyingGlassIcon class="h-full  text-gray-400 border-gray-400 border rounded-r-md border-l-0" />
        </div>
    </div>
</template>
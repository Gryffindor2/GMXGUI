<script setup>
const props = defineProps(["v"]);
import textBox from "../components/textBox.vue";
const v = defineModel();
</script>
<template>
    <table class="m-1 align-middle">
        <td>shape</td>
        <td></td>
        <td></td>
        <td class="text-right">
            <select v-model="v.shape" class="border border-gray-400 rounded-sm">
                <option value="cubic">cubic</option>
                <option value="octahedron">octahedron</option>
            </select>
        </td>

        <tr>
            <td>centered</td>
            <td></td>
            <td></td>
            <td class="text-right">
                <input
                    type="checkbox"
                    v-model="v.centered"
                    class="border border-gray-400 rounded-sm" />
            </td>
        </tr>
        <tr>
            <td></td>
            <td class="text-center">x</td>
            <td class="text-center">y</td>
            <td class="text-center">z</td>
        </tr>
        <tr>
            <td>size</td>
            <td><textBox class="w-20 text-center" v-model="v.size_x" /></td>
            <td><textBox class="w-20 text-center" v-model="v.size_y" /></td>
            <td><textBox class="w-20 text-center" v-model="v.size_z" /></td>
        </tr>
        <tr>
            <td>center</td>
            <td><textBox class="w-20 text-center" v-model="v.center_x" /></td>
            <td><textBox class="w-20 text-center" v-model="v.center_y" /></td>
            <td><textBox class="w-20 text-center" v-model="v.center_z" /></td>
        </tr>
    </table>
</template>

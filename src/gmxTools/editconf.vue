<script setup>
    const props = defineProps(["v"]);
    import textBox from '../components/textBox.vue'
    const v = defineModel();
</script>
<template>
    <div class="flex flex-col">
        <table border="1">
            <td>shape</td>
            <td></td>
            <td></td>
            <td>
                <select v-model="v.shape">
                    <option value="cubic">cubic</option>
                    <option value="octahedron">octahedron</option>
                </select>
            </td>

            <tr>
                <td>centered</td>
                <td></td>
                <td></td>
                <td><input type="checkbox" v-model="v.centered" class="border border-gray-400 rounded-sm"/></td>
            </tr>
            <tr>
                <td></td>
                <td>x</td>
                <td>y</td>
                <td>z</td>
            </tr>
            <tr>
                <td>size</td>
                <td><textBox v-model="v.size_x"/></td>
                <td><textBox v-model="v.size_y"/></td>
                <td><textBox v-model="v.size_z"/></td>
            </tr>
            <tr>
                <td>center</td>
                <td><textBox v-model="v.center_x"/></td>
                <td><textBox v-model="v.center_y"/></td>
                <td><textBox v-model="v.center_z"/></td>
            </tr>
        </table>
    </div>
</template>

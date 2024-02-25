<script setup>
import { ref } from "vue";
import textBox from "../components/textBox.vue";
import mdpTemplates from "../mdpTemplates";

const v = defineModel();
const mdpTemplatesName = ref("");
const changeMdpTemplates = () => {
    for (var i = 0; i < mdpTemplates.length; i++) {
        if (mdpTemplates[i].name == mdpTemplatesName.value) {
            v.value.mdp = mdpTemplates[i].temp;
        }
    }
};
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
        <div class="flex flex-row">
            <div>mdp</div>
            <div class="flex-1"></div>
            <select
            class="border border-gray-400 rounded-sm"
                v-model="mdpTemplatesName"
                @change="
                    changeMdpTemplates();
                    $emit('template-change');
                ">
                <template v-for="item in mdpTemplates">
                    <option v-bind:value="item.name">{{ item.name }}</option>
                </template>
            </select>
        </div>
    </div>
</template>

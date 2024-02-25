<script setup>
import mdrun from "./gmxTools/mdrun.vue";
import editconf from "./gmxTools/editconf.vue";
import solvate from "./gmxTools/solvate.vue";
import genion from "./gmxTools/genion.vue";
import roundedButton from "./components/roundedButton.vue";
import searchBox from "./components/searchBox.vue";
import textBox from "./components/textBox.vue";
import combobox from "./components/combobox.vue";
import copyright from "./components/copyright.vue";
import MDScript from "./gmxTools/MDScript.js";

import { saveAs } from "file-saver";
import Chooser from "./components/chooser.vue";
import MdpParser from "./MdpParser.js";
import { reactive, ref, onMounted, watch } from "vue";

const modules = reactive(["mdrun", "editconf", "solvate", "genion"]);
const input = ref("");
const mdp = reactive(new MdpParser());
const search = ref("");
const extraVisiable = ref(false);
const currentStep = ref(0);
const mdSteps = reactive([{ type: "mdrun", colapsed: true, data: {} }]);
var cleared = false;

const clear = () => {
    mdp.clear();
};

const changeTemplate = (template) => {
    cleared = true;
    clear();
    mdp.str = template;
};

const save = () => {
    var blob = new Blob([mdp.str], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "md.mdp");
};

const deleteStep = (index) => {
    if(mdSteps.length == 1){
        return;
    }
    currentStep.value = -1;
    clear();
    mdSteps.splice(index, 1);
}

const containsIgnoreCase = (str, search) => {
    return str.toLowerCase().includes(search.toLowerCase());
};

const contain = (section, target) => {
    if (target == null || target == ""){
        if(section.sectionActivatedChanged){
            section.sectionActivated = false;
            section.sectionActivatedChanged = false;
        }
        return true;
    }

    for (var i = 0; i < section.sectionData.length; i++) {
        var item = section.sectionData[i];
        if (containsIgnoreCase(item.name, target)) {
            if(section.sectionActivated == false){
                section.sectionActivatedChanged = true;
            }
            section.sectionActivated = true;
            return true;
        }
    }
    return false;
};

const open = () => {
    document.getElementById("open-file-dialog").click();
};

onMounted(() => {
    document.getElementById("open-file-dialog").onchange = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function () {
            var fileContent = reader.result;
            mdp.str = fileContent;
        };

        reader.readAsText(file);
    };
});

watch(mdp, () => {
    if(currentStep.value == -1) {
        return;
    }
    if (cleared == true) {
        cleared = false;
        return;
    }
    var t = document.getElementById("mdp").value;
    mdSteps[currentStep.value].data.mdp = t;
});

const updateExtra = () => {
    mdp.extraStr = document.getElementById("ta").value;
};

const generate = () => {
    if (input.value == "" || input.value == null) {
        alert("Please input the input file name.");
        return;
    }
    alert(
        "Please carefully check the script generated.\n***NOTE: the ndx file need to be added manually.***"
    );
    var md = new MDScript(input, mdSteps);
    var zip = md.generateZip();
    zip.generateAsync({ type: "blob" }).then(function (content) {
        saveAs(content, "md.zip");
    });
};

const newStep = () => {
    mdSteps.push({
        type: "mdrun",
        colapsed: true,
        data: {},
    });
};
</script>

<template>

    <div class="flex flex-col h-screen w-screen">
        <!--copyright-->
        <copyright />
        <!--md file generator-->
        <table class="align-middle mx-1.5 mt-1.5">
            <tr>
                <td>input:<textBox v-model="input" class="h-6" />.gro</td>
                <td class="text-right">
                    <roundedButton
                        class="bg-blue-500 hover:bg-blue-400"
                        @click="generate">
                        generate
                    </roundedButton>
                </td>
            </tr>
        </table>
        <div class="flex flex-row mt-1.5 mx-1.5">
            <!--scroll bar-->
            <div class="w-0 overflow-auto flex-1 flex flex-row">
                <template v-for="(step, index) in mdSteps">
                    <div
                        class="mr-1.5 flex flex-row rounded-md border-blue-400 border h-28 select-none"
                        v-on:click="
                            currentStep = index;
                            changeTemplate(step.data.mdp);
                        "
                        v-on:contextmenu.prevent="deleteStep(index)"
                        >
                        <div
                            v-on:click="step.colapsed = !step.colapsed"
                            class="flex flex-col rounded-md bg-blue-500 text-white text-center">
                            <div class="mt-1">Step {{ index + 1 }}:</div>
                            <combobox
                                v-model="step.type"
                                @click.stop=""
                                class="text-black m-1"
                                v-bind:temp="modules" />
                        </div>

                        <div v-show="!step.colapsed" class="overflow-auto">
                            <mdrun
                                v-on:template-change="
                                    changeTemplate(step.data.mdp)
                                "
                                v-if="step.type == 'mdrun'"
                                v-model="step.data" />
                            <editconf
                                v-if="step.type == 'editconf'"
                                v-model="step.data" />
                            <solvate
                                v-if="step.type == 'solvate'"
                                v-model="step.data" />
                            <genion
                                v-if="step.type == 'genion'"
                                v-model="step.data" />
                        </div>
                    </div>
                </template>
                <div
                    @click="newStep()"
                    class="select-none rounded-md border-blue-500 text-blue-500 grid items-center text-center border-2 h-28 w-10 shrink-0">
                    +
                </div>
            </div>
        </div>
        <div class="flex flex-row flex-1 h-0 mt-1.5">
            <!--left part-->
            <div class="flex flex-col w-6/12 mx-1.5">
                <textarea
                    id="mdp"
                    v-model="mdp.str"
                    class="border-gray-400 border rounded-lg flex-1" />
                <!--tool bar-->
                <div class="flex flex-row my-1">
                    <roundedButton
                        @click="clear"
                        class="bg-red-500 hover:bg-red-400">
                        Clear
                    </roundedButton>
                    <div class="flex-1"></div>
                    <input
                        type="file"
                        id="open-file-dialog"
                        accept=".mdp"
                        v-show="false" />
                    <roundedButton
                        @click="open"
                        class="bg-blue-500 hover:bg-blue-400">
                        Open
                    </roundedButton>
                    <a v-show="false" id="link" />
                    <roundedButton
                        @click="save"
                        class="bg-blue-500 hover:bg-blue-400 ml-1.5">
                        Save
                    </roundedButton>
                    <roundedButton
                        @click="navigator.clipboard.writeText(mdp.str)"
                        class="bg-blue-500 hover:bg-blue-400 ml-1.5">
                        Copy
                    </roundedButton>
                </div>
            </div>
            <!--right part-->
            <div class="flex flex-col w-6/12 h-full mx-1.5">
                <!--search-->
                <searchBox v-model="search" />
                <!--scroll bar-->
                <div class="overflow-y-auto mt-1.5 h-0 flex-1">
                    <!--main option-->
                    <template v-for="section in mdp.obj">
                        <div
                            class="border-gray-400 rounded-lg border mb-1"
                            v-if="contain(section, search)">
                            <div
                                class="flex flex-row m-1"
                                @click="
                                    section.sectionActivated =
                                        !section.sectionActivated
                                ">
                                <div>{{ section.sectionName }}</div>
                                <div class="flex-1"></div>
                            </div>
                            <div v-if="section.sectionActivated">
                                <div class="bg-gray-400 h-px"></div>
                                <div class="m-1">
                                    <template
                                        v-for="setting in section.sectionData">
                                        <div
                                            v-show="
                                                containsIgnoreCase(
                                                    setting.name,
                                                    search
                                                )
                                            ">
                                            <div class="flex flex-row">
                                                <div>{{ setting.name }}</div>
                                                <div class="flex-1"></div>
                                                <chooser
                                                    v-bind:temp="
                                                        setting.candidate
                                                    "
                                                    v-model="setting.value" />
                                            </div>
                                            <div class="ml-2 text-slate-500">
                                                {{ setting.comment }}
                                            </div>
                                            <div class="h-2"></div>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </template>
                    <!--extra option-->
                    <div class="border-gray-400 rounded-lg border mb-1 select-none">
                        <div class="flex flex-row m-1">
                            <div>Extra options</div>
                            <div class="flex-1"></div>
                            <input type="checkbox" v-model="extraVisiable" />
                        </div>
                        <div v-if="extraVisiable">
                            <div class="bg-slate-400 h-px"></div>
                            <div class="m-1 w-12/12 flex flex-col">
                                <textarea
                                    id="ta"
                                    v-bind:value="mdp.extraStr"
                                    rows="5"
                                    class="border-gray-400 border rounded-lg flex-1"></textarea>
                                <div class="flex flex-row">
                                    <div class="flex-1"></div>
                                    <button
                                        v-on:click="updateExtra"
                                        class="mt-1 rounded-md bg-blue-500 px-4 py-2 text-white ml-1.5">
                                        Ok
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

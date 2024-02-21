<script setup>
import mdrun from "./gmxTools/mdrun.vue";
import editconf from "./gmxTools/editconf.vue";
import solvate from "./gmxTools/solvate.vue";
import genion from "./gmxTools/genion.vue";
import buttonRounded from "./components/buttonRounded.vue";
import textBox from "./components/textBox.vue";
import combobox from "./components/combobox.vue";
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

const clear = () => {
    mdp.clear();
};

const changeTemplate = (template) => {
    clear()
    mdp.str = template;
};

const ok = () => {
    var t = document.getElementById("mdp").value;
    mdSteps[currentStep.value].data.mdp = t;
}

const contain = (str1, str2) => {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    return str1.includes(str2);
};

const copy = () => {
    navigator.clipboard.writeText(mdp.str);
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

const updateExtra = () => {
    mdp.extraStr = document.getElementById("ta").value;
};

const generate = () => {
    if(input.value == "" ||input.value == null){
        alert("Please input the input file name.");
        return;
    }
    alert("Please carefully check the script generated.\n***NOTE: the cpt file need to be added manually.***");
    var md = new MDScript(input, mdSteps);
    var zip = md.generateZip()
    zip.generateAsync({type:"blob"}).then(function(content) {
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
        <p class="text-center">Gromacs GUI Copyright (C) 2024 Xiaoyang Liu</p>
        <!--md file generator-->
        <div class="flex flex-row">
            input:<textBox v-model="input" class="h-4" />.gro
            <div class="flex-1" />
            <buttonRounded @click="generate"> generate </buttonRounded>
        </div>
        <div class="flex flex-row my-4">
            <!--scroll bar-->
            <div class="w-0 overflow-auto flex-1 flex flex-row">
                <template v-for="(step, index) in mdSteps">
                    <div
                        class="flex flex-row rounded-md border-blue-400 border h-28"
                        v-on:click="
                            currentStep = index;
                            changeTemplate(step.data.mdp);">
                        <div
                            v-on:click="step.colapsed = !step.colapsed"
                            class="flex flex-col rounded-md bg-blue-500 text-white text-center">
                            <div>Step {{ index }}:</div>
                            <combobox
                                v-model="step.type"
                                @click.stop=""
                                class="text-black"
                                v-bind:temp="modules" />
                        </div>

                        <div v-if="!step.colapsed" class="overflow-auto">
                            <mdrun
                                v-on:template-change="changeTemplate(step.data.mdp);"
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
                    class="rounded-md border-blue-500 text-blue-500 grid items-center text-center border-2 h-28 w-10 shrink-0">
                    +
                </div>
            </div>
        </div>
        <div class="flex flex-row flex-1 h-0">
            <!--left part-->
            <div class="flex flex-col w-6/12 mx-1.5">
                <textarea
                    id="mdp"
                    v-model="mdp.str"
                    class="border-gray-400 border rounded-lg flex-1"></textarea>
                <div class="flex flex-row my-1">
                    <button
                        @click="clear"
                        class="rounded-md bg-red-500 px-4 py-2 text-white ml-1.5">
                        Clear
                    </button>
                    <div class="flex-1"></div>
                    <input
                        type="file"
                        id="open-file-dialog"
                        accept=".mdp"
                        v-show="false" />
                    <button
                        @click="open"
                        class="rounded-md bg-blue-500 px-4 py-2 text-white ml-1.5">
                        Open
                    </button>
                    <a v-show="false" id="link" />
                    <button
                        @click="ok"
                        class="rounded-md bg-blue-500 px-4 py-2 text-white ml-1.5">
                        Ok
                    </button>
                    <button
                        @click="copy"
                        class="rounded-md bg-blue-500 px-4 py-2 text-white ml-1.5">
                        Copy
                    </button>
                </div>
            </div>
            <!--right part-->
            <div class="flex flex-col w-6/12 h-full mx-1.5">
                <!--search-->
                <div class="flex flex-row">
                    <input
                        type="text"
                        v-model="search"
                        class="rounded-md border-gray-400 border flex-1 px-1 py-1"
                        placeholder="Search for section" />
                </div>
                <!--scroll bar-->
                <div class="overflow-y-auto mt-1.5 h-0 flex-1">
                    <!--main option-->
                    <template v-for="section in mdp.obj">
                        <div
                            class="border-gray-400 rounded-lg border mb-1"
                            v-if="contain(section.sectionName, search)">
                            <div class="flex flex-row m-1">
                                <div>{{ section.sectionName }}</div>
                                <div class="flex-1"></div>
                                <input
                                    type="checkbox"
                                    v-model="section.sectionActivated" />
                            </div>
                            <div v-if="section.sectionActivated">
                                <div class="bg-gray-400 h-px"></div>
                                <div class="m-1">
                                    <template
                                        v-for="setting in section.sectionData">
                                        <div class="flex flex-row">
                                            <div>{{ setting.name }}</div>
                                            <div class="flex-1"></div>
                                            <chooser
                                                v-bind:temp="setting.candidate"
                                                v-model="
                                                    setting.value
                                                "></chooser>
                                        </div>
                                        <div class="ml-2 text-slate-500">
                                            {{ setting.comment }}
                                        </div>
                                        <div class="h-2"></div>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </template>
                    <!--extra option-->
                    <div class="border-gray-400 rounded-lg border mb-1">
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

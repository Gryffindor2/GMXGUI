<script setup>
import Chooser from "./chooser.vue";
import { reactive, ref, onMounted } from "vue";

import MdpParser from "./MdpParser.js";
const mdp = reactive(new MdpParser());
const extraVisiable = ref(false);
const EM = () => {
  mdp.clear();
  mdp.str = `
integrator=steep
nsteps=50000
emtol=1000.0
cutoff-scheme=Verlet
nstlist=1
coulombtype=PME
ns-type=grid
rcoulomb=1.0
rvdw=1.0
`;
};

const NVT = () => {
  mdp.clear();
  mdp.str = `title=OPLS Lysozyme NVT equilibration
define=-DPOSRES
integrator=md
dt=0.002
nsteps=50000
gen_seed=-1
gen_temp=300
gen_seed=-1
gen_vel=yes
cutoff-scheme=Verlet
coulombtype=PME
rcoulomb=1.0
rvdw=1.0
nstxout=500
nstvout=500
nstenergy=500
nstlog=500
continuation=no
constraint_algorithm=lincs
constraints=h-bonds
lincs_iter=1
lincs_order=4
ns_type=grid
DispCorr=EnerPres
pme_order=4
fourierspacing=0.16
tcoupl=V-rescale
tc-grps=Protein Non-Protein
tau-t=0.1     0.1
ref-t=300     300
pcoupl=no
`;
};

const NPT = () => {};

const MD = () => {};

const save = () => {
  var link = document.getElementById("link");
  link.href = "data:text/plain;charset=utf-8," + encodeURIComponent(mdp.str);
  link.download = "result.mdp";
  link.click();
};

const open = () => {
  document.getElementById("file-dialog").click();
};

onMounted(() => {
  alert("评估版本，功能尚不完善，请谨慎使用")
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
</script>

<template>
  <div class="flex flex-col h-screen">
    <!--copyright-->
    <div>
      <p class="text-center">MdpGenerator Copyright (C) 2024 Xiaoyang Liu</p>
    </div>
    <!--template button-->
    <div class="flex flex-row my-4">
      <button
        @click="EM"
        class="rounded-md bg-blue-500 px-4 py-2 text-white ml-1.5"
      >
        EM
      </button>
      <button
        @click="NVT"
        class="rounded-md bg-blue-500 px-4 py-2 text-white ml-1.5"
      >
        NPT
      </button>
      <button
        @click="NPT"
        class="rounded-md bg-blue-500 px-4 py-2 text-white ml-1.5"
      >
        NVT
      </button>
      <button
        @click="MD"
        class="rounded-md bg-blue-500 px-4 py-2 text-white ml-1.5"
      >
        MD
      </button>
      <button
        @click="PULL"
        class="rounded-md bg-blue-500 px-4 py-2 text-white ml-1.5"
      >
        PULL
      </button>
    </div>
    <div class="flex flex-row flex-1 h-0">
      <!--left part-->
      <div class="flex flex-col w-6/12 mx-1.5">
        <textarea
          v-model="mdp.str"
          class="border-gray-400 border rounded-lg flex-1"
        ></textarea>
        <div class="flex flex-row my-1">
          <div class="flex-1"></div>
          <input
            type="file"
            id="open-file-dialog"
            accept=".mdp"
            v-show="false"
          />
          <button
            @click="open"
            class="rounded-md bg-blue-500 px-4 py-2 text-white ml-1.5"
          >
            Open
          </button>
          <a v-show="false" id="link" />
          <button
            @click="save"
            class="rounded-md bg-blue-500 px-4 py-2 text-white ml-1.5"
          >
            Save
          </button>
        </div>
      </div>
      <!--right part-->
      <div class="w-6/12 mx-1.5 overflow-y-auto h-full">
        <!--scroll bar-->
        <div class="">
          <!--main option-->
          <template v-for="section in mdp.obj">
            <div class="border-gray-400 rounded-lg border mb-1">
              <div class="flex flex-row m-1">
                <div>{{ section.sectionName }}</div>
                <div class="flex-1"></div>
                <input type="checkbox" v-model="section.sectionActivated" />
              </div>
              <div v-if="section.sectionActivated">
                <div class="bg-gray-400 h-px"></div>
                <div class="m-1">
                  <template v-for="setting in section.sectionData">
                    <div class="flex flex-row">
                      <div>{{ setting.name }}</div>
                      <div class="flex-1"></div>
                      <chooser
                        v-bind:temp="setting.candidate"
                        v-model="setting.value"
                      ></chooser>
                    </div>
                    <div class="ml-2 text-slate-500">{{ setting.comment }}</div>
                    <div class="h-2"></div>
                  </template>
                </div>
              </div>
            </div>
          </template>
          <!--extra-->
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
                  class="border-gray-400 border rounded-lg flex-1"
                ></textarea>
                <div class="flex flex-row">
                  <div class="flex-1"></div>
                  <button
                    v-on:click="updateExtra"
                    class="mt-1 rounded-md bg-blue-500 px-4 py-2 text-white ml-1.5"
                  >
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

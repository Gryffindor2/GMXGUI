import JSZip from "jszip";
import mdpTemplates from '../mdpTemplates.js';
import MdpParser from "@/MdpParser.js";

class MDScript{
    constructor(input, steps){
        this.steps = steps;
        this.input = input.value;
    }

    generateZip(){
        var sh = "";
        var zip = new JSZip();
        var currentRunName = this.input;
        var mdp = new MdpParser()
        for(var i=0; i<this.steps.length; i++){
            var type = this.steps[i].type;
            var data = this.steps[i].data;
            switch (type) {
                case "mdrun":
                    var runName = this.input + "_" + data.name;
                    var mdpFilename = "md_" + data.name + ".mdp";
                    zip.file(mdpFilename, data.mdp);

                    mdp.clear()
                    mdp.str = data.mdp;
                    var needCpt = mdp.search("continuation")
                    var gromppCommand = 
                                        "gmx grompp" + 
                                        " -f " + mdpFilename +
                                        " -c " + currentRunName + ".gro" + 
                                        " -p topol.top" + 
                                        " -r " + currentRunName + ".gro" +
                                        (needCpt == "yes"? " -t " + currentRunName + ".cpt": "") +
                                        " -o " + runName + ".tpr" +
                                        " -maxwarn 5";
                    sh += gromppCommand + "\n";

                    var mdrunCommand = 
                                    "gmx mdrun" + 
                                    " -v" + 
                                    " -deffnm " + runName +
                                    (data.gpu? " -nb gpu": "");
                    sh += mdrunCommand + "\n";
                    currentRunName = runName;
                    break;

                case "genion":
                    var runName = this.input + "_ion";
                    var mdpFilename = "ion.mdp";
                    mdp = new MdpParser();
                    mdp.str = mdpTemplates[0].temp;
                    zip.file(mdpFilename, mdp.str);

                    var gromppCommand = 
                                        "gmx grompp" + 
                                        " -f " + mdpFilename + 
                                        " -c " + currentRunName + ".gro" + 
                                        " -p topol.top" + 
                                        " -o " + runName + ".tpr"+
                                        " -maxwarn 5";
                    sh += gromppCommand + "\n";

                    var genionCommand =
                                "gmx genion" +
                                " -p topol.top" +
                                " -s " + runName + ".tpr" + 
                                " -o " + runName + ".gro" +
                                " -pname " + data.positiveIonName + 
                                " -nname " + data.negativeIonName +
                                " -neutral" +
                                " -conc " + data.concentration;
                    currentRunName = runName;
                    sh += genionCommand + "\n";
                    break;

                case "solvate":
                    var runName = this.input + "_solv";
                    var base = "gmx solvate";
                    var options = 
                                " -cp " + currentRunName + ".gro" +
                                " -cs " + data.waterTop + ".gro" +
                                " -p topol.top" + 
                                " -o " + runName + ".gro";
                    var solvateCommand = base + options;
                    sh += solvateCommand + "\n";
                    currentRunName = runName;
                    break;
                case "editconf":
                    var runName = this.input + "_box";
                    var editconfCommand =
                                "gmx editconf" +
                                " -f " + currentRunName + ".gro" +
                                " -o " + runName + ".gro" +
                                " -bt " + data.shape +
                                " -d 1" +
                                (typeof data.center_x === 'number'?" -center " + data.center_x + " " + data.center_y + " " + data.center_z: "") +
                                (data.centered? " -c": "") +
                                " -box " + data.size_x + " " + data.size_y + " " + data.size_z;
                    currentRunName = runName;
                    sh += editconfCommand + "\n";
                    break;
                default:
                    break;
            }
        }
        zip.file("run_md.sh", sh);
        return zip
    }
}

export default MDScript;
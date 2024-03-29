import mdpOptions from "./mdpOptions.js";
class MdpParser{
    constructor(){
        this.mdp = mdpOptions;
        for(var i = 0; i < this.mdp.length; i++){
            this.mdp[i].sectionActivated = false;
            this.mdp[i].sectionActivatedChanged = false;
        }
        this.extra = [];
    }

    clear(){
        for(var i = 0; i < this.mdp.length; i++){
            this.mdp[i].sectionActivated = false;
            for(var j = 0; j < this.mdp[i].sectionData.length; j++){
                
                this.mdp[i].sectionData[j].value = '';
            }
        }
        this.extra = [];
    }
    strip(s){
        var lines = s.split('\n');
        var result = "";
        for(var i = 0; i < lines.length; i++){
            var line = lines[i].trim();
            var parts = line.split(';');
            var validPart = parts[0].trim();
            if(validPart.length > 0){
                result += validPart + "\n";
            }
        }
        return result;
    }

    get str(){
        var result = '';
        for(var i = 0; i < this.mdp.length; i++){
            var sectionNameWritten = false
            for(var j = 0; j < this.mdp[i].sectionData.length; j++){
                var key = this.mdp[i].sectionData[j].name;
                var value = this.mdp[i].sectionData[j].value;

                if(value != null && value != '' && value != this.mdp[i].sectionData[j].defaultValue){
                    if(sectionNameWritten == false){
                        result += ';;' + this.mdp[i].sectionName + "\n";
                    }
                    result += '\t' + key + "=" + value + "\n";
                    sectionNameWritten = true
                }
            }
        }
        result = result + this.extraStr;
        return result;
    }
    set extraStr(value){
        this.str = value;
    }
    set str(value){
        if(value == null || value == ''){
            return;
        }
        this.extra = [];
        var strProcessed = this.strip(value);
        var lines = strProcessed.trim().split('\n');
        for(var i = 0; i < lines.length; i++){
            var line = lines[i];
            var parts = line.split('=');
            var key = parts[0].trim();
            var value = parts[1].trim();
            var match = false;
            for(var j = 0; j < this.mdp.length; j++){
                var section = this.mdp[j];
                for(var k = 0; k < section.sectionData.length; k++){
                    if(section.sectionData[k].name == key){
                        section.sectionActivated = true;
                        section.sectionData[k].value = value;
                        match = true;
                    }
                }
            }
            if(!match){
                this.extra.push({name: key, value: value})
            }
        }
    }

    get obj(){
        return this.mdp;
    }
    get extraStr(){
        var result = '';
        if(this.extra.length != 0){
            result += ";;extra options or obselete options\n";
        }
        
        for(var i = 0; i < this.extra.length; i++){
            var key = this.extra[i].name;
            var value = this.extra[i].value;
            result += '\t' + key + "=" + value + "\n";
        }
        return result;
    }

    search(key){
        for(var i = 0; i < this.extra.length; i++){
            if (key == this.extra[i].name){
                return this.extra[i].value;
            }
        }
        for(var i = 0; i < this.mdp.length; i++){
            for(var j = 0; j < this.mdp[i].sectionData.length; j++){
                if(key == this.mdp[i].sectionData[j].name){
                    return this.mdp[i].sectionData[j].value;
                }
            }
        }
    }

}

export default MdpParser;
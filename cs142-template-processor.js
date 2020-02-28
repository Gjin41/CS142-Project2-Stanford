'use strict';
function Cs142TemplateProcessor(template){
    this.fillIn = function(dictionary){
        let temp = template;
        for(let i of Object.keys(dictionary)){    
            temp = temp.replace("{{"+i+"}}", dictionary[i]);
        }
        return temp;
    }
}

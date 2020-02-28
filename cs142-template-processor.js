function Cs142TemplateProcessor(template){
    function fillIn(dictionary){
        let temp = template;
        for(let i of Object.keys(dictionary)){
            if(template.search(i) !== -1){
                temp = temp.replace("{{"+i+"}}", dictionary[i]);
            }
        }
        return temp;
    }
}

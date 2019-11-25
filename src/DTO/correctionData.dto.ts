export class CorrectData { 

    constructItemUpdate(object){
        let returnObject = {};
        if(object.name){
            returnObject["name"] = object.name.value; 
        }
        if(object.description){
            returnObject["description"] = object.description.value; 
        }
        if(object.checked){
            returnObject["isChecked"] = object.checked.value; 
        }
        return returnObject;
    }

    constructListUpdate(object){
        let returnObject = {};
        if(object.name){
            returnObject["name"] = object.name.value; 
        }
        if(object.description){
            returnObject["description"] = object.description.value; 
        }
        return returnObject;
    }
}
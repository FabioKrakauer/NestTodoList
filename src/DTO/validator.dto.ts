export class Validator {
    /*
    {
        field: {
            value: 
        },
        field: {
            value:
        }
    }
    */
    validateItemUpdate(object): {error, message}{
        let hasField = false;
        if(!object){
            hasField = true;
            return {
                error: true,
                message: "Você precisa informar algum dado a ser alterado!"
            };
        }
        if(object.name){
            hasField = true;
            if(!object.name.value){
                return {
                    error: true,
                    message: "O nome não pode ser nulo"
                };
            }
        }
        if(object.description){
            hasField = true;
            if(!object.description.value){
                return {
                    error: true,
                    message: "A descrição não pode ser nula"
                };
            }
        }
        if(object.checked){
            hasField = true;
            if(!(typeof object.checked.value === "boolean")){
                return {
                    error: true,
                    message: "O item 'checked' não pode ser nula e deve ser do tipo boleano"
                };
            }
        }

        if(hasField == false){
            return {error: true,
                    message: "Nenhum campo preenchido"
                }
        }
        return {error: false,
                message: ""};
    }

    validateListUpdate(object): {error, message}{
        let hasField = false;
        if(!object){
            hasField = true;
            return {
                error: true,
                message: "Você precisa informar algum dado a ser alterado!"
            };
        }
        if(object.name){
            hasField = true;
            if(!object.name.value){
                return {
                    error: true,
                    message: "O nome não pode ser nulo"
                };
            }
        }
        if(object.description){
            hasField = true;
            if(!object.description.value){
                return {
                    error: true,
                    message: "A descrição não pode ser nula"
                };
            }
        }
        if(hasField == false){
            return {error: true,
                    message: "Nenhum campo preenchido"
                }
        }
        return {error: false,
                message: ""};
    }
}
import { ContractInterface } from "src/interface/Contract.interface";
import { Item } from "src/Entity/item.entity";

export class ValidateUpdateItemContract implements ContractInterface {

    validate(object: Item) {
        let result = {error: false, errors: []};
        if (!object) {
            return {
                error: true,
                message: "Você precisa informar algum dado a ser alterado!"
            };
        }
        if(!object.name){
            result.error = true;
            result.errors.push("Erro ao indentificar nome da lista");
        }
        if(!object.description){
            result.error = true;
            result.errors.push("Erro ao indentificar descrição da lista");
        }
        if(!object.isChecked){
            result.error = true;
            result.errors.push("Erro ao indentificar se o item foi realziado!");
        }
        return result;
    }
}
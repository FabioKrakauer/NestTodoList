import { ContractInterface } from "src/interface/Contract.interface";
import { Item } from "src/Entity/item.entity";

export class ValidateUpdateItemContract implements ContractInterface {

    validate(item: Item) {
        let result = {error: false, errors: []};
        if (!item) {
            result.error = true;
            result.errors.push("Erro ao indentificar item");
        }
        if(!item.name){
            result.error = true;
            result.errors.push("Erro ao indentificar nome da lista");
        }
        if(!item.description){
            result.error = true;
            result.errors.push("Erro ao indentificar descrição da lista");
        }
        if(!item.isChecked){
            result.error = true;
            result.errors.push("Erro ao indentificar se o item foi realziado!");
        }
        return result;
    }
}
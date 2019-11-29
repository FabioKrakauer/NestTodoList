import { ContractInterface } from "src/interface/Contract.interface";
import { List } from "src/Entity/list.entity";

export class ValidateUpdateListContract implements ContractInterface {

    validate(item: List): {error, errors} {
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
        return result;
    }
}
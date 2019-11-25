import { ContractInterface } from "src/interface/Contract.interface";
import { List } from "src/Entity/list.entity";

export class ValidateUpdateListContract implements ContractInterface {

    validate(object: List) {
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
        return result;
    }
}
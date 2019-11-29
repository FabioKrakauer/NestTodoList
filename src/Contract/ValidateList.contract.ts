import { ContractInterface } from "src/interface/Contract.interface";
import { List } from "src/Entity/list.entity";

export class ValidateListContract implements ContractInterface {
   
    validate(list: List): {error, errors} {
        let result: {error, errors} = {
            error: false,
            errors: [] 
        };
        if(!list){
            result.error = true;
            result.errors.push("A lista não pode ser nula!");
        }
        if(!list.name){
            result.error = true;
            result.errors.push("Erro ao reconhecer name");
        }
        if(!list.description){
            result.error = true;
            result.errors.push("Erro ao reconhecer a descrição")
        }
        return result;
    }
}
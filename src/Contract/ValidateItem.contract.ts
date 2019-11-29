import { ContractInterface } from "src/interface/Contract.interface";
import { Item } from "src/Entity/item.entity";

export class ValidateItemContract implements ContractInterface {
   
    validate(item: Item): {error, errors} {
        let result: {error, errors} = {
            error: false,
            errors: [] 
        };
        if(!item){
            result.error = true;
            result.errors.push("O item não pode ser nulo!");
        }
        if(!item.name){
            result.error = true;
            result.errors.push("Erro ao reconhecer name");
        }
        if(!item.description){
            result.error = true;
            result.errors.push("Erro ao reconhecer a descrição")
        }
        return result;
    }
}
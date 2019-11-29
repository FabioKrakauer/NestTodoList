export interface ContractInterface { 

    validate(object: object): {error, errors};
}
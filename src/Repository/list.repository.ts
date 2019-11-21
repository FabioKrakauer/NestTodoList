import { Entity, EntityManager, EntityRepository } from "typeorm";
import { List } from "src/Entity/list.entity";

@EntityRepository()
export class ListRepository { 

    constructor(private manager: EntityManager){ }

    async getListById(id: number): Promise<List> { 
        return await this.manager.findOne(List, {id: id}, {relations: ['item']});
    }
    async getAllLists(): Promise<List[]> { 
        return await this.manager.find(List);
    }
    async createNewList(list: List): Promise<List>{
        return await this.manager.save(list);
    }
    async updateList(list: number, values: object){
        return await this.manager.update(List, {id: list}, values);
    }
}
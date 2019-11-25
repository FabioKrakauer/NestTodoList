import { Entity, EntityManager, EntityRepository, DeleteResult } from "typeorm";
import { List } from "src/Entity/list.entity";
import { Item } from "src/Entity/item.entity";

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
    async deleteList(list: number): Promise<DeleteResult> {
        await this.manager.delete(Item, {list: list});
        return await this.manager.delete(List, {id: list});
    }
}
import { EntityManager, EntityRepository } from "typeorm";
import { Item } from "src/Entity/item.entity";

@EntityRepository()
export class ItemRepository {

    constructor(private manager: EntityManager){ }

    async getAllItens(): Promise<Item[]>{
        return await this.manager.find(Item);
    }
    async getItem(itemId: number): Promise<Item>{
        return await this.manager.findOne(Item, {id: itemId}, {relations: ['list']});
    }
    async createNewItem(item: Item): Promise<Item>{
        return await this.manager.save(Item, item); 
    }
}
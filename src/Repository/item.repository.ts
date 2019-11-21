import { EntityManager, EntityRepository, UpdateResult } from "typeorm";
import { Item } from "src/Entity/item.entity";
import { IItem } from "src/interface/IItem.interface";
import { List } from "src/Entity/list.entity";

@EntityRepository()
export class ItemRepository implements IItem{

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
    async updateItem(item: number, list: number, values: object): Promise<UpdateResult> {
        return await this.manager.update(Item, {
            id: item,
            list: list
        }, values);
    }
}
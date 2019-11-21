import { Injectable } from '@nestjs/common';
import { ItemRepository } from 'src/Repository/item.repository';
import { getCustomRepository, UpdateResult } from 'typeorm';
import { Item } from 'src/Entity/item.entity';

@Injectable()
export class ItemService {

    constructor(private itemRepository: ItemRepository){
        this.itemRepository = getCustomRepository(ItemRepository);
    }

    async getAllItens(): Promise<Item[]> {
        return await this.itemRepository.getAllItens();
    }
    async getItem(itemId: number): Promise<Item>{
        return await this.itemRepository.getItem(itemId);
    }
    async registerNewItem(item: Item): Promise<Item>{
        return await this.itemRepository.createNewItem(item);
    }
    async updateItem(itemId: number, listId: number, values: object): Promise<UpdateResult> {
        return await this.itemRepository.updateItem(itemId, listId, values);
    }
}

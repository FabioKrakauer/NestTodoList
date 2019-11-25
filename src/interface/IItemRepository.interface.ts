import { Item } from "src/Entity/item.entity";

export interface IItemRepository {

    getAllItens();
    getItem(itemId: number);
    createNewItem(item: Item);
}
import { Item } from "src/Entity/item.entity";

export interface IItem {

    getAllItens();
    getItem(itemId: number);
    createNewItem(item: Item);
}
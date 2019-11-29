import { Injectable } from '@nestjs/common';
import { ListRepository } from 'src/Repository/list.repository';
import { getCustomRepository, UpdateResult, DeleteResult } from 'typeorm';
import { List } from 'src/Entity/list.entity';
import { Item } from 'src/Entity/item.entity';

@Injectable()
export class ListService {

    constructor(private listRepository: ListRepository){
        this.listRepository = getCustomRepository(ListRepository);
    }
    async getAllLists(): Promise<List[]>{
        return this.listRepository.getAllLists();
    }
    async getListById(id: number): Promise<List> { 
        return await this.listRepository.getListById(id);
    }
    async createNewList(list: List): Promise<List>{
        return await this.listRepository.createNewList(list);
    }
    async updateList(list: number, values: object): Promise<UpdateResult> {
        return await this.listRepository.updateList(list, values);
    }
    async deleteList(list: number): Promise<{affectedRow}> {
        const result: DeleteResult = await this.listRepository.deleteList(list);
        return {affectedRow: result.raw.affectedRow};
    }
    async getCompletedPercent(listId: number): Promise<string>{
        const list: List = await this.getListById(listId);
        let totalItens: number = list.itens.length;
        if(totalItens == 0){
            return "Não foi possível calcular";
        }
        let completedItens: number = list.itens.filter(item => {
            return item.isChecked
        }).length;
        return ((completedItens * 100) / totalItens) + "%";
    }
}

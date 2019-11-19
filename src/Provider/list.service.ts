import { Injectable } from '@nestjs/common';
import { ListRepository } from 'src/Repository/list.repository';
import { getCustomRepository } from 'typeorm';
import { List } from 'src/Entity/list.entity';

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
}

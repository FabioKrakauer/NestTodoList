import { Controller, Post, Body, Get, HttpStatus, HttpException } from '@nestjs/common';
import { Item } from 'src/Entity/item.entity';
import { ItemService } from 'src/Provider/item.service';
import { ListService } from 'src/Provider/list.service';
import { List } from 'src/Entity/list.entity';

@Controller('item')
export class ItemController {

    constructor(private itemService: ItemService, private listService: ListService) { }

    @Get()
    async getAllItens(): Promise<Item[]> {
        try {
            return await this.itemService.getAllItens();
        } catch (error) {
            throw new HttpException("Erro interno", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Post('/new')
    async newItem(@Body() body): Promise<Item> {
        if (!body.name) {
            throw new HttpException("O valor do nome da tarefa não pode ser nulo ou vazio", HttpStatus.BAD_REQUEST);
        }
        if (!body.description) {
            throw new HttpException("O valor da descrição da tarefa não pode ser nulo ou vazio", HttpStatus.BAD_REQUEST);
        }
        if (!body.list) {
            throw new HttpException("O id da lista não pode ser nulo ou vazio", HttpStatus.BAD_REQUEST);
        }
        const list: List = await this.listService.getListById(body.list);
        if(!list){
            throw new HttpException("Esta lista não existe!", HttpStatus.BAD_REQUEST);
        }
        try {
            return this.itemService.registerNewItem(body);
        } catch (error) {
            throw new HttpException("Erro interno", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

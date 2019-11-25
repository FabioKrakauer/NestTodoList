import { Controller, Post, Body, Get, HttpStatus, HttpException, Put, Param, UseInterceptors, Delete } from '@nestjs/common';
import { Item } from 'src/Entity/item.entity';
import { ItemService } from 'src/Provider/item.service';
import { ListService } from 'src/Provider/list.service';
import { List } from 'src/Entity/list.entity';
import { UpdateResult } from 'typeorm';
import { CorrectData } from 'src/DTO/correctionData.dto';
import { ValidatorInterceptor } from 'src/interceptors/ValidatorInterceptor';
import { ValidateUpdateItemContract } from 'src/Contract/ValidateUpdateItem.contract';

@Controller('item')
export class ItemController {

    constructor(private itemService: ItemService, private listService: ListService) { }

    @Get()
    async getAllItens(): Promise<Item[]> {
        try {
            return await this.itemService.getAllItens();
        } catch (error) {
            throw new HttpException("Erro interno: " + error, HttpStatus.INTERNAL_SERVER_ERROR);
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
        if (!list) {
            throw new HttpException("Esta lista não existe!", HttpStatus.BAD_REQUEST);
        }
        return this.itemService.registerNewItem(body);
    }
    @Get('/:id')
    async getItem(@Param() param): Promise<Item> {
        if (param.id < 1) {
            throw new HttpException("Erro ao indentificar id", HttpStatus.BAD_REQUEST);
        }
        return await this.itemService.getItem(param.id);
    }

    @Put('/:itemId/:listId')
    @UseInterceptors(new ValidatorInterceptor(new ValidateUpdateItemContract()))
    async updateItemValue(@Param() params, @Body() body): Promise<object> {
        if (params.itemId < 1) {
            throw new HttpException("ID do item invalido!", HttpStatus.BAD_REQUEST);
        }
        if (params.listId < 1) {
            throw new HttpException("ID da lista invalido!", HttpStatus.BAD_REQUEST);
        }

        const objects: object = new CorrectData().constructItemUpdate(body);

        const queryResult: UpdateResult = await this.itemService.updateItem(params.itemId, params.listId, objects);
        return { affectedRows: queryResult.raw.affectedRows };
    }
    @Delete('/:itemId')
    async deleteItem(@Param('itemId') itemId: number): Promise<object> {
        if(itemId < 1) {
            throw new HttpException("Erro ao indentificar id do item", HttpStatus.BAD_REQUEST);
        }
        return await this.itemService.deleteItem(itemId);
    } 
}
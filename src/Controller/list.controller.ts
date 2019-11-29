import { Controller, Get, HttpException, HttpStatus, Param, Post, Body, Put, UseInterceptors, Delete } from '@nestjs/common';
import { ListService } from 'src/Provider/list.service';
import { List } from 'src/Entity/list.entity';
import { CorrectData } from 'src/DTO/correctionData.dto';
import { UpdateResult } from 'typeorm';
import { ValidatorInterceptor } from 'src/interceptors/ValidatorInterceptor';
import { ValidateUpdateListContract } from 'src/Contract/ValidateUpdateList.contract';

@Controller('list')
export class ListController {

    constructor(private listService: ListService){ }

    @Get()
    async getLists(): Promise<List[]>{
        try {
            return this.listService.getAllLists();
        } catch (error) {
            throw new HttpException("Internal error: " + error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Get('/:id')
    async getList(@Param() param): Promise<List>{
        if(!param.id){
            throw new HttpException("Erro ao indentificar id", HttpStatus.BAD_REQUEST);
        }
        return await this.listService.getListById(param.id);
    }
    @Post('/new')
    async newList(@Body() body){
        if(!body.name){
            throw new HttpException("O nome não pode ser nulo ou vazio", HttpStatus.BAD_REQUEST);
        }
        if(!body.description){
            throw new HttpException("A descrição não pode ser nula ou vazia", HttpStatus.BAD_REQUEST);
        }
        const list: List = new List();
        list.name = body.name;
        list.description = body.description;
        return await this.listService.createNewList(list);
    }
    @Put('/:listId')
    @UseInterceptors(new ValidatorInterceptor(new ValidateUpdateListContract()))
    async updateList(@Param() param, @Body() body): Promise<object> {
        if(param.listId < 1){
            throw new HttpException("Erro ao indentificar id", HttpStatus.BAD_REQUEST);
        }
        const object = new CorrectData().constructListUpdate(body);

        const queryResult: UpdateResult = await this.listService.updateList(param.id, object);
        return { affectedRows: queryResult.raw.affectedRows };
    }
    @Delete('/:listId')
    async deleteRoute(@Param('listId') id): Promise<{affectedRow}> {
        return await this.listService.deleteList(id);
    }
    @Get('/completed/:listId')
    async getCompletedPercent(@Param('listId') listId): Promise<object>{
        return {result: await this.listService.getCompletedPercent(listId)};
    }
}

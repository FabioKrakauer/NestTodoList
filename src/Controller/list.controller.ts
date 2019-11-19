import { Controller, Get, HttpException, HttpStatus, Param, Post, Body } from '@nestjs/common';
import { ListService } from 'src/Provider/list.service';
import { List } from 'src/Entity/list.entity';

@Controller('list')
export class ListController {

    constructor(private listService: ListService){ }

    @Get()
    async getLists(): Promise<List[]>{
        try {
            return this.listService.getAllLists();
        } catch (error) {
            throw new HttpException("internal error", HttpStatus.INTERNAL_SERVER_ERROR);
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
}

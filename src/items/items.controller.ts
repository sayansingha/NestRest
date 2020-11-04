import { Controller, Get, Post, Put, Delete, Body, Req, Res, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Request, Response } from 'express';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';


@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService) {}

    // @Get()
    // findAll(): string{
    //     return 'Get all items';
    // }

    @Get()
    findAll(): Promise<Item[]>{
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Item> {
        return this.itemsService.findOne(id); 
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise<Item>{
        return this.itemsService.create(createItemDto);
    }

    // @Get('/findone')
    // findOnlyOne(@Req() req:Request, @Res() res:Response) :Response {
    //     console.log(req.url);
    //     return res.send('Find only one');
    // }

    

    // @Get(':id')
    // findOne(@Param() param): string {
    //     return `Item ${param.id}`;
    // }
    //cleaner way of doing the param thing above:
    

    @Delete(':id')
    delete(@Param('id') id): Promise<Item>{
        return this.itemsService.delete(id);
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id):Promise<Item>{
        return this.itemsService.update(id, updateItemDto);
    }
}

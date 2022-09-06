import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDTO } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@Controller()
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  getAll() {
    return this.messagesService.getAll();
  }

  @Post('create')
  create(@Body() message: CreateMessageDTO) {
    return this.messagesService.create(message);
  }

  @Get('id')
  getOne(@Param() id: string) {
    return this.messagesService.getById(id);
  }
}

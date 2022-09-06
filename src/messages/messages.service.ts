import { Injectable } from '@nestjs/common';
import { CreateMessageDTO } from './dto/create-message.dto';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messageRepository: MessagesRepository) {}
  async create(message: CreateMessageDTO) {
    return this.messageRepository.create(message);
  }
  async getAll() {
    return this.messageRepository.getAll();
  }
  async getById(id: string) {
    return this.messageRepository.getById(id);
  }
}

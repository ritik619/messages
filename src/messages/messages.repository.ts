import { readFile, writeFile } from 'fs/promises';
import { CreateMessageDTO } from './dto/create-message.dto';

export class MessagesRepository {
  async create({ id, content }: CreateMessageDTO) {
    const db = await readFile('db.json', 'utf-8');
    const dbContent = JSON.parse(db);
    dbContent[id] = {
      id,
      content,
    };
    await writeFile('db.json', JSON.stringify(dbContent));
    return await readFile('db.json', 'utf-8');
  }
  async getAll() {
    const db = await readFile('db.json', 'utf-8');
    const dbContent = JSON.parse(db);
    return dbContent;
  }
  async getById(id: string) {
    const db = await readFile('db.json', 'utf-8');
    const dbContent = JSON.parse(db);
    return dbContent[id];
  }
}

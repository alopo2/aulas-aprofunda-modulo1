import { v4 as uuidv4 } from 'uuid';
import { Text } from '../models/model';


interface TextData {
    title: string;
    content: string;
    status: string;
    author: string;
    createdAt: string;
}


export default {
    create: ({ title, content, status, author }: TextData): Text => {
        return new Text({
            id: uuidv4(),
            title,
            content,
            status,
            author,
            createdAt: new Date().toLocaleDateString('pt-BR')
        });
    },
};
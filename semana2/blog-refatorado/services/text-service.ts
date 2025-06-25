import TextStorage from '../storage/text-storage';
import textFactory from '../factories/text-factory';

interface TextData {
    title: string;
    content: string;
    status: string;
    author: string;
}

interface Text extends TextData {
    id: string;
    createdAt: string;
}

export default {
    createText: ({ title, content, status, author }: TextData): Text => {
        const newText = textFactory.create({ title, content, status, author, createdAt: new Date().toISOString() });
        
        TextStorage.add(newText);
        return newText;
    },

    getAllTexts: (): Text[] => {
        // Aqui você pode adicionar lógica para buscar textos de um banco de dados ou outro armazenamento
        return TextStorage.getAll();
    },
};
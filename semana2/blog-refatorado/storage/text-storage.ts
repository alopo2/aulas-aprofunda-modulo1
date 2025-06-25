export interface Text {
    id: string; 
    title: string;
    content: string;
    status: string;
    author: string;
    createdAt: string;
}

class TextStorage {
    private static instance: TextStorage;
    private Texts: Text[] = [];

    private constructor() {}

    public static getInstance(): TextStorage {
        if(!TextStorage.instance) {
            TextStorage.instance = new TextStorage();
        }
        return TextStorage.instance;
    }

    public add(text: Text): void {
        this.Texts.push(text);
    }

    public getAll(): Text[] {
        return this.Texts;
    }
}

export default TextStorage.getInstance();
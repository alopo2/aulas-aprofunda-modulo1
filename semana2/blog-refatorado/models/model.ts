
export class Text {
    id: string;
    title: string;
    content: string;
    status: 'draft' | 'published' | 'archived';
    author: string
    createdAt: string;

    constructor(id: string, title: string, content: string, status: 'draft' | 'published' | 'archived', author: string, createdAt: string) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.status = status;
        this.author = author;
        this.createdAt = createdAt;
    }
}
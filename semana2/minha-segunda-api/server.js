import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express(); 
const PORT = process.env.PORT || 3000;

const blogRouter = express.Router();

app.use(cors());
app.use(express.json());

//Model for text: id, title, content, status, date e author

const posts = [];

blogRouter.post('/posts', (req, res) => {
    const { title, content, status, author } = req.body;

    if (!title || !content || !status || !author) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const newPost = {
        id: uuidv4(),
        title,
        content,
        status,
        date: new Date().toISOString(),
        author
    };

    posts.push(newPost);
    res.status(201).json({ message:`Texto ${title} foi criado com sucesso`, newPost});
});

blogRouter.get('/posts', (_, res) => {
    res.status(200).json(posts);
});

blogRouter.get('/post', (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json(post);
});

app.use(blogRouter);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
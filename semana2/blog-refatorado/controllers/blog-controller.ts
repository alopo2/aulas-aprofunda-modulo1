import { Request, Response } from 'express'; 

export const createPost = (req: Request, res: Response): void => {
    const { title, content, status, author } = req.body;
    
}
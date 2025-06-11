import express from 'express'; 
import cors from 'cors';
import dados from './dados.json' with { type: 'json' };

const app = express();
app.use(express.json());
app.use(cors());
const router = express.Router();
const PORT = process.env.PORT || 3000;

const mensagem = router.get('/', (_, res) => {
    res.send('Olá, Mundo!');
});

const ola = router.get('/ola', (_, res) => {
    res.send('Olá, Mundo!');
});

const alunas = router.get('/alunas', (_, res) => {
    res.json(dados);
});

app.use(mensagem);
app.use(ola);
app.use(alunas);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
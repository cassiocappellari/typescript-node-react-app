import {Request, Response} from 'express' // importa do express a definição de tipos do Request e do Response

const users = [
    {
        name: 'Cássio',
        email: 'cassiocappellari@gmail.com'
    }
]

export default {
    async index(req: Request, res: Response) { // informa o tipo das variáveis 'req' e 'res' utilizando a importação de tipagens do express
        return res.json(users)
    }
}
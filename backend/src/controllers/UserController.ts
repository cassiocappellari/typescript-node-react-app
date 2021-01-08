import {Request, Response} from 'express' // importa do express a definição de tipos do Request e do Response
import EmailService from '../services/EmailService'

const users = [
    {
        name: 'Cássio',
        email: 'cassiocappellari@gmail.com'
    }
]

export default {
    async index(req: Request, res: Response) { // informa o tipo das variáveis 'req' e 'res' utilizando a importação de tipagens do express
        return res.json(users)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService() // declara o EmailService

        emailService.sendMail({
            name: 'Cássio',
            email: 'cassiocappellari@gmail.com'
        }, {
            subject: 'Bem-vindo ao sistema!',
            body: 'Olá!'
        }) // pega a função 'sendMail()' da classe EmailService(); dentro da função 'sendMail()' enviamos dois objetos como parâmetros

        return res.send()
    }
}
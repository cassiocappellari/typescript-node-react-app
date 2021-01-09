import {Request, Response} from 'express'
import EmailService from '../services/EmailService'

const users = [
    {
        name: 'Cássio',
        email: 'cassiocappellari@gmail.com'
    }
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService()

        emailService.sendMail({
            to: {
                name: 'Cássio', 
                email: 'cassiocappellari@gmail.com'
            },
            message: {
                subject: 'Bem-vindo ao sistema!', 
                body: 'Olá!'
            }
        })

        return res.send()
    }
}
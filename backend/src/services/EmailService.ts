// para declarar um parâmetro do tipo objeto com typescript geralmente utilizamos o 'interface'

interface MailTo {
    name: string
    email: string
} // envia um objeto com duas strings

interface MessageTo {
    subject: string
    body: string
    attachment?: string[] // '?' serve para informar que o 'attachment' pode vir vazio ou não; envia um array de strings
} // 

class EmailServices {
    sendMail(to: MailTo, message: MessageTo) { // função que recebe dois dados como parâmetro; para definição de tipagens, o 'to' será um objeto com nome e email e vai recever o objeto 'MailTo' com duas strings, mesma coisa com o parâmetro 'message'
        console.log(`Email enviado para ${to.name}: ${message.subject}`)
    }
}

export default EmailServices
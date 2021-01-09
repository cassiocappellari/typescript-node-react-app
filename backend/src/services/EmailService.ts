interface MailTo {
    name: string
    email: string
}

interface MessageTo {
    subject: string
    body: string
    attachment?: string[]
}

interface MessageDTO {
    to: MailTo
    message: MessageTo
}

interface EmailService {
    sendMail(request: MessageDTO): void
}

class EmailServices implements EmailService {
    sendMail({to, message}: MessageDTO) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`)
    }
}

export default EmailServices
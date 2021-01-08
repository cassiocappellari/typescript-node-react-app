import express from 'express' // o typescript suporta a feature 'import' do Node.js
import routes from './routes'

const app = express()

app.use(routes)

app.listen(3333)
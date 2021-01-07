import express from 'express' // o typescript suporta a feature 'import' do Node.js

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3333)
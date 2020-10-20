const express = require('express')
const db = require('../../controller/dbController')

const app = express.Router()

app.post('/publishers', (req, res) => {
    const body = req.body
    const result = db.add('publishers', body)

    if (!result) {
        res.status(400).send('You insert a wrong data structure')
    } else {
        res.send(body)
    }
    return
})

module.exports = app
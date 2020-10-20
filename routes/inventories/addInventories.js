const express = require('express')
const db = require('../../controller/dbController')

const app = express.Router()

app.post('/inventories', (req, res) => {
    const body = req.body
    const result = db.add('inventories', body)

    if (!result) {
        res.status(400).send('You insert a wrong data structure')
    } else {
        res.send(result)
    }
    return
})

module.exports = app
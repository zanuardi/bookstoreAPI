const express = require('express')
const db = require('../../controller/dbController')

const app = express.Router()

app.get('/publishers', (req, res) => {

  const id = req.query
  const dataId = db.get('publishers', id)

  if (!dataId) {
    res.status(404).send('Data not found')

  } else {
    res.send(dataId)
  }
})



module.exports = app
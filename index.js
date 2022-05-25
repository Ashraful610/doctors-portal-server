const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello doctors portal')
})

app.listen(port, () => {
  console.log(`doctors portal app listening on port ${port}`)
})
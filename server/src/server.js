const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../config/dev.env') })
const express = require('express')
const cors = require('cors')
require('./db/mongoose')
const userRouter = require('./routers/user')
const newsRouter = require('./routers/news')

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(newsRouter)

app.get('/', (req, res) => {
  res.sendFile()
})

app.listen(port, () => {
  console.log(`Server up on port ${port}`)
})
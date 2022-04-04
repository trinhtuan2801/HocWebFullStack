const express = require('express')
const mongoose = require('mongoose')
const commentRouter = require('./modules/comment/comment.router')

mongoose.connect("mongodb://localhost:27017/buoi5", err => {
  if (err) {
    return console.log('err connect mongodb', err)
  }
  console.log('Connect DB successfully')
})

const app = express()
app.use(express.json())

app.use('/api/comments', commentRouter)

app.listen(8080, (err) => {
  if (err) {
    return console.log("Error start app", err);
  }
  console.log(`Server started successfully at ${8080}`);
})

app.use('*', (req, res) => {
  res.send({ message: '404 not found' })
})


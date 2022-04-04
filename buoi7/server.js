require('dotenv').config() //để ở đầu
const express = require('express')
const mongoose = require('mongoose')
const commentRouter = require('./modules/comment/comment.router')
const authRouter = require('./modules/auth/auth.router')
const postRouter = require('./modules/post/post.router')

mongoose.connect(process.env.MONGODB_URI, err => {
  if (err) {
    return console.log('err connect mongodb', err)
  }
  console.log('Connect DB successfully')
})

const app = express()
app.use(express.json())

app.use('/api/comments', commentRouter)
app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)

app.listen( process.env.PORT || 8080, (err) => {
  if (err) {
    return console.log("Error start app", err);
  }
  console.log(`Server started successfully at ${8080}`);
})

app.use('*', (req, res) => {
  res.send({ message: '404 not found' })
})


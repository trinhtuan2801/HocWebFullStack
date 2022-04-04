const express = require('express')
const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  content: String,
  createdBy: {
    type: String,
    required: true
  }
})

const PostModel = mongoose.model("Post", postSchema)

mongoose.connect("mongodb://localhost:27017/buoi5", err => {
  if (err) {
    return console.log('err connect mongodb', err)
  }
  console.log('Connect DB successfully')
})

const app = express()
app.use(express.json())

app.listen(8080, (err) => {
  if (err) {
    return console.log("Error start app", err);
  }
  console.log(`Server started successfully at ${8080}`);
});

app.post('/api/posts', async (req, res) => {
  try {
    const { content, createdBy } = req.body
    const newPost = await PostModel.create({
      content,
      createdBy
    })
    res.send({ success: 1, data: newPost })

  } catch (err) {
    res.send({ success: 0, err: err })
  }
})

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await PostModel.find({})
    res.send({ success: 1, data: posts })
  } catch (err) {
    res.send({ success: 0, err: err })
  }
})

app.get('/api/posts/:postId', async (req, res) => {
  try {
    const { postId } = req.params
    const foundPost = await PostModel.findOne({ _id: postId })
    res.send({ success: 1, data: foundPost })
  } catch (err) {
    res.send({ success: 0, err: err })
  }
})

app.put('/api/posts/:postId', async (req, res) => {
  try {
    const { postId } = req.params
    const { content } = req.body
    const updatedPost = await PostModel.findByIdAndUpdate(
      postId,
      { content },
      { new: true }
    )
    res.send({ success: 1, data: updatedPost })
  } catch (err) {
    res.send({ success: 0, err: err })
  }
})

app.delete('/api/posts/:postId', async (req, res) => {
  try {
    const { postId } = req.params
    const deletedPost = await PostModel.findByIdAndDelete(postId)
    res.send({ success: 1, data: deletedPost })
  } catch (err) {
    res.send({ success: 0, err: err })
  }

})

//////comment

const commentSchema = new mongoose.Schema({
  content: String,
  createdBy: {
    type: String,
    required: true
  },
  postId: String
})

const CommentModel = mongoose.model('Comment', commentSchema)

app.post('/api/comments', async (req, res) => {
  try {
    const { content, createdBy, postId } = req.body
    const newComment = await CommentModel.create({
      content,
      createdBy,
      postId
    })

    res.send({ success: 1, newComment })
  } catch (err) {
    res.send({ success: 0, err: err })
  }
})

app.get('/api/comments', async (req, res) => {
  try {
    const comments = await CommentModel.find({})
    res.send({ success: 1, data: comments })
  } catch (err) {
    res.send({ success: 0, err: err })
  }
})

app.get('/api/comments/:commentId', async (req, res) => {
  try {
    const { commentId } = req.params
    const comments = await CommentModel.findOne({ _id: commentId })
    res.send({ success: 1, data: comments })
  } catch (err) {
    res.send({ success: 0, err: err })
  }
})

app.put('/api/comments/:commentId', async (req, res) => {
  try {
    const { commentId } = req.params
    const { content } = req.body
    const updateComment = await CommentModel.findByIdAndUpdate(
      commentId,
      { content },
      { new: true }
    )
    res.send({ success: 1, data: updateComment })
  } catch (err) {
    res.send({ success: 0, err: err })
  }
})

app.delete('/api/comments/:commentId', async (req, res) => {
  try {
    const { commentId } = req.params
    const deletedComment = await CommentModel.findByIdAndDelete(commentId)
    res.send({ success: 1, data: deletedComment })
  } catch (err) {
    res.send({ success: 0, err: err })
  }
})

app.get('/api/posts/:postId/comments', async (req, res) => {
  try {
    const { postId } = req.params
    const foundComments = await CommentModel.find({ postId: postId })
    res.send({ success: 1, data: foundComments })
  } catch (err) {
    res.send({ success: 0, err: err })
  }
})
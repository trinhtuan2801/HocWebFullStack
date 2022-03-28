const express = require('express')
const PostModel = require("./post")
const CommentModel = require("./comment")
const app = express()
app.use(express.static('public'))
app.use(express.json())

app.listen(9000, err => {
    if (err) {
        return console.log(err)
    }
    console.log('Server started')
})

app.post("/api/posts", async (req, res) => {
    const { content, author } = req.body
    try {
        const newPost = await PostModel.createPost({ content, author })
        res.send({
            success: 1,
            data: newPost
        })
    } catch (error) {
        res.send({
            success: 0,
            data: null,
            message: error.message
        })
    }
})

app.get("/api/posts", async (req, res) => {
    try {
        const allPosts = await PostModel.getPost()
        res.send({
            success: 1,
            data: allPosts
        })
    } catch (error) {
        res.send({
            success: 0,
            data: null,
            message: error.message
        })
    }
})

app.get("/api/posts/:postId", async (req, res) => {
    try {
        const { postId } = req.params
        const foundPost = await PostModel.getPost(postId)
        if (foundPost) {
            res.send({
                success: 1,
                data: foundPost
            })
        }
        else {
            res.send({
                success: 0,
                data: "Invalid ID"
            })
        }
    } catch (error) {
        res.send({
            success: 0,
            data: null,
            message: error.message
        })
    }
})

app.put("/api/posts/:postId", async (req, res) => {
    try {
        const { postId } = req.params
        const { content } = req.body
        const isUpdate = await PostModel.updatePost({ postId, content })
        if (isUpdate) {
            res.send({
                success: 1,
                data: `post ${postId} has been updated`
            })
        }
        else {
            res.send({
                success: 0,
                data: "Invalid ID"
            })
        }
    } catch (error) {
        res.send({
            success: 0,
            data: null,
            message: error.message
        })
    }
})

app.delete("/api/posts/:postId", async (req, res) => {
    try {
        const { postId } = req.params
        const isDelete = await PostModel.deletePost(postId)
        if (isDelete) {
            res.send({
                success: 1,
                data: `post ${postId} has been deleted`
            })
        }
        else {
            res.send({
                success: 0,
                data: "Invalid ID"
            })
        }
    } catch (error) {
        res.send({
            success: 0,
            data: null,
            message: error.message
        })
    }
})

//////////////////////////

app.post("/api/comments", async (req, res) => {
    const { content, createdBy, postId } = req.body
    try {
        const newComment = await CommentModel.createComment({ content, createdBy, postId })
        res.send({
            success: 1,
            data: newComment
        })
    } catch (error) {
        res.send({
            success: 0,
            data: null,
            message: error.message
        })
    }
})

app.get("/api/comments/:commentId", async (req, res) => {
    try {
        const { commentId } = req.params
        const cmtFound = await CommentModel.getComment(commentId)
        if (cmtFound) {
            res.send({
                success: 1,
                data: cmtFound
            })
        }
        else {
            res.send({
                success: 0,
                data: "This Id does not exist"
            })
        }
    } catch (error) {
        res.send({
            success: 0,
            data: null,
            message: error.message
        })
    }
})

app.put("/api/comments/:commentId", async (req, res) => {
    try {
        const { commentId } = req.params
        const { content } = req.body
        const isUpdate = await CommentModel.updateComment({ commentId, content })
        if (isUpdate) {
            res.send({
                success: 1,
                data: `comment ${commentId} has been updated`
            })
        }
        else {
            res.send({
                success: 0,
                data: "Invalid ID"
            })
        }
    } catch (error) {
        res.send({
            success: 0,
            data: null,
            message: error.message
        })
    }
})

app.delete("/api/comments/:commentId", async (req, res) => {
    try {
        const { commentId } = req.params
        const isDelete = await CommentModel.deleteComment(commentId)
        if (isDelete) {
            res.send({
                success: 1,
                data: `comment ${commentId} has been deleted`
            })
        }
        else {
            res.send({
                success: 0,
                data: "Invalid ID"
            })
        }
    } catch (error) {
        res.send({
            success: 0,
            data: null,
            message: error.message
        })
    }
})

app.get("/api/posts/:postId/comments", async (req, res) => {
    try {
        const { postId } = req.params
        const postComments = await CommentModel.getPostComments(postId)
        res.send({
            success: 1,
            data: postComments
        })
    } catch (error) {
        res.send({
            success: 0,
            data: null,
            message: error.message
        })
    }
})
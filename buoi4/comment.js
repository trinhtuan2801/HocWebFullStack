const fs = require("fs")

const getComment = async (commentId = '') => {
    const oldCommentsStr = await fs.promises.readFile('comments.json', { encoding: 'utf-8' })
    const oldComments = JSON.parse(oldCommentsStr)
    if (!commentId) return oldComments
    const foundComment = oldComments.find(comment => comment.id.toString() === commentId)
    return foundComment
}

const writeFile = async (newComments) => {
    return await fs.promises.writeFile("comments.json", JSON.stringify(newComments))
}

const createComment = async ({ content, createdBy, postId }) => {
    let oldComments = await getComment()
    const newComment = {
        id: Date.now(),
        content,
        createdBy,
        postId
    }

    oldComments.push(newComment)
    await writeFile(oldComments)
    return newComment
}

const updateComment = async ({ commentId, content }) => {
    let isUpdate = false
    let oldComments = await getComment()

    for (const [i, comment] of oldComments.entries()) {
        if (comment.id.toString() === commentId) {
            oldComments[i] = {
                ...comment,
                content
            }
            isUpdate = true
            break
        }
    }

    if (isUpdate) await writeFile(oldComments)
    return isUpdate
}

const deleteComment = async (commentId) => {
    let oldComments = await getComment()
    let index = oldComments.findIndex(comment => comment.id.toString() === commentId)
    if (index == -1) return false

    oldComments.splice(index, 1)
    await writeFile(oldComments)
    return true
}

const getPostComments = async (postId) => {
    const oldComments = await getComment()
    const foundComments = oldComments.filter(comment => comment.postId.toString() === postId)
    return foundComments
}

module.exports = {
    getComment,
    createComment,
    updateComment,
    deleteComment,
    getPostComments
}
const fs = require("fs")

const getPost = async (postId = '') => {
    const oldPostsStr = await fs.promises.readFile('posts.json', { encoding: 'utf-8' })
    const oldPosts = JSON.parse(oldPostsStr)
    if (!postId) return oldPosts
    const foundPost = oldPosts.find(post => post.id.toString() === postId)
    return foundPost
}

const writeFile = async (newPosts) => {
    return await fs.promises.writeFile("posts.json", JSON.stringify(newPosts))
}

const createPost = async ({ content, author }) => {
    let oldPosts = await getPost()
    const newPost = {
        id: Date.now(),
        content,
        author
    }

    oldPosts.push(newPost) 
    await writeFile(oldPosts)
    return newPost
}

const updatePost = async ({ postId, content }) => {
    let isUpdate = false
    let oldPosts = await getPost()

    for (const [i, post] of oldPosts.entries()) {
        if (post.id.toString() === postId) {
            oldPosts[i] = {
                ...post,
                content
            }
            isUpdate = true
            break
        }
    }

    if (isUpdate) await writeFile(oldPosts)
    return isUpdate
}

const deletePost = async (postId) => {
    let oldPosts = await getPost()
    let index = oldPosts.findIndex(post => post.id.toString() === postId)
    if (index == -1) return false

    oldPosts.splice(index, 1)
    await writeFile(oldPosts)
    return true
}

module.exports = {
    getPost,
    createPost,
    updatePost,
    deletePost
}
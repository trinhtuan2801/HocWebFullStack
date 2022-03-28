const express = require('express')
const app = express()
const file_utils = require('./file_utils.js')

app.use(express.static('public'))
app.use(express.json())

app.listen(9000, err =>
{
    if (err) {
        return console.log(err)
    }
    console.log('Server started')
})

app.get('/course', (req, res)=>
{
    res.json({course: "web57"})
})

app.get('/course/random', (req, res)=>
{
    let courses = [
        { "course": "c4e" },
        { "course": "ci" },
        { "course": "web57" }
    ]

    let course = courses[Math.floor(Math.random()*courses.length)]
    res.json(course)
})

app.get('/even', (req, res)=>
{
    let received_obj = req.query
    //const {from, to} = req.query
    let min = Number(received_obj.from)
    let max = Number(received_obj.to)
    let arr = []

    for (let i = min; i <= max; i++)
        if (i % 2 == 0) arr.push(i)

    res.json({"numbers":arr})
})

app.get('/login', (req, res)=>
{
    res.sendFile(__dirname + '/login.html')
})

app.post('/auth/login', async (req, res)=>
{
    let received_obj = req.body
    let username = received_obj.username
    let password = received_obj.password
    if (!username) return res.json({success:false, description:"Username cant be blank"})
    
    let data = await file_utils.getData()
    let accounts = data.accounts
    let isUserNameFound = false
    let isPasswordCorrect = false
    for (let acc of accounts)
    {
        console.log(acc)
        if (acc.username === username)
        {
            isUserNameFound = true
            if (acc.password === password)
                isPasswordCorrect = true
            break
        }
    }

    if (!isUserNameFound) return res.json({success:false, description:"Wrong name"})
    if (isUserNameFound && !isPasswordCorrect) return res.json({success:false, description:"Wrong password"})
    return res.json({success:true, description:"Login successfully"})
})

app.post('/auth/signup', async (req, res)=>
{
    let received_obj = req.body
    let username = received_obj.username
    let password = received_obj.password
    if (!username) return res.json({success:false, description:"Username cant be blank"})

    let data = await file_utils.getData()
    let accounts = data.accounts
    let isAccountExisted = false
    for (let acc of accounts)
    {
        console.log(acc)
        if (acc.username === username)
        {
            isAccountExisted = true
            break
        }
    }

    if (isAccountExisted) return res.json({success:false, description:"Account has existed"})
    file_utils.addAccount(username, password)
    return res.json({success:true, description:"Account has been created successfully"})

})





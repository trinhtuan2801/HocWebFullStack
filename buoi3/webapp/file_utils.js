const fs = require('fs')

function getData () {
    return new Promise((resolve, reject)=>
    {
        fs.readFile('accounts.txt', {encoding: 'utf-8'}, (err, data)=>
        {
            if (err) return reject(err)
            resolve(JSON.parse(data))
        })
    })
}

function writeData(data) 
{
    fs.writeFile('accounts.txt', JSON.stringify(data), {encoding: 'utf-8'}, (err)=>
    {
        if (err) console.log(err)
    })
}

async function addAccount(username, password) {
    let data = await getData()
    data.accounts.push({username: username, password: password})
    writeData(data)
}

module.exports = 
{
    getData,
    addAccount
} 
# Ex1
```
const fs = require('fs')
let data = '1 8 5 7 2'
fs.writeFile('numbers.txt', data, {encoding: 'utf-8'},err =>
{
    if (err) console.log(err)
    else console.log('ok')
})
```

# Ex2
```
const writeFile = (path, data) => {
    return new Promise((resolve, reject)=>
    {
        fs.writeFile(path, JSON.stringify(data), {encoding:'utf-8'}, err =>
        {
            if (err)
            {
                reject(err)
                throw err
            } 
            else resolve(true)
        })
    })
}

```

# Ex3
```
fs.readFile('numbers.txt', {encoding: 'utf-8'}, (err, data)=>
{
    if (err) 
        console.log(err)
    else 
    {
        let arr = data.split(' ')
        let count = 0
        for (let i of arr)
        {
            if (i % 2 == 1) count ++
        }
        fs.writeFile('result.txt', count.toString(), {encoding: 'utf-8'}, err =>
        {
            if (err) console.log(err)
            else console.log('ok')
        })
    }
})
```

# Ex4
```
async function wait() {
    return new Promise((resolve)=>
    {
        setTimeout(()=>{resolve(1)}, time)
    })
}
```
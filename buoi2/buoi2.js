const fs = require('fs')

function ex1()
{
    let data = '1 8 5 7 2'
    fs.writeFile('numbers.txt', data, {encoding: 'utf-8'}, err =>
    {
        if (err) console.log(err)
        else console.log('ok')
    })
}

function ex2()
{
    const writeFile = (path, data) => 
    {
        return new Promise((resolve, reject)=>
        {
            fs.writeFile(path, JSON.stringify(data), {encoding: 'utf-8'}, err =>
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
    const writeFileToDisk = async (path, data) => 
    {
        try 
        {
            const isSuccess = await writeFile(path, data);
            console.log(isSuccess) // true
        } 
        catch (err) 
        {
            console.log(err) // 'Lỗi'
        }
    }
    writeFileToDisk('ex2.txt', {name: 'Tuan', age: '22'})
}

function ex3()
{
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
}

function ex4()
{
    async function wait(time) 
    {
        return new Promise((resolve)=>
        {
            setTimeout(()=>{resolve(1)}, time)
        })
    }
    
    async function go() 
    {
        console.log('Starting');
        await wait(2000);
        console.log('running');
        await wait(200);
        console.log('ending');
    }

    go()
}
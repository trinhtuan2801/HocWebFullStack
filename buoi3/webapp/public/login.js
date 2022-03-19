let username = document.getElementById('username')
let password = document.getElementById('password')
let login_btn = document.getElementById('signin')
let signup_btn = document.getElementById('signup')

login_btn.addEventListener('click', async ()=>
{
    const url = `http://localhost:9000/auth/login`
    const jsonRes = await fetch(url, 
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method: "POST",
        body: JSON.stringify({username: username.value, password: password.value})
    })

    const res = await jsonRes.json()
    console.log(res.description)
    alert(res.description)
})

signup_btn.addEventListener('click', async ()=>
{
    const url = `http://localhost:9000/auth/signup`
    const jsonRes = await fetch(url, 
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method: "POST",
        body: JSON.stringify({username: username.value, password: password.value})
    })

    const res = await jsonRes.json()
    console.log(res.description)
    alert(res.description)
})
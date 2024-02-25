require("dotenv").config()
const express = require("express")

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login Page</h1>')
})

app.get('/sinup', (req, res) => {
    res.send('<h1>Sign up Page</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`server is running on PORT ${process.env.PORT}`)
})
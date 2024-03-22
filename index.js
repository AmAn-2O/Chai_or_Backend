require ('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Chaiorbackend!')
})

app.get('/twitter',(req,res)=>{
    res.send('amandev.twitter.com')
})

app.get('/login',(req,res)=>{
    res.send('<h1>WELCOME TO CHAI OR BACKEND CLASS</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>WELCOME TO OUR YOUTUBE CHANNEL</h2>')
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
console.log("Chaiorbackend");
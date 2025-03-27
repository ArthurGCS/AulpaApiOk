const express = require('express')
const app = express()
const port = 48;

app.get('/teste',(req,res)=>{
    res.send("Você esta conectado!")
})

app.listen(port, ()=>{
    console.log("O Servidor está Disponivel")
})
const express = require('express');
const path = require('path')
const app = express();

const publicPath = path.resolve(__dirname, './public');

app.get('/', (req,res )=>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
})


app.get('/registro', (req,res )=>{
    res.sendFile(path.join(__dirname, "/views/registro.html"))
})

app.get('/login', (req,res )=>{
    res.sendFile(path.join(__dirname, "/views/login.html"))
})

app.post('/registro', (req,res)=>{
    res.redirect('/')
})


app.use(express.static(publicPath))
app.listen(5000, ()=>{
    console.log('http://localhost:5000')
});
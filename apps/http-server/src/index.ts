import express from 'express';
 
const app = express();

app.get('/signup',(req,res)=>{
    res.send('hello')
})

app.get('/signin',(req,res)=>{
    res.send('hello')
})

app.get('/chat',(req,res)=>{
    res.send('chat room')
})

app.listen(3000);
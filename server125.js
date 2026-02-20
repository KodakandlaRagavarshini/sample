const express = require("express");
const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.json({message:'Hello from REST API'});
});

app.get('/about',(req,res)=>{
    res.json({message: 'This is about us page'});
});

app.get('/about:me',(req,res)=>{
    res.json({message:'This is me'});
});

app.get('/about:me/hi',(req,res)=>{
    res.json({message:'HELLO'});
});

app.get('/about:me/hi/id',(req,res)=>{
    res.json({message:'ID'});
});

const PORT  = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Express REST API running on http://localhost:${PORT}`);
});
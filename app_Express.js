const http=require('http');

const express=require('express')

const bodyParser=require('body-parser')

const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    
    res.send('<form action="/product" method="POST"><input type="text" placeholder="Product Name" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>')
    //next() // allow the request to continue to the next middleware in line 
})  
app.post('/product', (req,res,next)=>{
    // console.log('In the another middleware');
    console.log(req.body);
     res.redirect('/');
     
 })
app.use('/', (req,res,next)=>{
   // console.log('In the another middleware');
    res.send('<h1>Hello from Express</h1>')
    
})  

app.listen(4000)
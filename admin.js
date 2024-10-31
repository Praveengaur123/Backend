const express=require('express')

const router=express.Router()

router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST"><input type="text" placeholder="Product Name" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>')
    //next() // allow the request to continue to the next middleware in line 
    })  
router.post('/add-product', (req,res,next)=>{
    // console.log('In the another middleware');
    console.log(req.body);
     res.redirect('/shop');
 })

module.exports=router
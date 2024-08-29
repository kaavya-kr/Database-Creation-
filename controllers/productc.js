
// const productFetch = require('../service/productService');
// //  const allProduct=require('../service/productService')
const {productCreate,productFetch}=require('../service/productService')
const product = require('../models/productm');


exports.postProduct=async(req,res,next) => {
    // console.log('hi');
    // const productName=req.body.productName;
    // const description=req.body.description;
    // const price=req.body.price;
    try{
        console.log(JSON.stringify(req.body),'incoming data');
        const{
            productName,
            description,
            price
        } =req.body;
        const productData = await productCreate(productName,description,price);
        // console.log('producatdata',productData)
        res.send({productData});
    }catch(err){
        console.log(err);
    }
}
exports.getProduct=async(req,res,next) => {
    // console.log('hi')
    try{
        const products =await productFetch();
        console.log('this is a product get method ')
        res.send(products);
    }catch(err){
        console.log('error',err)
    }
}
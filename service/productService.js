const product = require('../models/productm')

const productCreate= async(productName,description,price) => {
    console.log('hi its service layer');
    console.log('hi its service layer',productName);
    console.log('hi its service layer',description);
    console.log('hi its service layer',price);
    try{
        //add model
        const productDetails=await product.createProduct(productName,description,price);
        console.log('productdetails in server layer',productDetails)
        // return productDetails

        if(productDetails ){           
            const productResponse = {
                
                productName:productName,
                description:description,
                price:price
            }

            console.log('productresponce',productResponse);
            return productResponse;
        }else{
            const response={message:'something went wrong'};
            return response;
            
        }

    
 }catch(err){
     console.log(err);
     return err;
 }
}

const productFetch = async() => {
    try{
        const productDetails = await product.fetchAll()
        console.log('hi this is productfetch')
        return productDetails
    }catch(err){
        console.log(err);
        return err;
    }

}

module.exports={productCreate,productFetch};

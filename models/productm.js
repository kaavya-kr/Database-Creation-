const db=require('../util/database');

module.exports= class product {
    constructor(productName,description,price){
        this.productName = productName;
        this.description=description;
        this.price = price;
    }
    static createProduct =async(productName,description,price)=> {
        // console.log('model layer creation',productName,description,price);
        try{
            const productData=await db.execute('INSERT INTO product(productName,description,price)values(?,?,?)',[productName,description,price])
            // console.log('product details',productDetails)
            return productData[0];
        }catch(err){
            console.log(err);
            return err;
        }
       
    }
    static fetchAll= async() => {
        try{
            const productdata=await db.execute('select * from product');
            console.log(productdata[0]);
            return productdata[0];
        }catch(err){
            console.log(err);
            return err;
        }
    }
}
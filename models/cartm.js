const db= require('../util/database');
// const user = require('./userm');

module.exports= class cart {
    constructor(productId,userId,quantity){
        this.productId = productId;
        this.userId=userId;
        this.quantity = quantity;
    }
    static createCart =async(userId,productId,quantity)=> {
        console.log('model layer creation',productId,quantity);
        try{
            const cartData=await db.execute('INSERT INTO cart(userId,productId,quantity)values(?,?,?)',[userId,productId,quantity])
            // console.log('product details',productDetails)
            return cartData[0];
        }catch(err){
            console.log(err);
            return err;
        }
       
    }
    static fetchAll=async ()=> {
        try{
            const cartData= await db.execute('SELECT cart.*,product.price,(product.price*main.cart.quantity) AS totalPrice FROM cart JOIN product ON product.productId=cart.productId;');
            console.log(cartData[0])
            return cartData[0];
        }
       catch(err){
    console.log(err);
    return err;
       }
     }
     static getCart = async(userId,productId) => {
        try{
            const getCarts=await db.execute('SELECT * FROM cart WHERE userId=? AND productId=?',[userId,productId]);
            console.log(getCarts)
            console.log('model-adding cart')
            return getCarts[0];
        }catch(err){
            console.log('model layer getcarts error',err)
            return err;
        }
     }
     static updatedCart = async(userId,productId,quantity) => {
        try{
            const updatedCarts=await db.execute('UPDATE cart SET quantity=? WHERE userId=? AND productId=?',[quantity,userId,productId])
            return updatedCarts;
        }catch(err){
            console.log('model layer updatedcarts error',err)
            return err;
        }
     }
     static deleteCartItem = async(productId) => {
        console.log('from model layer delete')
        try{
            const deletecarts= await db.execute('DELETE FROM cart WHERE productId=?',[productId])
            // console.log('helloooooo');
            return deletecarts[0];
        }catch(err){
            console.log('model layer deletecarts error',err)
            return err;
        }
     }
     static fetchCartItems= async(userId) => {
        console.log("--cart details--")
        try{
            console.log('hai')
            const fetchCart=await db.execute(`SELECT 
                c.cartid,
                c.productId,
                p.productName AS productName,
                p.price as price,
                c.quantity,
                (p.price * c.quantity)AS totalPrice,
                u.email AS email
                FROM cart c 
                JOIN product p ON c.productId = p.productId 
                JOIN user u ON c.userId=u.userId where c.userId=?`,[userId])
            // console.log(cartItems)
            // console.log(fetchCart)
            return fetchCart[0];
            // return ('hi');
        }catch(err){
         console.log(err)
         return err;
        }
    } 
   
}
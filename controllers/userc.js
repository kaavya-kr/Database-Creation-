const user = require('../models/userm');
const {userFetch,userCreate,getUser} = require('../service/userService');
// const {userCreate}= require('../service/userService');


exports.postUser= async(req,res,next) => {
    // const firstName=req.body.firstName;
    // const lastName=req.body.lastName;
    // const email=req.body.email;


    try{
        console.log((req.body),'Incoming data');
        const{
            firstName,lastName,email
        }= req.body;
        // //add service
        const userData = await userCreate(firstName,lastName,email);
        res.send({userData});
    }catch(err){
        console.log(err);
    }
}

exports.getUser=async(req,res,next)=> {
    // console.log('hi')
    try
{

//add service
const users = await userFetch(); 
console.log('this is a get method')
// return products
res.send(users);
}catch(err){
console.log('error',err)
}
}

exports.getUserById=async(req,res,next) => {
    const userId=req.params.userId
    // console.log(userId);
    try {
        // console.log('hi');
        const userData=await getUser(userId)
        res.send(userData);
    } catch (err) {
        console.log(err);
    }
}



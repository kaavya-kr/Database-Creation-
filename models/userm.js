const db=require('../util/database');
module.exports =class user{
   
             constructor(firstName,lastName,email){
                 this.firstName = firstName;
                 this.lastName=lastName;
                 this.email = email;
             }



static getEmail = async(email) => {
    console.log('from model layer email',email);
    try{
    // const a=('from model layer email',email);
    // return a;
    //add sql query
    const emailData=await db.execute('SELECT * FROM user WHERE email=?',[email])
    console.log('model layer emailData:',emailData);
    return emailData[0];
   
}catch(err){
    console.log('model layer error',err);
    return err;
}
}


static createNewUser=async(firstName,lastName,email) => {
//  console.log('model layer user creation')
try{
    const userData =await db.execute('INSERT INTO user(firstName,lastName,email)values(?,?,?)',[firstName,lastName,email])
    // console.log(userData);
    return userData[0];
}catch(err){
    console.log('model layer error',err);
    return err;
}
 }
 static fetchAll=async ()=> {
    try{
        const userData= await db.execute('select * from user');
        console.log(userData)
        return userData[0];
    }
   catch(err){
console.log(err);
return err;
   }
}
static fetchUserId =async(userId) => {
    try{
    const userDetails = await db.execute('SELECT * FROM user WHERE userId =? ',[userId]);
    console.log(userDetails[0])
    return userDetails[0];
    }catch(err){
        console.log('model layer error');
    }
}

static userEmail = async(userId) => {
    console.log('from model layer email')
    try{
        const emailGet = await db.execute('SELECT email FROM user WHERE userId= ?' , [userId])
        // console.log('helloooo')
        // console.log(emailGet)
        return emailGet[0];
    }
    catch(err){
        console.log(err)
        return err;
    }
 }
}

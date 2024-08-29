
 const user=require('../models/userm')
const userCreate= async(firstName,lastName,email) => {
    console.log('hi its service layer');
    console.log('hi its service layer',firstName);
    console.log('hi its service layer',lastName);
    console.log('hi its service layer',email);
    try{
        //add model
        // //  const emailData= await user.getEmail(email);
        //  const userData= await user.createNewUser(firstName,lastName,email);
        
        //  return userData;

        // //  console.log('service layer',emailData)

        const emailDetails=await user.getEmail(email);
        console.log('service layer',emailDetails)
        if(emailDetails.length>0){
            const emailExistData ={message: `already registerred email, incoming email:${email}.please try again`}
            return emailExistData
        }else{
            const userData = await user.createNewUser(firstName,lastName,email);
            if(userData && userData.insertId){           
                const userResponse = {
                    
                    firstName:firstName,
                    lastName:lastName,
                    email:email
                }

                console.log('userresponce',userResponse);
                return userResponse;
            }else{
                const response={message:'something went wrong'};
                return response;
            }
            
            }
        }

    catch(err){
        console.log(err);
        return err;
    }
}
const userFetch = async()=> {
    try{
        const userDetails=await user.fetchAll()
        console.log('userView working service');
        return userDetails

    }catch(err){
        console.log(err);
        return err; 
    }
    
}
 const getUser = async(userId) => {
    // console.log('hi')
    try{
    const getuserData= await user.fetchUserId(userId)
    return getuserData[0]
    }catch(err){
        console.log('service layer error',err)
    }
 }   


module.exports={userCreate,userFetch,getUser};

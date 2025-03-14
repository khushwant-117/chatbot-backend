import {connect,disconnect} from "mongoose";

 async function connectToDatabase(){

    try{
        await connect(process.env.MONGODB_URL);
        
    }catch(error){
    throw new Error('cannot connect toMongoDb');
}
}
async function disconnectFromDatabase(){
    try{
        await disconnect();

    }
    catch(error){
        console.log(error);
        throw new Error('Could not disconnect from MongoDB');
    }
}
export {connectToDatabase,disconnectFromDatabase};
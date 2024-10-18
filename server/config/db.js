import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config({path: "./config/.env"})
const Connection =async ()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/demo', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        console.log("Connected")
    } catch(err)
    {
        console.log("Error: "+ err.message)
    }
}
Connection()
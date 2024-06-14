import mongoose from "mongoose";
import dotenv from "dotenv"


dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const Connection = async () => {

    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-pn9wdra-shard-00-00.va7nynz.mongodb.net:27017,ac-pn9wdra-shard-00-01.va7nynz.mongodb.net:27017,ac-pn9wdra-shard-00-02.va7nynz.mongodb.net:27017/?ssl=true&replicaSet=atlas-xx7dvb-shard-0&authSource=admin&retryWrites=true&w=majority`

    try{
      await  mongoose.connect(URL,{useUnifiedTopology:true});
      console.log("Database connected successfully");
    } 
    catch(error) {
        console.log("Error connecting to database",error)
    }
}

export default Connection;


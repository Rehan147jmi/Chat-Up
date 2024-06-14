
import { Message } from "../model/Message.js"
import {Conversation} from "../model/Conversation.js"

  

  export  const  newMessage = async (request,response) => {
       
    try {
           
     const newmessage = new Message(request.body)
     await newmessage.save();
     await Conversation.findByIdAndUpdate(request.body.conversationID,{message:request.body.text});
     return response.status(200).json("Message saved successfuly");
     

    } 
    
    catch (error) {
      
        return response.status(500).json(error.message)

    }


    }



  export  const  getMessage = async (request,response) => {
    
       
    try {
           
     const Messages = await Message.find({conversationID:{$all:request.body.conversationID}});
     return response.status(200).json(Messages);
     

    } 
    
    catch (error) {
      
        return response.status(500).json(error.message)

    }


    }


    
 import { Conversation } from "../model/Conversation.js";  

  export const newConversation = async (request,response) => {

   try {
    
      const senderID = request.body.senderID;
      const receiverID = request.body.receiverID;
      
      const exist = await Conversation.findOne({members:{$all:[receiverID,senderID]}})
      if(exist) {
         return response.status(200).json("Conversation already exist")
      }

      else {
         const newConversation = new Conversation({members:[receiverID,senderID]})
         await newConversation.save()
         return response.status(200).json("Conversation saved successfully")
      }


   } catch (error) {
    
      return response.status(500).json(error.message);
    
   }
    


   }


   export const getConversation = async (request,response) => {

      const senderID = request.body.senderID;
      const receiverID = request.body.receiverID;

      try {
         
        const conversation = await Conversation.findOne({members:{$all:[senderID,receiverID]}});
        return response.status(200).json(conversation)


      } catch (error) {
         return response.status(500).json(error.message);
      }
   }
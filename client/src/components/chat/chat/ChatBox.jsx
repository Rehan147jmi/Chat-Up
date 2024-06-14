import { useContext,useState,useEffect } from "react";
import { Box,styled } from "@mui/material";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { AccountContext } from "../../../context/AccountProvider";
import { getConversation } from "../../../services/Api";
 
 const ChatBox = () => {

    const {person,account} = useContext(AccountContext);

    const [convoData,setConvoData] = useState({});

    useEffect(()=> {
      const getConversationDetails =    async  () => {
       const data =   await getConversation({senderID:account.sub,receiverID:person.sub});
       setConvoData(data);
      }
      getConversationDetails()
    },[person.sub])


   return (   
    <Box style={{height:"60px"}}>
      <ChatHeader person={person} />
      <Messages person={person} convoData={convoData} />
     </Box>
     )


 }


 export default ChatBox;




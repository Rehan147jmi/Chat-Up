  import  express  from "express";
  import {addUser} from "../controller/user-controller.js";
  import { getUser } from "../controller/user-controller.js";
  import { newConversation } from "../controller/conversation-controller.js";
  import { getConversation } from "../controller/conversation-controller.js";
  import { getMessage, newMessage } from "../controller/message-controller.js";

  const route = express.Router();



  route.post('/add',addUser);

  route.get('/user',getUser);

  route.post('/conversation/add',newConversation);

  route.post('/conversation/get',getConversation);

  route.post('/message/add',newMessage);

  route.post('/message/get',getMessage);


  export default route;
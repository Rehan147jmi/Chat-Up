import { useContext, useState, useEffect } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Box, styled } from "@mui/material";
import Footer from "./Footer";
import { newMessage, getMessage } from "../../../services/Api";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
`;
const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const Messages = ({ person, convoData }) => {
  const { account } = useContext(AccountContext);

  const [msgText, setmsgText] = useState("");

  const sendText = async (e) => {
    const code = e.which;
    if (code === 13) {
      let message = {
        senderID: account.sub,
        receiverID: person.sub,
        conversationID: convoData._id,
        type: "text",
        text: msgText,
      };
      await newMessage(message);

      setmsgText("");
    }
  };

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const msgData = await getMessage({ conversationID: convoData._id });
      console.log(msgData);
      setMessages(msgData);
    };

    fetchMessages();
  }, [person.sub]);

  return (
    <Wrapper>
      <Component></Component>
      <Footer sendText={sendText} setmsgText={setmsgText} msgText={msgText} />
    </Wrapper>
  );
};

export default Messages;

import { useState, useContext } from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation } from "../../../services/Api";

const Component = styled(Box)`
  height: 45px;
  display: flex;
  padding: 13px 0;
  cursor: pointer;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  objectFit: "cover",
  borderRadius: "50%",
  padding: "0 14px",
});

const Conversation = ({ user }) => {
  const [check, setCheck] = useState(false);

  function setBool() {
    setCheck(true);
  }

  function unsetBool() {
    setCheck(false);
  }

  const { setPerson, account } = useContext(AccountContext);

  const getUser = async () => {
    setPerson(user);
    await setConversation({ senderID: account.sub, receiverID: user.sub });
  };

  return (
    <Component
      style={{ backgroundColor: check ? "#ededed" : "white" }}
      onMouseOver={setBool}
      onMouseOut={unsetBool}
      onClick={getUser}
    >
      <Box>
        <Image src={user.picture} alt="dp" />
      </Box>

      <Box>
        <Box>
          <Typography>{user.name}</Typography>
        </Box>
      </Box>
    </Component>
  );
};

export default Conversation;

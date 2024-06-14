import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import { Box, AppBar, Toolbar, styled } from "@mui/material";

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
`;
const ChatHeader = styled(AppBar)`
  height: 125px;
  background-color: #00a884;
`;

const StylledBox = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);

  return (
    <StylledBox>
      {account ? (
        <>
          {" "}
          <ChatHeader>
            {" "}
            <ChatDialog />{" "}
          </ChatHeader>{" "}
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>

          <LoginDialog />
        </>
      )}
    </StylledBox>
  );
};

export default Messenger;

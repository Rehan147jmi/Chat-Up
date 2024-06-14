import { useContext } from "react";
import { Dialog, Box, styled } from "@mui/material";
import Menu from "../chat/menu/Menu";
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";
import { AccountContext } from "../../context/AccountProvider";

const dialogStyle = {
  height: "95%",
  width: "100%",
  margin: "20px",
  borderRadius: 0,
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

const StylledBox = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)`
  min-width: 450px;
`;
const RightComponent = styled(Box)`
  width: 73vw;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const ChatDialog = () => {
  const { person } = useContext(AccountContext);

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <StylledBox>
        <LeftComponent>
          <Menu />
        </LeftComponent>

        <RightComponent>
          {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
        </RightComponent>
      </StylledBox>
    </Dialog>
  );
};

export default ChatDialog;

import { Box, InputBase, styled } from "@mui/material";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";

const Container = styled(Box)`
  height: 55px;
  background: #ededed;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 6px;
    color: #919191;
  }
`;

const Search = styled(Box)`
  border-radius: 10px;
  background-color: #ffffff;
  width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  padding-left: 25px;
  font-size: 14px;
  height: 20px;
  width: 100%;
`;

const ClipIcon = styled(AttachmentOutlinedIcon)`
  transform: rotate(140deg);
`;

const Footer = ({ sendText, setmsgText, msgText }) => {
  return (
    <Container>
      <EmojiEmotionsOutlinedIcon style={{ cursor: "pointer" }} />
      <ClipIcon style={{ cursor: "pointer" }} />
      <Search>
        <InputField
          placeholder="Type a message"
          onChange={(e) => setmsgText(e.target.value)}
          onKeyDown={(e) => sendText(e)}
          value={msgText}
        />
      </Search>
      <MicOutlinedIcon style={{ cursor: "pointer" }} />
    </Container>
  );
};

export default Footer;

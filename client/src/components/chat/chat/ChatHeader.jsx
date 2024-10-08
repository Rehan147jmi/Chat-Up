import { useContext } from "react";
import { Box, styled, Typography } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { Search as SearchIcon } from "@mui/icons-material";
import { defaultProfilePicture } from "../../../constants/constant";


const Wrapper = styled(Box)`
height: 44px;
background: #ededed;
display: flex;
padding: 8px 16px;
align-items: center
`
const Image = styled("img")({
  width: 40,
  height: 40,
  objectFit: "cover",
  borderRadius: "50%",
});

const Name = styled(Typography)`
  margin-left: 12px !important;
`

const RightContainer = styled(Box)`
  margin-left: auto;
  & > svg {
    padding: 8px;
    font-size: 22px;
    color: #000;
  }
`

const Status = styled(Typography)`
  font-size: 12px !important;
  color: rgb(0, 0, 0, 0.6);
  margin-left: 12px !important;
`

const ChatHeader = (props) => {
   
  const {person} = props;

  return (
    <Wrapper>
      <Image src={person.picture} alt="dp" />

      <Box>
        <Name>{person.name}</Name>
        <Status>online status</Status>
      </Box>

      <RightContainer>
        <SearchIcon />
        <MoreVert />
      </RightContainer>
    </Wrapper>
  );
};

export default ChatHeader;

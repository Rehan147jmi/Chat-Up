import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../constants/constant";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useContext } from "react";
import {AccountContext} from "../../context/AccountProvider";
import { addUser } from "../../services/Api";

const dialogStyle = {
  height: "96%",
  width: "60%",
  marginTop: "13%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overFlow: "hidden",
  boxSizing: "border-box",
  paddingTop: "50px",
};

const StylledBox = styled(Box)`
  display: flex;
  justify-content: space-around;
`
const StylledIMG = styled("img")`
  height: 240px;
  width: 240px;
`

const LoginDialog =  () => {

const {setAccount} = useContext(AccountContext);

const onLoginSuccess = async (res) => {

  const decode = jwt_decode(res.credential)
  setAccount(decode);
  await addUser(decode);
  
}



const onLoginError = (err) => {

console.log(err)


}

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <StylledBox>
        <Box style={{ paddingLeft: "20px" }}>
          <Typography
            style={{
              fontSize: "30px",
              color: "#525252",
              fontWeight: "300",
              fontFamily: "inherit",
            }}
          >
            Use WhatsAPP on your Computer
          </Typography>
          <List style={{ marginTop: "25px" }}>
            <ListItem
              style={{ fontSize: "20px", color: "#4a4a4a", lineHeight: "30px" }}
            >
              1. Open WhatsApp on your phone
            </ListItem>
            <ListItem
              style={{ fontSize: "20px", color: "#4a4a4a", lineHeight: "30px" }}
            >
              2. Tap Menu or Settings and select Linked Devices{" "}
            </ListItem>
            <ListItem
              style={{ fontSize: "20px", color: "#4a4a4a", lineHeight: "30px" }}
            >
              3. Tap on Link a Device{" "}
            </ListItem>
            <ListItem
              style={{ fontSize: "20px", color: "#4a4a4a", lineHeight: "30px" }}
            >
              4. Point your phone towards screen to capture the QR code{" "}
            </ListItem>
          </List>
        </Box>

        <Box style={{position:'relative'}}>
          <StylledIMG src={qrCodeImage} alt="qr Code" />

          <Box style={{position:'absolute',top:'40%',left:'10%'}}  >
            
             <GoogleLogin
            onSuccess={onLoginSuccess}
            onError={onLoginError}
          />
              
            </Box>
         
          
        </Box>
      </StylledBox>
    </Dialog>
  );
};

export default LoginDialog;

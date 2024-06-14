 import React from "react";
import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import {MoreVert,Chat} from '@mui/icons-material';
import Options from "./Options";
import InfoDrawer from "../../drawer/InfoDrawer";




const StylledBox = styled(Box)`
display:flex;
justify-content:space-between;
align-items: center;
height:44px;
background-color:#ededed;
padding: 8px 16px;

`



 const MenuHeader = () => {


 const {account} = useContext(AccountContext);


 const [anchorEl, setAnchorEl] = React.useState(null);
 const open = Boolean(anchorEl);
 const handleClick = (event) => {
   setAnchorEl(event.currentTarget);
 };
 const handleClose = () => {
   setAnchorEl(null);
 };


 const [openDrawer,setOpenDrawer] = React.useState(false);

 const toggleDrawer = () => {

    setOpenDrawer(true);
 }




   return(
    <StylledBox>

   <img onClick={toggleDrawer} src={account.picture} alt="" style={{borderRadius:"50%",height:'40px',cursor:'pointer'}} /> 
   <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
   <Box>
    
   <Chat className="Chat" style={{marginLeft:'2px',padding:'8px',fontSize:'22px',marginRight:'8px',cursor:'pointer'}}/>
   <MoreVert onClick={handleClick} style={{marginLeft:'2px',padding:'8px',cursor:'pointer'}}/>
    <Options open={open} anchorEl={anchorEl} handleClose={handleClose} />

   </Box>
  
    </StylledBox>
   )
     

 }


 export default MenuHeader;
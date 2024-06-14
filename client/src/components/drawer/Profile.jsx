 import { useContext } from "react";
 import { Box,styled,Typography } from "@mui/material";
 import { AccountContext } from "../../context/AccountProvider";


 
  const ImageBox = styled(Box)`
    display:flex;
    justify-content:center;
    margin-top:30px;
   margin-bottom:30px;
 
  `
 const Image = styled('img')`
   
  width:180px;
  border-radius:50%;
 
 `

 const BoxWrapper = styled(Box)`
    background: #FFFFFF;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    & :first-child {
        font-size: 13px;
        color: #009688;
        font-weight: 200;
    };
    & :last-child {
        margin: 14px 0;
        color: #4A4A4A;
    }
`

const DescriptionContainer = styled(Box)`
    padding: 15px 20px 28px 30px;
    & > p {
        color: #8696a0;
        font-size: 13px;
    }
`



const Profile = () => {

 const {account} = useContext(AccountContext);




    return(
        <>
        <ImageBox>
          <Image src={account.picture} alt="" />
        </ImageBox>

        <BoxWrapper>
                <Typography>Your name</Typography>
                <Typography>{account.name}</Typography>
            </BoxWrapper>
            <DescriptionContainer>
                <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
            </DescriptionContainer>
            <BoxWrapper>
                <Typography>About</Typography>
                <Typography>Eat! Sleep! Code! Repeat</Typography>
            </BoxWrapper>

        </>
    )
}



export default Profile;
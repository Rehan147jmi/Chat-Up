 import { useState,useEffect,useContext } from "react";
 import { getUser } from "../../../services/Api";
 import { AccountContext } from "../../../context/AccountProvider";
 import { Box,styled,Divider } from "@mui/material";
 import Conversation from "./Conversation";


 const Component = styled(Box)`
 overflow: overlay;
 height: 81vh;
`

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`


 const Conversations = ({text}) => {

 
  const [users,setUsers] = useState([])


    useEffect(()=>{
         
      const fetchData =   async  () =>{
       
         const response = await getUser();
         const filteredData = response.filter(user=> user.name.toLowerCase().includes(text.toLowerCase()));
         setUsers(filteredData)
         console.log(users)
     }

     fetchData();
     

    },[text])


    const {account} = useContext(AccountContext);

    

    return(
        <Component>

         {
          users.map((user)=>{
              

            return user.sub !== account.sub && 
            <>
            <Conversation user={user}/>
            <StyledDivider/>
            </>
          })
         }

        </Component>

    )
 }

 export default Conversations;
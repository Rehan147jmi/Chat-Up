import { Box, styled } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import {InputBase} from "@mui/material"

const StylledInput = styled(InputBase)`

width:100%;
height:15px;
padding: 18px 5px 16px 55px;



`
const StylledBox = styled(Box)`

 background-color: #fff;
 height: 45px;
 border-bottom: 1px solid #F2F2F2;
 

`
const Wrapper = styled(Box)`

background-color: #f0f2f5;
display:flex;
position:relative;
align-items:center;
margin:13px 13px;
border-collapse: separate; 
border-radius:10px;

`

const Search = ({setText}) => {

return(

    <StylledBox>
        <Wrapper>

            <Box style={{position:'absolute',height:'100%',padding:'8px',color:'#919191',marginTop:'16px'}}>
            <SearchIcon fontSize="small"/>
            </Box>

            <StylledInput onChange={(e)  => setText(e.target.value) } placeholder="Search or start a new chat" />

        </Wrapper>
        
    </StylledBox>
)

}


export default Search;  
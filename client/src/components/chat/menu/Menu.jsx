import { useState } from "react";
import { Box } from "@mui/material";
import MenuHeader from "./MenuHeader";
import Search from "./Search";
import Conversations from "./Conversations";

const Menu = () => {
  const [text, setText] = useState("");

  return (
    <Box>
      <MenuHeader />
      <Search setText={setText} />
      <Conversations text={text} />
    </Box>
  );
};

export default Menu;

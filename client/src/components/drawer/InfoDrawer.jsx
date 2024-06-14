import { Drawer, Box, Typography, styled } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Profile from "./Profile";

const InfoDrawer = (props) => {
  const { open, setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };

  const InfoStyle = {
    top: 17,
    left: 20,
    height: "95%",
    width: "29.3%",
    boxShadow: "none",
  };

  const Header = styled(Box)`
    height: 15%;
    width: 100%;
    background-color: #008069;
    color: #fff;
    display: flex;
    box-sizing: border-box;
    padding: 60px 0px 0px 18px;
  `;
  const Component = styled(Box)`
    background-color: #ededed;
    height: 85%;
  `;

  return (
    <div>
      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: InfoStyle }}
        style={{
          zIndex: "1500",
        }}
        hideBackdrop={true}
      >
        <Header>
          <ArrowBack
            onClick={handleClose}
            style={{ marginTop: "1px", cursor: "pointer" }}
          />
          <Typography
            style={{
              color: "white",
              fontSize: "18px",
              marginLeft: "25px",
              fontWeight: "600",
            }}
          >
            Profile
          </Typography>
        </Header>

        <Component>
          <Profile />
        </Component>
      </Drawer>
    </div>
  );
};

export default InfoDrawer;

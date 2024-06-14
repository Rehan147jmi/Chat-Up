import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";


 const Options = (props) => {

   const {anchorEl,open,handleClose} = props;

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        transformOrigin={{
            vertical:"top",
            horizontal:'right'
        }}
      >
        <MenuItem onClick={handleClose}>New Group</MenuItem>
        <MenuItem onClick={handleClose}>Archived</MenuItem>
        <MenuItem onClick={handleClose}>Starred Messages</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Log out</MenuItem>
      </Menu>
    </div>
  );
};

export default Options;

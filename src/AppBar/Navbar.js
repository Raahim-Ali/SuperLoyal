import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../Assets/logo.svg";
import SettingsIcon from "@mui/icons-material/Settings";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import "./Navbar.css";
export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          display: "flex",
          width: "100%",
          height: "64px",
          backgroundColor: "#0F172A",
        }}
      >
        <Toolbar>
          <Typography
            sx={{
              width: "131.98px",
              height: "27.19px",
              top: "18px",
              left: "24.02px",
            }}
          >
            <img src={logo} alt=""></img>
          </Typography>
          <Typography sx={{ marginLeft: "100px" }} className="nav-item">
            <Link to="/" className="nav-item">
              Dashboard
            </Link>
          </Typography>
          <Typography sx={{ marginLeft: "50px" }} className="nav-item">
            <Link to="/rewards" className="nav-item">
              Rewards
            </Link>
          </Typography>
          <Typography sx={{ marginLeft: "50px" }} className="nav-item">
            <Link to="/users" className="nav-item">
              Users
            </Link>
          </Typography>
          <Typography sx={{ marginLeft: "50px" }} className="nav-item">
            <Link to="/subscription" className="nav-item">
              Subscription
            </Link>
          </Typography>

          <div>
            <IconButton
              sx={{
                borderRadius: "40px",
                marginLeft: "1170px",
                border: "2px solid white",
                width: "80px",
                height: "45px",
              }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <SettingsIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Divider sx={{ backgroundColor: "#334155" }} />
    </Box>
  );
}

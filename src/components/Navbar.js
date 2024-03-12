import React from "react";
//import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    //<Link ClassName="navbar" tp="/">
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <AutoStoriesIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Rent-A-Book
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button color="inherit" to="/">
            Features
          </Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About-us</Button>
          <Button
            color="inherit"
            to="/login"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login-Sign-up
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
    // </Link>
  );
};
export default Navbar;

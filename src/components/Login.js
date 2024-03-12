import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  FormControlLabel,
  Button,
  Typography,
  Link,
  btnstyle,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Checkbox from "@mui/material/Checkbox";
function Login() {
  const PaperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "blue" };
  const btnstyle = { margin: "8px 0" };
  return (
    <div>
      <Link className="login" to="/Login"></Link>
      <Grid>
        <Paper elevation={10} style={PaperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign-In</h2>
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter UserName"
            fullWidth
            required
          />
          <TextField
            label="Password"
            placeholder="Enter Password"
            type="password"
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox name="checked" color="primary" />}
            label="Remember Me"
          />
          <Button type="submit" color="primary" variant="contained">
            Sign in
          </Button>
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
          <Typography>
            Do you have an account ?<Link href="#">Sign up</Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}
export default Login;

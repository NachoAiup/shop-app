import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { login } from "../../api/user";
import { StyledPaper } from "./Styles";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    let token = localStorage.getItem("token");
    token && navigate("/home");
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ username, password }).then((res) => {
      const token = res;
      if (token) {
        localStorage.setItem("token", token);
        navigate("/home");
      }
    });
  };

  return (
    <Container>
      <StyledPaper component="form" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-password"
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            required
          />
        </FormControl>
        <Button
          variant="contained"
          type="submit"
          sx={{
            background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
          }}
        >
          LOG IN
        </Button>
      </StyledPaper>
    </Container>
  );
};

export default Login;

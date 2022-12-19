import { AppBar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const StyledFooter = styled(Box)`
  max-width: 100vw;
  display: flex;
  color: white;
  background-color: #0f2027;
  justify-content: space-between;
  padding: 0.8em 0em;
  align-items: center;
  padding: 1rem;
`;

export const StyledAppContainer = styled("div")`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: light-gray;
`;

export const StyledAppBar = styled(AppBar)`
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
`;

export const AppBarTypography = styled(Typography)`
  font-family: Unbounded;
  padding: 0 15px;
  color: white;
  border-right: 1px solid;
  &:hover {
    color: gray;
    border-right: 1px solid white;
  }
`;

export const LastAppBarTypography = styled(AppBarTypography)`
  border-right: none;
  &:hover {
    color: gray;
    border-right: none;
  }
`;

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginRight: theme.spacing(10),
    width: "25%",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Link from "../../Link/Link";
import {
  StyledAppBar,
  AppBarTypography,
  LastAppBarTypography,
} from "../Styles";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Search, SearchIconWrapper, StyledInputBase } from "../Styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [login, setLogin] = useState<boolean>(false);
  const [searchWords, setSearchWords] = useState<string>("");

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let URLSearchParams = searchWords;
    navigate(`/search?keywords=${URLSearchParams}`);
    setSearchWords("");
  };

  const token = localStorage.getItem("token");

  useEffect(() => {
    token ? setLogin(true) : setLogin(false);
  }, [token]);

  return (
    <StyledAppBar>
      <Toolbar>
        <Link to="/home">
          <AppBarTypography variant="h3">clth</AppBarTypography>
        </Link>
        {login && (
          <>
            <Link to="/women">
              <AppBarTypography variant="body1">WOMEN</AppBarTypography>
            </Link>
            <Link to="/men">
              <LastAppBarTypography variant="body1">MEN</LastAppBarTypography>
            </Link>
          </>
        )}
        <Box sx={{ flexGrow: 1 }}></Box>
        {login && (
          <>
            <Search onSubmit={handleSubmit}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={(e) => setSearchWords(e.target.value)}
                value={searchWords}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleMenu}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Cerrar Sesion</MenuItem>
              </Menu>
            </div>
            <Link to="/favorites">
              <IconButton
                size="large"
                aria-label="favorites section"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                sx={{ color: "white" }}
              >
                <FavoriteBorderIcon />
              </IconButton>
            </Link>
            <Link to="/bag">
              <IconButton
                size="large"
                aria-label="shopping bag"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                sx={{ color: "white" }}
              >
                <ShoppingBagOutlinedIcon />
              </IconButton>
            </Link>
          </>
        )}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;

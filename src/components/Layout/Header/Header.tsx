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
import { useState } from "react";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar>
      <Toolbar>
        <Link to="/">
          <AppBarTypography variant="h3">clth</AppBarTypography>
        </Link>
        <Link to="/women">
          <AppBarTypography variant="body1">WOMEN</AppBarTypography>
        </Link>
        <Link to="/men">
          <LastAppBarTypography variant="body1">MEN</LastAppBarTypography>
        </Link>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
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
            <MenuItem>Cerrar Sesion</MenuItem>
          </Menu>
        </div>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <FavoriteBorderIcon />
          </IconButton>
        </div>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <ShoppingBagOutlinedIcon />
          </IconButton>
        </div>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;

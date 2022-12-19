import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Link from "../Link/Link";
import Typography from "@mui/material/Typography";
import { StyledFooter, StyledAppContainer, AppBarTypography } from "./Styles";
import Header from "./Header";

function Layout() {
  return (
    <StyledAppContainer>
      <Header />
      <Toolbar />
      <Container fixed sx={{ flex: 1, display: "flex" }}>
        <Outlet />
      </Container>
      <StyledFooter>
        <Typography>Shop App 2022</Typography>
        <Link to="/">
          <AppBarTypography variant="body1">About</AppBarTypography>
        </Link>
      </StyledFooter>
    </StyledAppContainer>
  );
}

export default Layout;

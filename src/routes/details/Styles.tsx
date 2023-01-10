import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import styled from "@emotion/styled";

export const StyledBodyContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 80%;
`;

export const StyledProductInfoContainer = styled(Container)`
  display: flex;
  justify-content: start;
  align-items: start;
  height: 350px;
  flex-direction: column;
  gap: 30px;
  width: 450px;
  margin: 50px;
`;

export const AppBarTypography = styled(Typography)`
  font-family: Unbounded;
  font-size: 2rem;
  background: #f8f8f8;
  border-bottom: 1px solid #ddd;
  text-align: center;
  width: 100vw;
`;

export const StyledButtonsContainer = styled("form")`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 30px;
  padding: 0px;
`;

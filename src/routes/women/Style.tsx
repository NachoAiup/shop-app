import { Box, ImageListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
`;

export const StyledImageListItem = styled(ImageListItem)`
  height: 100% !important;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const AppBarTypography = styled(Typography)`
  font-family: Unbounded;
  font-size: 2rem;
  background: #f8f8f8;
  border-bottom: 1px solid #ddd;
  text-align: center;
  width: 100vw;
`;

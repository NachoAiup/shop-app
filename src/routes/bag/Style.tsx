import { ImageListItem, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
`;

export const StyledImageListItem = styled(ImageListItem)`
  max-height: 100px;
`;

export const AppBarTypography = styled(Typography)`
  font-family: Unbounded;
  font-size: 2rem;
  background: #f8f8f8;
  border-bottom: 1px solid #ddd;
  text-align: center;
  width: 100vw;
`;

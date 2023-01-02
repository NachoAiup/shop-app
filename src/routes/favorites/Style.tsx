import { ImageListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";

export const StyledContainer = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledImageListItem = styled(ImageListItem)`
  height: 100% !important;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

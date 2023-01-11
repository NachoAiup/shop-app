import { ImageListItem, Typography, Box, Button } from "@mui/material";
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

export const ItemBox = styled(Box)`
  width: 500px;
  height: 100px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  margin: 10px;
  display: flex;
  gap: 5px;
  padding: 10px;
  position: relative;
`;

export const TotalBox = styled(Box)`
  width: 200px;
  height: 200px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const DeleteButton = styled(Button)`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export const StartLookingButton = styled(Button)`
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  margin-top: 20px;
`;

export const BorderBotTypography = styled(Typography)`
  border-bottom: 1px solid gray;
  width: 100%;
`;

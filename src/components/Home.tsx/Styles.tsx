import { Paper } from "@mui/material";
import { Container } from "@mui/system";
import styled from "@emotion/styled";

export const StyledPaper = styled(Paper)`
  transition: 0.7s;
  &:hover {
    transform: scale(1.1);
  }
` as typeof Paper;

export const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

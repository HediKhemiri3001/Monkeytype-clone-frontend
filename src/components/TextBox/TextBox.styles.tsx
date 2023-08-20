import styled from "@emotion/styled";
import { Stack } from "@mui/material";

const WordsContainer = styled(Stack)(() => ({
  flexDirection: "row",
  width: "100%",
  height: "10em",
}));
const CharsContainer = styled(Stack)(() => ({
  flexDirection: "row",
  width: "100%",
  height: "10em",
}));
const SC = { WordsContainer, CharsContainer };
export default SC;

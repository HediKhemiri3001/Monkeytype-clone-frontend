import styled from "@emotion/styled";
import { Stack } from "@mui/material";

const Container = styled(Stack)(() => ({
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
  height: "10em",
  marginRight: "0.2em",
}));
const WordContainer = styled(Stack)(() => ({
  flexDirection: "row",
}));
const CharsContainer = styled(Stack)(() => ({
  flexDirection: "row",
  width: "100%",
  height: "10em",
}));
const SC = { WordContainer, CharsContainer, Container };
export default SC;

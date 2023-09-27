import { Stack, styled } from "@mui/material";

const StatsContainer = styled(Stack)(() => ({
  backgroundColor: "#fff",
  borderRadius: "1em",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.5em",
  padding: "2em",
}));
const Stat = styled("p")(() => ({
  lineHeight: "0.2em",
  fontWeight: "400",
  color: "black",
}));
const SC = { StatsContainer, Stat };

export default SC;

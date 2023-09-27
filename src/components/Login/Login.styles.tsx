import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { Colors } from "../../assets/constants";

export const Form = styled(Stack)(() => ({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2em",
  borderRadius: "5%",
  backgroundColor: Colors.background,
  gap: "1em",
}));

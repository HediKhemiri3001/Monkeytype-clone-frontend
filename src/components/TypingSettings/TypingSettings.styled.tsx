import { styled, Stack } from "@mui/material";
import { Colors } from "../../assets/constants";
interface ISettingButton {
  selected: boolean;
}
export const SettingButton = styled("button")<ISettingButton>(
  ({ selected }) => ({
    textDecoration: "none",
    color: selected ? Colors.text_yellow : Colors.sub,
    backgroundColor: Colors.darker_background,
    border: 0,
    ":hover": {
      color: "#F4EEE0",
      border: 0,
    },
  })
);
export const SettingsBar = styled(Stack)(() => ({
  flexDirection: "row",
  backgroundColor: Colors.darker_background,
  borderRadius: "1em",
  padding: "0.2em",
  width: "fit-content",
}));

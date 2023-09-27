import { styled, Stack } from "@mui/material";
interface ISettingButton {
  selected: boolean;
}
export const SettingButton = styled("button")<ISettingButton>(
  ({ selected }) => ({
    textDecoration: "none",
    color: selected ? "yellow" : "#646669;",
    backgroundColor: "#393646",
    border: 0,
    ":hover": {
      color: "#F4EEE0",
      border: 0,
    },
  })
);
export const SettingsBar = styled(Stack)(() => ({
  flexDirection: "row",
  backgroundColor: "#393646",
  borderRadius: "1em",
  padding: "0.2em",
}));

import { Divider, Stack } from "@mui/material";
import { FC, useState } from "react";
import { Colors } from "../../assets/constants";
import { SettingButton, SettingsBar } from "./TypingSettings.styled";
interface ITypingSettingsProps {
  updateSettings: (setting: Setting) => void;
}
export enum SettingsNames {
  duration = "duration",
  words = "words",
}
export interface Setting {
  name: SettingsNames;
  value: number;
}
export const SettingsValues = {
  duration: [30, 60, 120],
  words: [10, 25, 50, 100],
};
export const TypingSettings: FC<ITypingSettingsProps> = ({
  updateSettings,
}) => {
  const [setting, setSetting] = useState<Setting>({
    name: SettingsNames.duration,
    value: SettingsValues.duration[0],
  });
  const onSettingChange = (newSetting: SettingsNames) => {
    setSetting({ name: newSetting, value: SettingsValues[newSetting][0] });
    updateSettings({ name: newSetting, value: SettingsValues[newSetting][0] });
  };
  const onSettingValueChange = (value: number) => {
    setSetting({ name: setting.name, value: value });
    updateSettings({ name: setting.name, value: value });
  };
  return (
    <SettingsBar>
      <Stack direction={"row"}>
        <SettingButton
          onClick={() => onSettingChange(SettingsNames.duration)}
          selected={setting.name === SettingsNames.duration}
        >
          Duration
        </SettingButton>
        <SettingButton
          onClick={() => onSettingChange(SettingsNames.words)}
          selected={setting.name === SettingsNames.words}
        >
          Words
        </SettingButton>
      </Stack>
      <Divider
        orientation="vertical"
        sx={{
          height: "2.3em",
          backgroundColor: Colors.background,
          width: "0.35em",
          borderRadius: "1em",
        }}
        variant={"middle"}
      />
      <Stack direction={"row"}>
        {SettingsValues[setting.name].map((value) => (
          <SettingButton
            key={`${setting.name}:${value}`}
            onClick={() => onSettingValueChange(value)}
            selected={setting.value === value}
          >
            {value}
          </SettingButton>
        ))}
      </Stack>
    </SettingsBar>
  );
};

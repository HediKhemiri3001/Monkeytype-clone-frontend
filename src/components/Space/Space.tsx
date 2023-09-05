import { Stack } from "@mui/material";
import { FC } from "react";
import { Position } from "../TextBox/TextBox";
interface ISpaceProps {
  wordIndex: number;
  incorrectLetters: Position[];
}

export const Space: FC<ISpaceProps> = ({ wordIndex, incorrectLetters }) => {
  const IncorrectOfWord = incorrectLetters.filter(
    (value) => value.word === wordIndex
  );
  const correct =
    IncorrectOfWord?.find((value) => value.letter === -1) === undefined;
  return (
    <Stack
      width={0.01}
      height={0.01}
      sx={!correct ? { backgroundColor: "red" } : {}}
    ></Stack>
  );
};

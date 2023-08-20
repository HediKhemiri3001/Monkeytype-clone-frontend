import { FC } from "react";
interface ICharacterProps {
  index: number;
  wordActivated: boolean;
  character: string;
  correct: boolean | null;
  currentLetter: number;
  keepOn: boolean;
}

export const Character: FC<ICharacterProps> = ({
  character,
  correct,
  wordActivated,
  currentLetter,
  index,
  keepOn,
}) => {
  const styleNeutral = { color: "gray" };
  const styleActivated = { color: correct ? "white" : "red" };
  return (
    <p
      style={
        keepOn || (wordActivated && currentLetter > index)
          ? styleActivated
          : styleNeutral
      }
    >
      {character}
    </p>
  );
};

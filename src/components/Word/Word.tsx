import { FC, useEffect, useState } from "react";
import { Character } from "../Character/Character";
import { Position } from "../TextBox/TextBox";
import SC from "../TextBox/TextBox.styles";
interface IWordProps {
  word: string;
  index: number;
  incorrectLetters: Position[];
  currentPosition: Position;
}
export const Word: FC<IWordProps> = ({
  word,
  index,
  incorrectLetters,
  currentPosition,
}) => {
  const [incorrectInWord, setIncorrectInWord] = useState<number[]>([]);
  const [activated, setActivated] = useState<boolean>(false);
  useEffect(() => {
    setActivated(currentPosition.word >= index);
    const aux = incorrectLetters.filter((element) => element.word === index);

    setIncorrectInWord(aux.map((element) => element.letter));
  }, [currentPosition, incorrectLetters, index]);
  const keepOn = currentPosition.word > index;
  return (
    <SC.WordContainer tabIndex={-1}>
      {[...word].map((character, index) => (
        <Character
          key={word + index}
          index={index}
          wordActivated={activated}
          currentLetter={currentPosition.letter}
          keepOn={keepOn}
          character={character}
          correct={activated ? !incorrectInWord.includes(index) : null}
        ></Character>
      ))}
    </SC.WordContainer>
  );
};

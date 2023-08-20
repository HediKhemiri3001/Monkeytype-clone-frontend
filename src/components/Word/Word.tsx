import { FC, useEffect, useState } from "react";
import { Character } from "../Character/Character";
import SC from "../TextBox/TextBox.styles";
interface IWordProps {
  word: string;
  index: number;
  incorrectLetters: string[];
  currentWord: number;
  currentLetter: number;
}

export const Word: FC<IWordProps> = ({
  word,
  index,
  incorrectLetters,
  currentWord,
  currentLetter,
}) => {
  const [incorrectInWord, setIncorrectInWord] = useState<string[]>([]);
  const [activated, setActivated] = useState<boolean>(false);
  useEffect(() => {
    setActivated(currentWord >= index);
    const aux = incorrectLetters.filter(
      (element) => element[0] === index.toString()
    );
    setIncorrectInWord(
      aux.map((element) => {
        const numbers = element.split(":");
        return numbers[1];
      })
    );
  }, [currentWord, incorrectLetters, index]);
  const keepOn = currentWord > index;
  return (
    <SC.WordsContainer tabIndex={-1}>
      {[...word].map((character, index) => (
        <Character
          key={word + index}
          index={index}
          wordActivated={activated}
          currentLetter={currentLetter}
          keepOn={keepOn}
          character={character}
          correct={
            activated ? !incorrectInWord.includes(index.toString()) : null
          }
        ></Character>
      ))}
    </SC.WordsContainer>
  );
};

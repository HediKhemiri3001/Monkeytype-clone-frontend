import * as React from "react";
import { FC } from "react";
import { Word } from "../Word/Word";
import SC from "./TextBox.styles";
interface ITextBoxProps {
  words: string[];
}

export const TextBox: FC<ITextBoxProps> = ({ words }) => {
  const [currentLetter, setCurrentLetter] = React.useState(0);
  const [currentWord, setCurrentWord] = React.useState(0);
  const [incorrectLetters, setIncorrectLetters] = React.useState<string[]>([]);
  const handleKeyDown = (event: { key: string }) => {
    const pressedKey = event.key.toLowerCase();
    if (pressedKey === "backspace") {
      if (currentLetter !== 0) setCurrentLetter(currentLetter - 1);
      else {
        if (currentWord !== 0) {
          console.log("here");

          setCurrentWord(currentWord - 1);
          setCurrentLetter(words[currentWord].length - 1);
        }
      }
    } else {
      if (currentLetter === words[currentWord].length - 1) {
        setCurrentWord(currentWord + 1);
        setCurrentLetter(0);
      } else setCurrentLetter(currentLetter + 1);
      if (pressedKey !== words[currentWord][currentLetter]) {
        setIncorrectLetters([
          ...incorrectLetters,
          `${currentWord}:${currentLetter}`,
        ]);
      } else {
        setIncorrectLetters(
          incorrectLetters.filter(
            (element) => element !== `${currentWord}:${currentLetter}`
          )
        );
      }
    }
  };
  console.log(currentWord, " : ", currentLetter);

  return (
    <SC.WordsContainer tabIndex={-1} onKeyDown={handleKeyDown}>
      {words.map((word, index) => (
        <>
          <Word
            key={index}
            currentWord={currentWord}
            currentLetter={currentLetter}
            word={word + " "}
            index={index}
            incorrectLetters={incorrectLetters}
          ></Word>
        </>
      ))}
    </SC.WordsContainer>
  );
};

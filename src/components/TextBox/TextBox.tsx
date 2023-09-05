import * as React from "react";
import { FC } from "react";
import { Space } from "../Space/Space";
import { Timer } from "../Timer/Timer";
import { Word } from "../Word/Word";
import SC from "./TextBox.styles";
export interface Position {
  letter: number;
  word: number;
}
interface ITextBoxProps {}
const ALLOWED_KEYS = [
  "Shift",
  "Control",
  "Alt",
  "CapsLock",
  "ContextMenu",
  "AltGraph",
  "ArrowUp",
  "ArrowDown",
  "ArrowRight",
  "ArrowLeft",
  "Tab",
];
export const TextBox: FC<ITextBoxProps> = () => {
  const [words, setWords] = React.useState<string[]>([]);
  const [timerStart, setTimerStart] = React.useState(false);
  const [currentPosition, setCurrentPosition] = React.useState<Position>({
    letter: 0,
    word: 0,
  });
  const [incorrectLetters, setIncorrectLetters] = React.useState<Position[]>(
    []
  );
  const processResult = (text: string) => {
    const seperatedWords = text.split(" ");
    setWords(seperatedWords);
  };
  const fetchText = () => {
    fetch("http://metaphorpsum.com/paragraphs/1")
      .then((response) => response.text())
      .then((result) => processResult(result));
  };
  React.useEffect(() => {
    fetchText();
  }, []);
  const handleKeyDown = (event: { key: string }) => {
    if (timerStart === false) {
      setTimerStart(true);
    }
    const pressedKey = event.key;
    console.log(pressedKey);

    if (ALLOWED_KEYS.includes(pressedKey)) return;
    if (pressedKey === "Backspace") {
      setIncorrectLetters(
        incorrectLetters.filter(
          (element) =>
            !(
              element.word === currentPosition.word &&
              element.letter === currentPosition.letter - 1
            )
        )
      );
      // If we're not at the end of the word.
      if (currentPosition.letter !== 0) {
        setCurrentPosition((prev) => ({
          letter: prev.letter - 1,
          word: prev.word,
        }));
      } else {
        // If this isn't the first word
        if (currentPosition.word !== 0) {
          // Set word to previous
          setCurrentPosition((prev) => ({
            word: prev.word - 1,
            letter: words[prev.word - 1].length - 1,
          }));
        }
      }
      // I pressed any other key.
    } else {
      if (currentPosition.letter === 0 && currentPosition.word !== 0) {
        if (pressedKey === " ") {
          return;
        } else {
          setIncorrectLetters([
            ...incorrectLetters,
            { word: currentPosition.word, letter: -1 },
          ]);
        }
      }
      if (currentPosition.letter === words[currentPosition.word].length - 1) {
        setCurrentPosition((prev) => ({
          word: prev.word + 1,
          letter: 0,
        }));
      } else {
        setCurrentPosition((prev) => ({
          word: prev.word,
          letter: prev.letter + 1,
        }));
      }
      if (pressedKey !== words[currentPosition.word][currentPosition.letter]) {
        setIncorrectLetters([
          ...incorrectLetters,
          { word: currentPosition.word, letter: currentPosition.letter },
        ]);
      } else {
        setIncorrectLetters(
          incorrectLetters.filter(
            (element) =>
              !(
                element.word === currentPosition.word &&
                element.letter === currentPosition.letter
              )
          )
        );
      }
    }
  };
  console.log(incorrectLetters);
  return (
    <>
      <Timer duration={60} start={timerStart} />
      <SC.Container tabIndex={-1} onKeyDown={handleKeyDown}>
        {words?.map((word, index) => (
          <>
            <Word
              key={index}
              currentPosition={currentPosition}
              word={word}
              index={index}
              incorrectLetters={incorrectLetters}
            ></Word>
            <Space
              incorrectLetters={incorrectLetters}
              wordIndex={index}
            ></Space>
          </>
        ))}
      </SC.Container>
    </>
  );
};

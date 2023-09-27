import { Position } from "../components/TextBox/TextBox";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getKeyByValue(object: Map<string, number>, value: number) {
  let key;
  for (key of object.keys()) {
    if (object.get(key) === value) return key;
  }
}

const calculateCorrectWords = (
  lastActiveWordIndex: number,
  incorrectLetters: Position[]
) => {
  const incorrectWords = new Set(
    incorrectLetters.map((position) => position.word)
  );
  return lastActiveWordIndex - incorrectWords.size + 1;
};

const calculateWpm = (duration: number, correctWords: number) => {
  return correctWords / (duration / 60);
};

const calculateMostErroneousLetter = (
  incorrectLetters: Position[],
  words: string[]
) => {
  if (incorrectLetters.length !== 0) {
    const incorrectLettersAsChars: string[] = incorrectLetters.map(
      (element) => words[element.word][element.letter]
    );
    const letterCount = new Map<string, number>();
    for (let i = 0; i < incorrectLettersAsChars.length; i++) {
      const element: string = incorrectLettersAsChars[i];
      const count = letterCount.get(element);
      if (count) {
        letterCount.set(element, count + 1);
      } else {
        letterCount.set(element, 1);
      }
    }
    const maximumValue = Math.max(...letterCount.values());

    return getKeyByValue(letterCount, maximumValue);
  } else {
    return null;
  }
};

export { calculateCorrectWords, calculateWpm, calculateMostErroneousLetter };

import { Alert, AlertColor, Button } from "@mui/material";
import { FC, useEffect, useState } from "react";
import {
  calculateCorrectWords,
  calculateMostErroneousLetter,
  calculateWpm,
} from "../../helpers/calculations";
import { createScore } from "../../services/Score";
import { User } from "../../services/User";
import { Position } from "../TextBox/TextBox";
import { Setting } from "../TypingSettings/TypingSettings";
import SC from "./Stats.styled";
interface IStatsProps {
  words: string[];
  incorrectLetters: Position[];
  lastActiveWord: number;
  settings: Setting[];
}
interface SavingStatus {
  status: AlertColor;
  message: string;
}
export interface Stats {
  wordAccuracy: number;
  wpm: number;
  mostErroneousLetter: string;
}
export const Stats: FC<IStatsProps> = ({
  words,
  incorrectLetters,
  lastActiveWord,
  settings,
}) => {
  const [stats, setStats] = useState<Stats>({
    wordAccuracy: 0,
    wpm: 0,
    mostErroneousLetter: "",
  });
  const [savingStatus, setSavingStatus] = useState<SavingStatus>();
  const loggedInUser: User = JSON.parse(localStorage.getItem("user")!);
  useEffect(() => {
    const correctWordsNumber = calculateCorrectWords(
      lastActiveWord,
      incorrectLetters
    );
    const mostErroneousLetter = calculateMostErroneousLetter(
      incorrectLetters,
      words
    );
    setStats({
      wordAccuracy: correctWordsNumber,
      wpm: calculateWpm(60, correctWordsNumber),
      mostErroneousLetter: mostErroneousLetter!,
    });
  }, [incorrectLetters, lastActiveWord, words]);
  const saveStat = async () => {
    if (savingStatus?.status !== "success") {
      const result = await createScore({
        score: stats,
        settings: settings,
        user: loggedInUser.objectId,
      });
      console.log(result.status);

      setSavingStatus({
        status: result.status === 201 ? "success" : "error",
        message:
          result.status === 201
            ? "Score saved succesfully."
            : "Couldn't save your score, please try again.",
      });
    }
  };

  return (
    <SC.StatsContainer>
      {savingStatus && (
        <Alert severity={savingStatus?.status}>{savingStatus?.message}</Alert>
      )}
      <SC.Stat>
        Word accuracy: {stats.wordAccuracy} out of {lastActiveWord + 1}
      </SC.Stat>
      <SC.Stat>WPM: {stats.wpm}</SC.Stat>
      <SC.Stat>Most Erroneous character: {stats.mostErroneousLetter}</SC.Stat>
      {loggedInUser && (
        <Button onClick={() => saveStat()}>Save this stat.</Button>
      )}
    </SC.StatsContainer>
  );
};

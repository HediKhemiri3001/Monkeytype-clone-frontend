import { FC, useEffect, useState } from "react";
import { getScoresUser, Score } from "../../services/Score";
import { User } from "../../services/User";
interface IScoresProps {}

export const Scores: FC<IScoresProps> = () => {
  const [personalScores, setPersonalScores] = useState<Score[]>();
  const user: User = JSON.parse(localStorage.getItem("user")!);
  const fetchScores = async () => {
    const data = await getScoresUser(user.objectId);
    console.log(data);
    setPersonalScores(data);
  };
  useEffect(() => {
    fetchScores();
  }, []);
  if (personalScores?.length !== 0)
    return (
      <div>
        {personalScores?.map((score) => (
          <div>{score.score.wordAccuracy}</div>
        ))}
      </div>
    );
  else return <div>No available scores atm.</div>;
};

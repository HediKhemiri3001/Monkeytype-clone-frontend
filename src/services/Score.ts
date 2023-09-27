import { Stats } from "../components/Stats/Stats";
import { Setting } from "../components/TypingSettings/TypingSettings";

export interface Score {
  user: string;
  settings: Setting[];
  score: Stats;
}
const headers: Headers = new Headers([
  ["X-Parse-Application-Id", import.meta.env.VITE_PARSE_APPLICATION_ID],
  ["Content-Type", "application/json"],
]);

export const createScore = async (score: Score) => {
  const body: BodyInit = JSON.stringify(score);
  const response = await fetch(
    import.meta.env.VITE_PARSE_SERVER_ADDRESS + "/classes/Score",
    {
      method: "POST",
      headers: headers,
      body: body,
    }
  );
  return response;
};
export const getScoresUser = async (userId: string) => {
  const id = JSON.stringify({ user: userId });

  const query = new URLSearchParams({
    where: id,
  });
  return await fetch(
    import.meta.env.VITE_PARSE_SERVER_ADDRESS + "/classes/Score?" + query,
    {
      method: "GET",
      headers: headers,
    }
  )
    .then((response) => response.json())
    .then((response) => response.results);
};

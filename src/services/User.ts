import { useUser } from "../contexts/userContext";

export interface User {
  objectId: string;
  username: string;
  createdAt: string;
}
export interface LoginUser {
  username: string;
  password: string;
}
export interface CreateUser extends LoginUser {
  email: string;
}

const headers: Headers = new Headers([
  ["X-Parse-Application-Id", import.meta.env.VITE_PARSE_APPLICATION_ID],
  ["Content-Type", "application/json"],
]);

export const createUser = async (user: CreateUser) => {
  const body: BodyInit = JSON.stringify(user);
  await fetch(import.meta.env.VITE_PARSE_SERVER_ADDRESS + "/users", {
    method: "POST",
    headers: headers,
    body: body,
  })
    .then((response) => response.json())
    .then((data) => {
      const userContext = useUser();
      userContext.setUser(data);
    });
};
export const loginUser = async (user: LoginUser) => {
  const body: BodyInit = JSON.stringify(user);
  await fetch(import.meta.env.VITE_PARSE_SERVER_ADDRESS + "/login", {
    method: "POST",
    headers: headers,
    body: body,
  })
    .then((response) => response.json())
    .then((response) => {
      localStorage.setItem("user", JSON.stringify(response));
    })
    .catch((err) => console.error(err));
};

export const getUsers = async () => {
  let Users;
  await fetch(import.meta.env.VITE_PARSE_SERVER_ADDRESS + "/users", {
    method: "GET",
    headers: headers,
  })
    .then((response) => response.json())
    .then((response) => {
      Users = response.results;
    })
    .catch((err) => console.error(err));
  return Users;
};

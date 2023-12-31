import { User } from "../services/User";

export const saveObject = (key: string, object: object | User) => {
  localStorage.setItem(key, JSON.stringify(object));
};

export const removeObject = (key: string) => {
  localStorage.removeItem(key);
};

export const readObject = (key: string): object | User => {
  return JSON.parse(localStorage.getItem(key)!);
};

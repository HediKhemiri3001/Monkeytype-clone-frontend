import * as React from "react";
import { createContext, useContext, useState } from "react";
import { User } from "../services/User";

// Define the shape of the context's data
interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

// Create the UserContext
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a custom hook for using the context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
type UserProviderProps = {
  children?: React.ReactNode;
};
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

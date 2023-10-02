import { Button, Stack } from "@mui/material";
import { FC } from "react";
import { Login } from "../Login/Login";
import { CustomModal } from "../CustomModal/CustomModal";
import { Register } from "../Register/Register";
import { User } from "../../services/User";
import { readObject, removeObject } from "../../helpers/localStorage";
interface INavBarProps {}

export const NavBar: FC<INavBarProps> = () => {
  const user: User = readObject("user");

  return (
    <Stack
      sx={{
        width: "100%",
        zIndex: 2,
      }}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      <img src="" alt="logo"></img>
      <Stack flexDirection={"row"}>
        {!user ? (
          <>
            <div>
              <CustomModal name="Login">
                <Login />
              </CustomModal>
            </div>
            <div>
              <CustomModal name="Register">
                <Register />
              </CustomModal>
            </div>
          </>
        ) : (
          <>
            <Button onClick={() => removeObject("user")}>Logout</Button>
            <div>
              <CustomModal name="My profile">
                <Login />
              </CustomModal>
            </div>
          </>
        )}
      </Stack>
    </Stack>
  );
};

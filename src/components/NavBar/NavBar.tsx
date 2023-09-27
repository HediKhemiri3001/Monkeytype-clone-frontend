import { Stack } from "@mui/material";
import { FC } from "react";
import { Login } from "../Login/Login";
import { CustomModal } from "../CustomModal/CustomModal";
import { Register } from "../Register/Register";
interface INavBarProps {}

export const NavBar: FC<INavBarProps> = () => {
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
      </Stack>
    </Stack>
  );
};
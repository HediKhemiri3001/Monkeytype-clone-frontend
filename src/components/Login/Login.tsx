import { Button, TextField, Typography } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import { Colors } from "../../assets/constants";
import { LoginUser, loginUser } from "../../services/User";
import { Form } from "./Login.styles";

export const Login: FC = () => {
  const [form, setForm] = useState<LoginUser>({ username: "", password: "" });
  const disabledForm = !form.username || !form.password;
  const onFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case "username":
        setForm((prev) => {
          return { ...prev, username: event.target.value };
        });
        break;
      case "password":
        setForm((prev) => {
          return { ...prev, password: event.target.value };
        });
        break;
      default:
        break;
    }
  };
  const onSubmit = () => {
    loginUser(form);
  };
  return (
    <Form>
      <Typography variant="h2" color={Colors.text} fontFamily={"Robo"}>
        Login
      </Typography>
      <TextField
        id="username"
        label="Username"
        type="text"
        value={form.username}
        onChange={onFormChange}
        variant={"filled"}
      ></TextField>
      <TextField
        id="password"
        label="Password"
        type="password"
        value={form.password}
        onChange={onFormChange}
        variant={"filled"}
      ></TextField>
      <Button
        onClick={onSubmit}
        disabled={disabledForm}
        variant={"outlined"}
        color={"primary"}
      >
        Submit
      </Button>
    </Form>
  );
};

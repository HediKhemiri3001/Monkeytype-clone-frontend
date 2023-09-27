import { Button, TextField } from "@mui/material";
import * as React from "react";
import { FC, useState } from "react";
import { CreateUser, createUser } from "../../services/User";

export const Register: FC = () => {
  const [form, setForm] = useState<CreateUser>({
    username: "",
    password: "",
    email: "",
  });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    matches: false,
  });
  const deactivatedForm =
    form.email === "" ||
    form.username === "" ||
    form.password === "" ||
    !confirmPassword.matches;
  const onFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case "username":
        setForm((prev) => {
          return { ...prev, username: event.target.value };
        });
        break;
      case "email":
        setForm((prev) => {
          return { ...prev, email: event.target.value };
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
  const onConfirmPassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== form.password) {
      setConfirmPassword({ matches: false, value: event.target.value });
    } else {
      setConfirmPassword({ matches: true, value: event.target.value });
    }
  };
  const onSubmit = () => {
    createUser(form);
  };
  return (
    <form>
      <TextField
        sx={{ color: "white" }}
        id="username"
        label="Username"
        type="text"
        value={form.username}
        onChange={onFormChange}
        variant={"filled"}
      ></TextField>
      <TextField
        id="email"
        label="Email"
        type="email"
        value={form.email}
        onChange={onFormChange}
      ></TextField>
      <TextField
        id="password"
        label="Password"
        type="password"
        value={form.password}
        onChange={onFormChange}
      ></TextField>
      <TextField
        id="confirm-password"
        label="Confirm Password"
        type="password"
        value={confirmPassword.value}
        onChange={onConfirmPassChange}
      ></TextField>
      <Button onClick={onSubmit} disabled={deactivatedForm}>
        Submit
      </Button>
    </form>
  );
};

import { Button, TextField } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import { LoginUser, loginUser } from "../../services/User";

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
        id="password"
        label="Password"
        type="password"
        value={form.password}
        onChange={onFormChange}
      ></TextField>
      <Button onClick={onSubmit} disabled={disabledForm}>
        Submit
      </Button>
    </form>
  );
};

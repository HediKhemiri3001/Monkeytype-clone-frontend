import { Button, Modal } from "@mui/material";
import * as React from "react";
import { FC, useState } from "react";
interface IModalProps {
  name?: string;
}

export const CustomModal: FC<React.PropsWithChildren<IModalProps>> = (
  props
) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Button onClick={() => handleOpen()}>{props.name}</Button>
      <Modal
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>{props.children}</div>
      </Modal>
    </>
  );
};

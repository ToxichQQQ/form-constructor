import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import { DialogTitle } from "@material-ui/core";

export const CustomDialog = ({ content, open, title, close }) => {
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
};

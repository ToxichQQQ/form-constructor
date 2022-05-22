import React, { useState } from "react";
import { Checkbox, Grid } from "@material-ui/core";
import { CustomDialog } from "../Dialiog";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  customCheckbox: {
    "& .MuiCheckbox-root": {
      padding: "0",
    },
  },
}));

export const CustomCheckbox = ({ fieldConfig }) => {
  const classes = useStyles();
  const [value, setValue] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container alignItems="center" className={classes.customCheckbox}>
      <Checkbox
        color="default"
        checked={value}
        onClick={() => setValue((prevState) => !prevState)}
      />
      <span style={{ textDecoration: "underline" }} onClick={handleClickOpen}>
        {fieldConfig.Label}
      </span>
      <CustomDialog
        title={<p>{fieldConfig.messageTitle}</p>}
        content={fieldConfig.message}
        open={open}
        close={handleClose}
      />
    </Grid>
  );
};

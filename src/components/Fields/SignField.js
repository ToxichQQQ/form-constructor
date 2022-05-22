import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  signFieldStyles: {
    "& .MuiInput-root": {
      fontFamily: "'Homemade Apple', cursive",
    },
  },
}));

export function SignField({ fieldConfig }) {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const upperCaseFirstLetter = value => value.slice(0, 1).toUpperCase() + value.slice(1, value.length);

  const validation = () => {
    if (value) {
      const newValue = value.split(" ");
      if (newValue.length != 2 || newValue[0].length < 3 || newValue[1].length < 3) {
        return fieldConfig.errorMessage;
      }
    }
    return fieldConfig.helperText;
  };

  return (
    <TextField
      disabled={fieldConfig.disabled}
      className={classes.signFieldStyles}
      fullWidth={fieldConfig.fullWidth}
      variant="standard"
      label={fieldConfig.fieldLabel}
      helperText={validation()}
      error={validation() !== fieldConfig.helperText}
      required={fieldConfig.required}
      onChange={e => {
        const value = upperCaseFirstLetter(e.target.value);
        setValue(value);
      }}
    />
  );
}

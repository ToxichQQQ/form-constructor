import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export function EmailField({ fieldConfig }) {
  const [value, setValue] = useState(undefined);

  const isValidEmail = () => {
    if (value) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return !re.test(String(value).toLowerCase());
    } else {
      return false;
    }
  };

  return (
    <TextField
      disabled={fieldConfig.disabled}
      name={fieldConfig.fieldName}
      fullWidth={fieldConfig.fullWidth}
      variant="standard"
      required={fieldConfig.required}
      label={fieldConfig.fieldLabel}
      error={isValidEmail()}
      helperText={isValidEmail() && fieldConfig.errorMessage}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

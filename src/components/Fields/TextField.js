import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export function CustomTextField({ fieldConfig }) {
  const [value, setValue] = useState(undefined);

  const upperCaseFirstLetter = (value) =>
    value.slice(0, 1).toUpperCase() + value.slice(1, value.length);
  return (
    <TextField
      disabled={fieldConfig.disabled}
      fullWidth={fieldConfig.fullWidth}
      variant="standard"
      label={fieldConfig.fieldLabel}
      helperText={fieldConfig.helperText}
      required={fieldConfig.required}
      onChange={(e) => {
        const value = upperCaseFirstLetter(e.target.value);
        setValue(value);
      }}
    />
  );
}

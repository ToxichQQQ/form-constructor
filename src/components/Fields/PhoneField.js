import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import formatString from "format-string-by-pattern";

export function PhoneField({ fieldConfig }) {
  const [value, setValue] = useState(undefined);

  const isValidPhone = () => value && value.replace(/[^\d]/g, "").length < 10;

  return (
    <TextField
      disabled={fieldConfig.disabled}
      name={fieldConfig.fieldName}
      fullWidth={fieldConfig.fullWidth}
      variant={fieldConfig.variant}
      label={fieldConfig.fieldLabel}
      error={isValidPhone()}
      required={fieldConfig.required}
      helperText={isValidPhone() && fieldConfig.errorMessage}
      value={value}
      onChange={e => {
        const value = formatString("(999) 999-9999", e.target.value);
        setValue(value);
      }}
    />
  );
}

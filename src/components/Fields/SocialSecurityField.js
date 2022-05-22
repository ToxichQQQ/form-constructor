import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import formatString from "format-string-by-pattern";

export const SocialSecurityField = ({ fieldConfig }) => {
  const [value, setValue] = useState(undefined);

  const formattingValue = value => {
    const formattedValue = value.replace(/[^\d]/g, "");
    if (formattedValue.length > 9) {
      return formattedValue.slice(0, -1);
    }
    return formattedValue;
  };
  return (
    <TextField
      fullWidth={fieldConfig.fullWidth}
      disabled={fieldConfig.disabled}
      variant={fieldConfig.variant}
      label={fieldConfig.fieldLabel}
      required={fieldConfig.required}
      value={value}
      onChange={e => {
        const value = formattingValue(e.target.value);
        setValue(formatString("999-99-9999", value));
      }}
    />
  );
};

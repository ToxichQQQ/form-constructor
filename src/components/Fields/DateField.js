import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import formatString from "format-string-by-pattern";

export const DateField = ({ fieldConfig }) => {
  const [value, setValue] = useState(undefined);

  const formattingValue = value => {
    const formattedValue = value.replace(/[^\d]/g, "");
    if (formattedValue.length > 8) {
      return formattedValue.slice(0, -1);
    }
    return formattedValue;
  };

  const validation = () => {
    const newValue = new Date(value && value.replace(/[^\d / ]/g, ""));

    if (newValue > new Date(fieldConfig.maxValue) || newValue < new Date(fieldConfig.minValue)) {
      return true;
    }
  };

  return (
    <TextField
      fullWidth={fieldConfig.fullWidth}
      disabled={fieldConfig.disabled}
      variant={fieldConfig.variant}
      label={fieldConfig.fieldLabel}
      required={fieldConfig.required}
      helperText={validation() && fieldConfig.errorMessage}
      error={validation()}
      value={value}
      onChange={e => {
        const value = formattingValue(e.target.value);
        setValue(formatString("99/99/9999", value));
      }}
    />
  );
};

import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";

export const PercentField = ({ fieldConfig }) => {
  const [value, setValue] = useState(undefined);

  const formattingValue = (value) => {
    const formattedValue = value.replace(/[^\d]/g, "");
    if (Number(formattedValue) > Number(fieldConfig.maxValue)) {
      const newValue = formattedValue.slice(0, -1);
      setValue(newValue);
      return;
    }
    setValue(formattedValue);
  };

  const validation = () =>
    value && value.replace(/[^\d]/g, "") < fieldConfig.minValue;

  return (
    <TextField
      fullWidth={fieldConfig.fullWidth}
      disabled={fieldConfig.disabled}
      variant="standard"
      label={fieldConfig.fieldLabel}
      required={fieldConfig.required}
      helperText={validation() && fieldConfig.errorMessage}
      error={validation()}
      value={value}
      InputProps={{
        endAdornment: <InputAdornment position="end">%</InputAdornment>,
      }}
      onChange={(e) => formattingValue(e.target.value)}
    />
  );
};

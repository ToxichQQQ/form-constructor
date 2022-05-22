import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export const PostalCodeField = ({ fieldConfig }) => {
  const [value, setValue] = useState(undefined);

  const postalFormat = value => {
    const formattedValue = value.replace(/[^\d]/g, "");
    if (formattedValue.length > 5) {
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
        const value = postalFormat(e.target.value);
        setValue(value);
      }}
    />
  );
};

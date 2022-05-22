import React, { useState } from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

export function SelectField({ fieldConfig, selectValue, changeSelectValue }) {
  const [value, setValue] = useState(selectValue || "");

  const handleChange = (val) => {
    if (changeSelectValue) {
      changeSelectValue(val);
    } else {
      setValue(val);
    }
  };

  return (
    <FormControl variant="standard" fullWidth={fieldConfig.fullWidth}>
      <InputLabel id={fieldConfig.fieldName}>
        {fieldConfig.fieldLabel}
      </InputLabel>
      <Select
        disabled={fieldConfig.disabled}
        value={value}
        onChange={handleChange}
        labelId={fieldConfig.fieldName}
      >
        {fieldConfig.fieldOptions.map((option, index) => (
          <MenuItem key={index} value={option.optionValue}>
            {option.optionLabel}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{fieldConfig.helperText}</FormHelperText>
    </FormControl>
  );
}

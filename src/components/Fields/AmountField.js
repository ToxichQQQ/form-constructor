import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export function AmountField({ fieldConfig }) {
  const [value, setValue] = useState(undefined);
  const maxAmountValue = 1000000000;

  const formatCurrency = (value) => {
    let formattedValue = value && value.replace(/[^\d.]/g, "");
    if (typeof formattedValue === "number")
      formattedValue = formattedValue.toString();
    if (formattedValue && formattedValue !== "$" && formattedValue !== "0") {
      formattedValue = formattedValue.replace(/\$/g, "");
      formattedValue = formattedValue.replace(/,/g, "");
      if (formattedValue.includes(".")) {
        const decimalLocation = formattedValue.indexOf(".");

        let digitsBeforeDecimal = formattedValue.slice(0, decimalLocation);
        digitsBeforeDecimal = Number(digitsBeforeDecimal).toLocaleString();

        const trailingDigits = formattedValue.slice(decimalLocation + 1);
        if (trailingDigits.length <= 2) {
          return `$${digitsBeforeDecimal}.${trailingDigits}`;
        } else {
          return `$${digitsBeforeDecimal}.${trailingDigits.slice(0, 2)}`;
        }
      } else {
        const valueWithCommas = Number(formattedValue).toLocaleString();
        return `$${valueWithCommas}`;
      }
    } else return "";
  };

  const parseCurrency = (value) => {
    if (value) {
      let requiredValue = value.replace(/[^0-9.]/g, "");

      if (!isNaN(parseInt(requiredValue))) {
        requiredValue =
          requiredValue > maxAmountValue
            ? requiredValue.slice(0, -1)
            : requiredValue;
      }

      return requiredValue;
    }
  };

  const isValidValue = () => {
    const newValue = parseCurrency(value);
    if (fieldConfig.maxValue && fieldConfig.minValue && newValue) {
      return newValue < fieldConfig.minValue || newValue > fieldConfig.maxValue;
    } else if (fieldConfig.maxValue && value) {
      return newValue > fieldConfig.maxValue;
    } else {
      return newValue && value < fieldConfig.minValue;
    }
  };

  return (
    <TextField
      fullWidth={fieldConfig.fullWidth}
      disabled={fieldConfig.disabled}
      variant="standard"
      label={fieldConfig.fieldLabel}
      required={fieldConfig.required}
      value={value}
      error={isValidValue()}
      helperText={isValidValue() && fieldConfig.errorMessage}
      onChange={(e) => {
        const value = formatCurrency(e.target.value);
        setValue(value);
      }}
    />
  );
}

import React from "react";
import { Typography } from "@material-ui/core";
import { AmountField } from "../Fields/AmountField";
import { SelectField } from "../Fields/SelectField";
import { CustomTextField } from "../Fields/TextField";
import { EmailField } from "../Fields/EmailField";
import { PhoneField } from "../Fields/PhoneField";
import { PostalCodeField } from "../Fields/PostalCodeField";
import { TaxIdField } from "../Fields/TaxIdField";
import { SocialSecurityField } from "../Fields/SocialSecurityField";
import { DateField } from "../Fields/DateField";
import { PercentField } from "../Fields/PercentField";
import { SignField } from "../Fields/SignField";
import { CustomCheckbox } from "../Fields/CustomCheckbox";
import { ImageInput } from "../Fields/ImageInput";
import { RadioQuestion } from "../Fields/RadioQuestion";

export function Element({ item }) {
  switch (item.type) {
    case "title":
      return <Typography>Title</Typography>;
    case "amount-field":
      return <AmountField fieldConfig={item.config} />;
    case "select-field":
      return <SelectField fieldConfig={item.config} />;
    case "state-field":
      return <SelectField fieldConfig={item.config} />;
    case "text-field":
      return <CustomTextField fieldConfig={item.config} />;
    case "text":
      return <p style={item.config}>{item.config.text}</p>;
    case "email-field":
      return <EmailField fieldConfig={item.config} />;
    case "phone-field":
      return <PhoneField fieldConfig={item.config} />;
    case "postal-field":
      return <PostalCodeField fieldConfig={item.config} />;
    case "tax-id-field":
      return <TaxIdField fieldConfig={item.config} />;
    case "ssn-field":
      return <SocialSecurityField fieldConfig={item.config} />;
    case "date-field":
      return <DateField fieldConfig={item.config} />;
    case "percent-field":
      return <PercentField fieldConfig={item.config} />;
    case "sign-field":
      return <SignField fieldConfig={item.config} />;
    case "checkbox":
      return <CustomCheckbox fieldConfig={item.config} />;
    case "image-field":
      return <ImageInput fieldConfig={item.config} />;
    case "radio-field":
      return <RadioQuestion fieldConfig={item.config} />;
    default:
      return null;
  }
}

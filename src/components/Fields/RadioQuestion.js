import React from "react";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  radioGroup: {
    flexDirection: "row",
  },
  radioButton: {
    marginRight: 40,
    color: "#818181",
    "& .MuiTypography-root": {
      fontSize: 12,
    },
  },
  header: {
    fontSize: 20,
    fontWeight: 500,
  },
  text: {
    margin: "10px 0",
    color: "#606060",
  },
}));

export const RadioQuestion = ({ fieldConfig }) => {
  const classes = useStyles();
  return (
    <FormControl component="fieldset">
      <Typography variant="h5" component="h5" className={classes.header}>
        Quick Question
      </Typography>
      <p className={classes.text}>Does this business:</p>
      <p className={classes.text}>1.Generate $10 million or more in total sales?</p>
      <p className={classes.text}>2.Have more than 6 owners?</p>
      <RadioGroup className={classes.radioGroup} name={fieldConfig.fieldName}>
        {fieldConfig.variants.map(variant => (
          <FormControlLabel
            key={variant.value}
            className={classes.radioButton}
            value={variant.value}
            control={<Radio color="primary" />}
            label={variant.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

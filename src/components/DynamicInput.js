import {
  Button,
  Collapse,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@material-ui/core";
import { termsAndConditions } from "../untils/constants";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";

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
  questionnaireField: {
    "& .MuiInputBase-root": {
      fontFamily: (props) =>
        props.question.value === "signature" && "'Homemade Apple', cursive",
    },
    "& input": {
      color: "#818181",
    },
  },
  configButton: {
    fontWeight: "700",
    color: "#3785F4",
    fontSize: 18,
  },
  terms: {
    padding: "5px",
    border: "1px solid black",
  },
  termsButton: {
    fontWeight: 700,
    cursor: "pointer",
  },
  navBarButton: {
    textTransform: "none",
    fontSize: "12px",
    fontWeight: "400",
  },
}));

export function DynamicInput({
  question,
  setQuestionValues,
  questionValues,
  buildNewTemplate,
}) {
  const [isShowTerms, setShowTerms] = useState(false);
  const handleInputChange = (name, value) => {
    setQuestionValues({ ...questionValues, [name]: value });
  };
  const classes = useStyles({ question });

  switch (question.type) {
    case "radio":
      return (
        <FormControl component="fieldset">
          <RadioGroup
            className={classes.radioGroup}
            value={questionValues[question.value]}
            onChange={(e) => handleInputChange(question.value, e.target.value)}
          >
            {question.variants.map((variant) => (
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
    case "terms":
      return (
        <FormControl component="fieldset">
          <Collapse in={isShowTerms}>
            <div className={classes.terms}>{termsAndConditions}</div>
          </Collapse>
          <p
            className={classes.termsButton}
            onClick={() => setShowTerms((prevState) => !prevState)}
          >
            {isShowTerms
              ? "Hide Terms and Conditions"
              : "Show Terms and Conditions"}
          </p>
          <RadioGroup
            className={classes.radioGroup}
            value={questionValues[question.value]}
            onChange={(e) => handleInputChange(question.value, e.target.value)}
          >
            {question.variants.map((variant) => (
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
    case "select":
      return (
        <FormControl fullWidth>
          <Select
            value={questionValues[question.value]}
            onChange={(e) => handleInputChange(question.value, e.target.value)}
          >
            {question.variants.map((variant) => (
              <MenuItem value={variant.value} key={variant.value}>
                {variant.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    case "input":
      return (
        <TextField
          fullWidth
          value={questionValues[question.value]}
          className={classes.questionnaireField}
          onChange={(e) => handleInputChange(question.value, e.target.value)}
          helperText={question.helperText}
        />
      );
    case "button":
      return (
        <Button
          className={`${classes.navBarButton} ${classes.configButton}`}
          onClick={buildNewTemplate}
        >
          Build Template
        </Button>
      );
    default:
      return null;
  }
}

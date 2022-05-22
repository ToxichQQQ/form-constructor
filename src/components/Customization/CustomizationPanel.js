import { Button, Grid, InputLabel, TextareaAutosize } from "@material-ui/core";
import { FormControl, MenuItem, Select, TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  customizeSelect: {
    display: "flex",
  },
  selectLabel: {
    position: "absolute",
    fontSize: 16,
  },
  formControll: {
    minWidth: "200px",
  },
  customizeContainer: {
    margin: " 0 20px 15px",
  },
}));

export const CustomizationPanel = ({
  fieldName,
  value,
  changeElementValue,
}) => {
  const classes = useStyles();

  const changeSelectOption = (value, optionIndex, optionName, newOption) => {
    const newValue = [...value];
    newValue[optionIndex][optionName] = newOption;
    return newValue;
  };

  const createFieldLabel = (value) => {
    let res = value.match(/[A-Z]?[a-z]+/g);
    res[0] = res[0][0].toUpperCase() + res[0].slice(1);
    return res.join(" ");
  };

  const getInputValue = (key, value) => {
    if (key === "fontSize") {
      return value.replace(/[\D]/g, "");
    } else {
      return value;
    }
  };

  createFieldLabel("textAlign");
  switch (fieldName) {
    case "message":
      return (
        <Grid item xs={12} className={classes.customizeContainer}>
          <TextareaAutosize
            onChange={(e) => changeElementValue(fieldName, e.target.value)}
            value={value}
            minRows={4}
            maxRows={6}
            label={fieldName}
            placeholder="Type your message here"
            variant="standard"
          />
        </Grid>
      );
    case "textAlign":
      return null;
    case "color":
      return null;
    case "fullWidth":
      return (
        <Grid item xs={12} className={classes.customizeContainer}>
          <FormControl className={classes.formControll} fullWidth>
            <InputLabel id="field-width-label" className={classes.selectLabel}>
              Full Width
            </InputLabel>
            <Select
              labelId="field-width-label"
              value={value}
              variant="standard"
              onChange={(e) => changeElementValue(fieldName, e.target.value)}
            >
              <MenuItem className={classes.customizeSelect} value={true}>
                Yes
              </MenuItem>
              <MenuItem className={classes.customizeSelect} value={false}>
                No
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      );
    case "required":
      return (
        <Grid item xs={12} className={classes.customizeContainer}>
          <FormControl className={classes.formControll} fullWidth>
            <InputLabel
              id="field-required-label"
              className={classes.selectLabel}
            >
              Required
            </InputLabel>
            <Select
              labelId="field-required-label"
              value={value}
              variant="standard"
              onChange={(e) => changeElementValue(fieldName, e.target.value)}
            >
              <MenuItem className={classes.customizeSelect} value={true}>
                Yes
              </MenuItem>
              <MenuItem className={classes.customizeSelect} value={false}>
                No
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      );
    case "disabled":
      return (
        <Grid item xs={12} className={classes.customizeContainer}>
          <FormControl className={classes.formControll} fullWidth>
            <InputLabel
              id="field-disabled-label"
              className={classes.selectLabel}
            >
              Disabled
            </InputLabel>
            <Select
              labelId="field-disabled-label"
              value={value}
              variant="standard"
              onChange={(e) => changeElementValue(fieldName, e.target.value)}
            >
              <MenuItem className={classes.customizeSelect} value={true}>
                Yes
              </MenuItem>
              <MenuItem className={classes.customizeSelect} value={false}>
                No
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      );
    case "fieldOptions":
      return (
        <Grid container xs={12} className={classes.customizeContainer}>
          {value.map((option, index) => (
            <Grid item xs={6} style={{ padding: "4px" }} key={index}>
              <TextField
                variant="standard"
                label={`Option Name ${index + 1}`}
                value={option.optionLabel}
                onChange={(e) =>
                  changeElementValue(
                    fieldName,
                    changeSelectOption(
                      value,
                      index,
                      "optionLabel",
                      e.target.value
                    )
                  )
                }
              />
              <TextField
                variant="standard"
                label={`Option Value ${index + 1}`}
                value={option.optionValue}
                onChange={(e) =>
                  changeElementValue(
                    fieldName,
                    changeSelectOption(
                      value,
                      index,
                      "optionValue",
                      e.target.value
                    )
                  )
                }
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() =>
                changeElementValue(
                  fieldName,
                  value.concat({
                    optionLabel: "",
                    optionValue: "",
                  })
                )
              }
            >
              Add new option
            </Button>
          </Grid>
        </Grid>
      );
    default:
      return (
        <Grid item xs={12} className={classes.customizeContainer}>
          <TextField
            fullWidth
            label={createFieldLabel(fieldName)}
            value={getInputValue(fieldName, value)}
            variant="standard"
            onChange={(e) => changeElementValue(fieldName, e.target.value)}
          />
        </Grid>
      );
  }
};

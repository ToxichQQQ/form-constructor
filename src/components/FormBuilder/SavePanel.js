import React, { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  savePanelContainer: {
    margin: 20,
  },
  templateNameContainer: {
    marginRight: "40px",
  },
  buttonsContainer: {
    marginTop: "20px",
  },
  customizationButton: {
    width: 120,
    padding: "8px 0",
    fontSize: "13px",
    borderRadius: "7px",
    fontWeight: "700",
  },
  saveButton: {
    backgroundColor: "#3785F4",
    marginRight: "20px",
  },
  cancelButton: {
    backgroundColor: "#818181",
    color: "white",
  },
  deleteButton: {
    marginTop: "20px",
    color: "#8D1B11",
    borderColor: "#8D1B11",
  },
}));
export const SavePanel = ({
  setSaveMode,
  deleteCreatedTemplate,
  handleChangeTemplateList,
}) => {
  const classes = useStyles();
  const [templateTitle, setTemplateTitle] = useState("");

  return (
    <Grid container justify="center" className={classes.savePanelContainer}>
      <Typography variant="h5" component="h5">
        Template Name
      </Typography>
      <Grid item xs={12} className={classes.templateNameContainer}>
        <TextField
          fullWidth
          label="Type the template name"
          onChange={(e) => setTemplateTitle(e.target.value)}
          value={templateTitle}
        />
      </Grid>
      <Grid container className={classes.buttonsContainer}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Button
              className={`${classes.customizationButton} ${classes.saveButton}`}
              variant="contained"
              color="primary"
              onClick={() => handleChangeTemplateList(templateTitle)}
              disabled={!templateTitle}
            >
              Save
            </Button>
            <Button
              className={`${classes.customizationButton} ${classes.cancelButton}`}
              variant="contained"
              onClick={() => setSaveMode(false)}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Button
              className={`${classes.customizationButton} ${classes.deleteButton}`}
              variant="outlined"
              onClick={deleteCreatedTemplate}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

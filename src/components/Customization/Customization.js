import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Button, Grid } from "@material-ui/core";
import { CustomizationPanel } from "./CustomizationPanel";

const useStyles = makeStyles(() => ({
  header: {
    color: "#000000",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "500",
    padding: "30px 30px 10px",
    margin: 0,
    textTransform: "none",
  },
  buttonsContainer: {
    marginTop: "20px",
  },
  customizeSelect: {
    display: "flex",
  },
  selectLabel: {
    fontSize: 12,
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

export function Customization({ selectedItem, config, setConfig, initialItem, setCustomizationMode, setSelectedItem }) {
  const classes = useStyles();
  const [elementSettings, setElementSettings] = useState(selectedItem && Object.entries(selectedItem.config));

  useEffect(() => {
    if (selectedItem !== "") {
      setElementSettings(Object.entries(selectedItem.config));
      updateConfig(selectedItem);
    }
  }, [selectedItem]);

  const updateConfig = value => {
    if (!value) return false;
    setConfig(prevConfig =>
      prevConfig.map(page => ({
        sections: page.sections.map(section => ({
          title: section.title.id === value.id ? value : section.title,
          fields: section.fields.map(field => (field.id === value.id ? value : field)),
        })),
      }))
    );
  };

  const saveSettings = () => {
    setCustomizationMode(false);
  };

  const cancelSettings = () => {
    updateConfig(initialItem);
    setCustomizationMode(false);
  };
  const deleteElement = () => {
    if (selectedItem.type === "title") {
      setConfig(prevConfig =>
        prevConfig.map(page => ({
          sections: page.sections.filter(section => section.title.id !== selectedItem.id),
        }))
      );
    } else {
      setConfig(prevConfig =>
        prevConfig.map(page => ({
          sections: page.sections.map(section => ({
            ...section,
            fields: section.fields.filter(field => field.id !== selectedItem.id),
          })),
        }))
      );
    }
    setCustomizationMode(false);
  };

  const changeElementValue = (key, value) => {
    if (key === "fontSize") {
      const newValue = value + "px";
      setSelectedItem(prevSettings => ({
        ...prevSettings,
        config: {
          ...prevSettings.config,
          [key]: newValue,
        },
      }));
    } else {
      setSelectedItem(prevSettings => ({
        ...prevSettings,
        config: {
          ...prevSettings.config,
          [key]: value,
        },
      }));
    }
  };

  return (
    <div>
      <Typography variant="h6" component="h6" className={classes.header}>
        Selected Block Customization
      </Typography>
      <Grid container>
        {elementSettings &&
          elementSettings.map(([key, value]) => (
            <CustomizationPanel key={key} fieldName={key} value={value} changeElementValue={changeElementValue} />
          ))}
      </Grid>
      <Grid container className={classes.buttonsContainer}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Button
              className={`${classes.customizationButton} ${classes.saveButton}`}
              variant="contained"
              color="primary"
              onClick={saveSettings}
            >
              Save
            </Button>
            <Button
              className={`${classes.customizationButton} ${classes.cancelButton}`}
              variant="contained"
              onClick={cancelSettings}
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
              onClick={deleteElement}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

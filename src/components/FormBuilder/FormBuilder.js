import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Divider, Grid, TextField, Typography } from "@material-ui/core";
import { Customization } from "../Customization/Customization";
import { SavePanel } from "./SavePanel";
import { BlockList } from "./BlockList";

const useStyles = makeStyles(() => ({
  formBuilder: {
    boxShadow: "-10px 0px 38px rgba(0, 0, 0, 0.319498)",
    position: "fixed",
    height: "100%",
    width: "400px",
    zIndex: "12",
    backgroundColor: "white",
    overflowY: "auto",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  header: {
    color: "#000000",
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "500",
    padding: "30px 30px 10px",
    margin: 0,
  },
  divider: {
    margin: "0 20px",
  },
  formBuilderText: {
    textAlign: "center",
    color: "#818181",
    fontSize: "16px",
    fontWeight: "400",
    padding: "0 50px 10px",
    margin: 0,
  },
  saveTemplateContainer: {
    width: "100%",
    position: 'relative',
    bottom: 0,
  },
  saveTemplateButton: {
    marginTop: "30px",
    backgroundColor: "#3785F4",
    color: "white",
    fontWeight: 700,
    fontSize: 13,
    padding: "8px",
    borderRadius: 7,
  },
  changeTemplate: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#3785F4",
    cursor: "pointer",
    marginTop:'20px'
  },
  sectionNameContainer: {
    margin: "30px 20px 0",
  },
  sectionNameHeader: {
    textAlign: "center",
    marginBottom: "20px",
  },
}));

export function FormBuilder({
  selectNewElement,
  config,
  setConfig,
  selectedItem,
  setSelectedItem,
  setCustomizationMode,
  initialItem,
  customizationMode,
  deleteCreatedTemplate,
  selectedSection,
  handleChangeTemplateList,
}) {
  const [saveMode, setSaveMode] = useState(false);
  const classes = useStyles({ customizationMode, saveMode });

  const findSectionTitle = () => {
    for (let page of config) {
      const sectionWithTile = page.sections.find(section => section.title.id == selectedSection);
      if (sectionWithTile !== undefined) {
        return sectionWithTile.title.config.text;
      }
    }

    return null;
  };

  return (
    <Grid item xs={12} className={classes.formBuilder}>
      <Typography variant="h3" component="h3" className={classes.header}>
        Configurator Blocks
      </Typography>
      <p className={classes.formBuilderText}>Select blocks you would like to use in your template</p>
      <Grid container justify="center">
        <Grid item xs={12} className={classes.divider}>
          <Divider />
        </Grid>
      </Grid>
      {selectedSection && !saveMode && !customizationMode && (
        <Grid item xs={12} className={classes.sectionNameContainer}>
          <Typography variant="h5" component="h5" className={classes.sectionNameHeader}>
            Section Name
          </Typography>
          <TextField variant="standard" fullWidth disabled value={findSectionTitle()} />
        </Grid>
      )}
      {customizationMode ? (
        <Grid>
          <Customization
            config={config}
            setConfig={setConfig}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            setCustomizationMode={setCustomizationMode}
            initialItem={initialItem}
          />
        </Grid>
      ) : saveMode ? (
        <SavePanel
          setSaveMode={setSaveMode}
          deleteCreatedTemplate={deleteCreatedTemplate}
          handleChangeTemplateList={handleChangeTemplateList}
        />
      ) : (
        <BlockList selectNewElement={selectNewElement} />
      )}
      <Grid container justify="center" className={classes.saveTemplateContainer}>
        {saveMode || (
          <Button
            className={classes.saveTemplateButton}
            onClick={() => {
              setCustomizationMode(false);
              setSaveMode(true);
            }}
          >
            Save Template
          </Button>
        )}
        <Grid item xs={12} className={classes.changeTemplate}>
          <span onClick={deleteCreatedTemplate}>Choose Another Template</span>
        </Grid>
      </Grid>
    </Grid>
  );
}

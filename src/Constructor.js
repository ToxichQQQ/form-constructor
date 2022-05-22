import React, { useEffect, useState } from "react";
import { Area } from "./components/Area/Area";
import { FormBuilder } from "./components/FormBuilder/FormBuilder";
import { Grid } from "@material-ui/core";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles(() => ({
  constructor: {
    backgroundColor: "white",
    height: "100vh",
  },
  customizeSelect: {
    display: "flex",
  },
  selectLabel: {
    position: "absolute",
    fontSize: 12,
  },
  formControll: {
    minWidth: "200px",
  },
  area: {
    width: "calc(100% - 400px)",
  },
  sideNav: {
    width: "400px",
  },
}));

export function Constructor({ config, setConfig }) {
  const classes = useStyles();

  const [customizationMode, setCustomizationMode] = useState(false);
  const [editTemplateMode, setEditTemplateMode] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [initialItem, setInitialItem] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [responseSuccess, setResponseSuccess] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState(
    "Successfully updated the account!"
  );

  const handleEditTemplate = async (templateTitle) => {};

  const handleCreateNewTemplate = async (templateTitle) => {};

  const duplicatedValues = () => {
    let allFields = [];

    config.map((page) =>
      page.sections.map((section) =>
        section.fields.map((field) => allFields.push(field.config.fieldName))
      )
    );

    const duplicates = _.filter(allFields, (value, index, iteratee) =>
      _.includes(iteratee, value, index + 1)
    );
    return duplicates;
  };

  const handleChangeTemplateList = (templateTitle) => {
    const duplicates = duplicatedValues();
    if (duplicates.length > 0) {
      setResponseSuccess(false);
      setModalMessage(`You have fields with duplicate names!`);
      setOpenModal(true);
      return false;
    }
    if (editTemplateMode) {
      handleEditTemplate(templateTitle);
    } else {
      handleCreateNewTemplate(templateTitle);
    }

    setCustomizationMode(false);
    setOpenModal(true);
    setEditTemplateMode(false);
  };

  const deleteCreatedTemplate = () => {};

  const selectNewTemplate = (templateConfig) => {
    setConfig(templateConfig);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const selectNewElement = (value) => {
    setCustomizationMode(true);
    setSelectedItem(value);
    setInitialItem(value);
  };

  return (
    <Grid container className={classes.constructor}>
      <Grid item className={classes.area}>
        <Area
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
          config={config}
          setConfig={setConfig}
          setSelectedItem={selectNewElement}
        />
      </Grid>
      <Grid item className={classes.sideNav}>
        <FormBuilder
          handleChangeTemplateList={handleChangeTemplateList}
          selectedSection={selectedSection}
          deleteCreatedTemplate={deleteCreatedTemplate}
          selectNewElement={selectNewElement}
          config={config}
          setConfig={setConfig}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          setCustomizationMode={setCustomizationMode}
          initialItem={initialItem}
          customizationMode={customizationMode}
          selectNewTemplate={selectNewTemplate}
        />
      </Grid>
      <Snackbar
        open={openModal}
        autoHideDuration={3000}
        onClose={handleCloseModal}
      >
        <Alert
          onClose={handleCloseModal}
          severity={responseSuccess ? "success" : "error"}
        >
          {modalMessage}
        </Alert>
      </Snackbar>
    </Grid>
  );
}

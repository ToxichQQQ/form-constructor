import React, { useState } from "react";
import { Area } from "../components/Area/Area";
import { FormBuilder } from "../components/FormBuilder/FormBuilder";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import {duplicatedValues} from "../untils/untils";
import {useNavigate} from "react-router-dom";

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
  const [selectedItem, setSelectedItem] = useState("");
  const [initialItem, setInitialItem] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [responseSuccess, setResponseSuccess] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState(
    "Successfully updated the account!"
  );
  const navigation = useNavigate()

  const handleChangeTemplateList = () => {
    const duplicates = duplicatedValues(config);
    if (duplicates.length > 0) {
      setResponseSuccess(false);
      setModalMessage(`You have fields with duplicate names!`);
      setOpenModal(true);
      return false;
    }

    setCustomizationMode(false);
    setOpenModal(true);
  };

  const deleteCreatedTemplate = () => {
    setConfig([{}])
    navigation('/')
  };

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

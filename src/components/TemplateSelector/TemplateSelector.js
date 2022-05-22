import React, { useState } from "react";
import { Button, Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ocaComprehensiveConfig from "../../config/ocaComprehensiveConfig.json";
import ocaSimpleConfig from "../../config/ocaSimpleConfig.json";
import ocaStandardConfig from "../../config/ocaStandardConfig.json";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(() => ({
  templateSelector: {
    width: "400px",
    height: "100vh",
    boxShadow: "-10px 0px 38px rgba(0, 0, 0, 0.319498)",
  },
  header: {
    textAlign: "center",
    padding: "30px 30px 10px",
    color: "#000000",
    fontSize: "30px",
    fontWeight: "500",
  },
  templateSelectorText: {
    textAlign: "center",
    color: "#818181",
    fontSize: "16px",
    fontWeight: "400",
  },
  ocaTemplate: {
    width: 360,
    height: 100,
    borderRadius: "7px",
    background: "#ebf3fe",
    marginBottom: "10px",
    cursor: "pointer",
  },
  ocaTemplateContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    padding: "20px 0",
  },
  ocaTemplateHeader: {
    fontSize: "26px",
    fontWeight: "400",
    color: "#000",
    textTransform: "none",
  },
  ocaTemplateDescription: {
    margin: 0,
    color: "#818181",
    fontSize: "16px",
    fontWeight: "400",
  },
  customTemplatesHeader: {
    textAlign: "center",
    color: "#000000",
    fontSize: "28px",
    fontWeight: "500",
  },
  selectedTemplate: {
    textAlign: "center",
    color: "#3785F4",
    fontSize: 14,
    fontWeight: 400,
  },
  customTemplates: {
    marginLeft: "20px",
  },
  customTemplatesContainer: {
    overflowX: "scroll",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  customTemplateCard: {
    borderRadius: "7px",
    background: "#ebf3fe",
    marginRight: 20,
    minWidth: "240px",
    cursor: "pointer",
  },
  customTemplateTitle: {
    margin: "20px 0 0 10px",
    fontSize: 26,
    textTransform: "capitalize",
  },
  customTemplateInfo: {
    margin: "0 10px 8px 10px",
  },
  customTemplateText: {
    fontWeight: 500,
    fontSize: 12,
  },
  subText: {
    color: "#818181",
    fontWeight: 400,
  },
  templateIcon: {
    fontSize: 16,
    color: "#3785F4",
  },
  templateCreateInfo: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 500,
  },
  helperText: {
    padding: "20px 0 30px",
    fontWeight: 500,
    fontSize: 18,
    color: "#000000",
    textAlign: "center",
    fontFamily: "Roboto",
  },
  buttonsSection: {
    marginRight: "20px",
  },
  deleteButton: {
    marginRight: "20px",
    backgroundColor: "transparent ",
    color: "#8D1B11 ",
    border: "1px solid #8D1B11 ",
  },
  setActiveButton: {
    marginRight: "20px",
    backgroundColor: "#3785F4",
    color: "#fff",
  },
  cancelButton: {
    backgroundColor: "#818181 !important",
    color: "white",
  },
  customizationButton: {
    width: 120,
    height: 40,
    padding: "8px 0 !important",
    fontSize: "13px !important",
    borderRadius: "7px !important",
    fontWeight: "700 !important",
  },
}));
export const TemplateSelector = ({
  selectNewTemplate,
  customTemplates,
  editTemplate,
  setOcaType,
  activeTemplate,
  accountName,
  selectedTemplate,
  setSelectedTemplate,
}) => {
  const classes = useStyles();
  const [deleteMode, setDeleteMode] = useState(false);
  const [activeMode, setActiveMode] = useState(false);

  const handleEnableDeleteMode = (e, template) => {
    setSelectedTemplate(template);
    setDeleteMode(true);
    setActiveMode(false);
    e.stopPropagation();
  };

  const handleEnableActiveMode = template => {
    setSelectedTemplate(template);
    setDeleteMode(false);
    setActiveMode(true);
  };

  return (
    <Grid className={classes.templateSelector}>
      <Typography variant="h3" component="h3" className={classes.header}>
        Global Templates Configurator
      </Typography>
      <p className={classes.templateSelectorText}>Select template you would like to use</p>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid
            item
            className={classes.ocaTemplate}
            onClick={() => {
              setOcaType("Complex");
              selectNewTemplate(ocaComprehensiveConfig);
            }}
          >
            <div className={classes.ocaTemplateContent}>
              <Typography variant="h6" component="h6" className={classes.ocaTemplateHeader}>
                Complex
              </Typography>
              <p className={classes.ocaTemplateDescription}>A complete template</p>
            </div>
          </Grid>
          <Grid
            item
            className={classes.ocaTemplate}
            onClick={() => {
              setOcaType("Standard");
              selectNewTemplate(ocaStandardConfig);
            }}
          >
            <div className={classes.ocaTemplateContent}>
              <Typography variant="h6" component="h6" className={classes.ocaTemplateHeader}>
                Standard
              </Typography>
              <p className={classes.ocaTemplateDescription}>Overall good choice</p>
            </div>
          </Grid>
          <Grid
            item
            className={classes.ocaTemplate}
            onClick={() => {
              setOcaType("Simple");
              selectNewTemplate(ocaSimpleConfig);
            }}
          >
            <div className={classes.ocaTemplateContent}>
              <Typography variant="h6" component="h6" className={classes.ocaTemplateHeader}>
                Simple
              </Typography>
              <p className={classes.ocaTemplateDescription}>The lightest version</p>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.customTemplates}>
        <Typography variant="h4" component="h4" className={classes.customTemplatesHeader}>
          My Templates
        </Typography>
        <p className={classes.selectedTemplate}>
          Live: <span className={classes.subText}>{activeTemplate && activeTemplate.name}</span>
        </p>
        <Grid container wrap="nowrap" className={classes.customTemplatesContainer}>
          {customTemplates.map(template => (
            <Grid
              onClick={() => handleEnableActiveMode(template)}
              key={template.ocaTemplateId}
              container
              justify="flex-start"
              className={classes.customTemplateCard}
              style={{
                backgroundColor: template.active ? "#ebf3fe" : "#f3f3f3",
              }}
            >
              <Typography variant="h6" component="h6" className={classes.customTemplateTitle}>
                {template.name}
              </Typography>
              <Grid container justify="space-between" alignItems="center" className={classes.customTemplateInfo}>
                <p className={classes.customTemplateText}>
                  Last Update: <span className={classes.subText}>{template.lastUpdateDate}</span>
                </p>
                <Grid item>
                  <EditIcon onClick={() => editTemplate(template)} className={classes.templateIcon} />
                  <DeleteIcon onClick={e => handleEnableDeleteMode(e, template)} className={classes.templateIcon} />
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid container justify="center">
          <Grid item xs={12}>
            <p className={classes.templateCreateInfo}>
              Created by
              <span className={classes.subText}>: {accountName}</span>
            </p>
            <p className={classes.templateCreateInfo}>
              Modified by
              <span className={classes.subText}>: {accountName}</span>
            </p>
          </Grid>
          {selectedTemplate && activeMode && (
            <Grid item xs={12} className={classes.buttonsSection}>
              <Divider />
              <p className={classes.helperText}>Do you want to make “{selectedTemplate.name}” template active?</p>
              <Grid container justify="center" alignItems="center">
                <Button
                  variant="contained"
                  className={`${classes.customizationButton} ${classes.setActiveButton}`}
                  onClick={() => setActiveMode(false)}
                >
                  Set as active
                </Button>
                <Button
                  variant="contained"
                  className={`${classes.customizationButton} ${classes.cancelButton}`}
                  onClick={() => setActiveMode(false)}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          )}
          {deleteMode && (
            <Grid item xs={12} className={classes.buttonsSection}>
              <Divider />
              <p className={classes.helperText}>Are you sure that you want to delete “{selectedTemplate.name}”</p>
              <Grid container justify="center" alignItems="center">
                <Button variant="contained" className={`${classes.customizationButton} ${classes.deleteButton}`}>
                  Delete
                </Button>
                <Button
                  variant="contained"
                  className={`${classes.customizationButton} ${classes.cancelButton}`}
                  onClick={() => setDeleteMode(false)}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

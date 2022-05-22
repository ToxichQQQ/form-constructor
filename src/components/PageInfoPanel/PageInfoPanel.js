import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { v4 as uuidv4 } from "uuid";
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles(() => ({
  pageInfoPanel: {
    padding: "30px 0",
    position: "fixed",
    top: 0,
    background: "#e6e6e6",
    zIndex: "12",
    width: "calc(100% - 400px) !important",
    flexWrap: "nowrap",
    boxShadow: "0px 4px 4px 2px rgba(0, 0, 0, 0.1)",
  },
  addNewSectionButton: {
    padding: 12,
    borderRadius: "50%",
    marginLeft: "20px",
    background: "#3785F4",
  },
  sectionList: {
    display: "flex",
    overflowX: "scroll",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  sectionListItem: {
    margin: "0 0 0 20px",
    padding: "17px 10px",
    borderRadius: 7,
    color: "#FFFFFF",
    cursor: "pointer",
    whiteSpace: "nowrap",
    "&:hover": {
      color: "#FFFFFF",
    },
  },
  sectionListItemLink: {
    color: "#FFFFFF",
    textDecoration: "none",
  },
}));

export const PageInfoPanel = ({
  addSection,
  page,
  config,
  setSelectedSection,
  selectedSection,
}) => {
  const classes = useStyles();

  const titleConfig = {
    title: {
      type: "title",
      config: {
        text: "Section Title",
        fontSize: "20px",
        textAlign: "center",
      },
      id: uuidv4(),
    },
    fields: [],
  };

  return (
    <Grid container alignItems="center" className={classes.pageInfoPanel}>
      <Grid>
        <Button
          className={classes.addNewSectionButton}
          onClick={() => addSection(titleConfig, page)}
        >
          <AddIcon style={{ color: "white", fontSize: "34px" }} />
        </Button>
      </Grid>
      <Grid className={classes.sectionList}>
        {config.sections &&
          config.sections.map((section, index) => (
            <Link
              key={section.title}
              style={{
                background:
                  section.title.id === selectedSection ? "#3785F4" : "grey",
              }}
              className={classes.sectionListItem}
              onClick={() => {
                if (index === 0) {
                  scroll.scrollToTop();
                }
                setSelectedSection(section.title.id);
              }}
              spy={true}
              smooth={true}
              duration={500}
              to={index !== 0 && `${section.title.id}`}
            >
              {section.title.config.text}
            </Link>
          ))}
      </Grid>
    </Grid>
  );
};

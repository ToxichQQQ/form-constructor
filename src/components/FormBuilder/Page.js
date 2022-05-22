import React from "react";
import { Section } from "./Section";
import { useDrag, useDrop } from "react-dnd";
import { ControlTypes } from "../untils/types";
import { Divider, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  page: {
    backgroundColor: props => (props.isDragging ? "#ebf3fe" : "transparent"),
    margin: props => (props.isEditorMode ? "100px 30px" : "0 20px 0"),
    padding: "10px",
  },
  pageInfoContainer: {
    alignItems: "center",
    display: "flex",
    paddingBottom: "20px",
    color: "#3785F4",
  },
  pageInfoLine: {
    marginLeft: "10px",
    width: "96%",
    height: "1px",
    background: "black",
    display: "inline-block",
  },
}));

export function Page({
  config,
  updateSection,
  addSection,
  swapFields,
  swapSections,
  swapPages,
  page,
  setSelectedItem,
  isEditorMode,
}) {
  const [{ canDrop, isOver }, drop] = useDrop(() => {
    return {
      accept: ControlTypes.PAGE,
      collect: monitor => {
        return {
          canDrop: monitor.canDrop(),
          isOver: monitor.isOver(),
        };
      },
      drop: (item, monitor) => {
        swapPages(item.page, page);
        return;
      },
    };
  }, [config, swapPages]);

  const [{ isDragging }, drag] = useDrag(() => {
    return {
      type: ControlTypes.PAGE,
      item: {
        page,
      },
      collect: monitor => {
        return {
          isDragging: monitor.isDragging(),
        };
      },
    };
  }, [config, page]);

  const classes = useStyles({ isDragging, isEditorMode });

  const isEmpty = Object.keys(config).length == 0;

  const getRef = element => {
    drag(element);
    drop(element);
  };

  return (
    <div ref={getRef} className={classes.page}>
      {isEditorMode || (
        <Grid container>
          <Grid item xs={12} className={classes.pageInfoContainer}>
            Page {page + 1}
            <div className={classes.pageInfoLine}></div>
          </Grid>
        </Grid>
      )}
      {isEmpty ? (
        <Section
          updateSection={updateSection(0)}
          addSection={addSection}
          page={page}
          key={0}
          index={0}
          swapSections={swapSections}
        />
      ) : (
        <div>
          {config.sections.map((section, i) => (
            <Section
              updateSection={updateSection(i)}
              config={section}
              addSection={addSection}
              page={page}
              key={i}
              swapFields={swapFields(i)}
              swapSections={swapSections}
              index={i}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </div>
      )}
    </div>
  );
}

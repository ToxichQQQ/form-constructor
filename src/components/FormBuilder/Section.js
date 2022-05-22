import React, { useEffect, useCallback } from "react";
import { FormElement } from "./FormElement";
import { useDrag, useDrop } from "react-dnd";
import { ControlTypes } from "../untils/types";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles(() => ({
  section: {
    display: "flex",
    width: "100%",
    minHeight: 200,
    marginBottom: 30,
    flexDirection: "column",
    cursor: "move",
    borderRadius: "7px",
    backgroundColor: props => (props.isDragging ? "#3785F4" : "transparent"),
    border: props => (props.canDrop ? "1px dashed black" : 0),
    boxShadow: "0px 1px 5px 3px rgba(0, 0, 0, 0.12)",
  },
}));

export function Section({ swapFields, updateSection, swapSections, config, addSection, page, index, setSelectedItem }) {
  const [{ isElementOver, isSectionOver, canDrop }, drop] = useDrop(() => {
    return {
      accept: [ControlTypes.CONTROL, ControlTypes.SECTION],
      collect: monitor => {
        return {
          isElementOver: monitor.isOver() && monitor.getItemType() === ControlTypes.ELEMENT,
          isSectionOver: monitor.isOver() && monitor.getItemType() === ControlTypes.SECTION,
          canDrop: monitor.canDrop(),
        };
      },
      canDrop: item => {
        if (item.type === ControlTypes.SECTION) {
          return true;
        }

        if ((!config || !config.title) && item.type !== "title") {
          return false;
        }

        return true;
      },
      drop: (item, monitor) => {
        if (monitor.getItemType() === ControlTypes.SECTION) {
          swapSections(index, item.index, page);
          return;
        }

        let section = {};

        if (!config || !config.title) {
          section.title = { ...item, id: uuidv4() };
          section.fields = [];
          updateSection(section, page);
          return;
        }

        if (item.type === "title") {
          addSection({ title: { ...item, id: uuidv4() }, fields: [] }, page);
          return;
        }

        section = { ...config };
        section.fields = (section.fields || []).concat({
          ...item,
          id: uuidv4(),
        });
        updateSection(section, page);
      },
    };
  }, [config, swapSections]);

  const [{ isDragging }, drag] = useDrag(() => {
    return {
      type: ControlTypes.SECTION,
      item: {
        index,
      },
      collect: monitor => {
        return {
          isDragging: monitor.isDragging(),
        };
      },
    };
  }, [index]);

  const getRef = element => {
    drag(element);
    drop(element);
  };

  const classes = useStyles({ isDragging, canDrop });

  return (
    <div ref={getRef} className={classes.section}>
      {config && config.title && (
        <h3 id={config.title.id} style={config.title.config} onClick={() => setSelectedItem(config.title)}>
          {config.title.config.text}
        </h3>
      )}
      {config &&
        (config.fields || []).map((field, i) => (
          <FormElement
            item={field}
            key={i}
            index={i}
            onDrop={swapFields}
            page={page}
            sectionIndex={index}
            setSelectedItem={setSelectedItem}
          />
        ))}
    </div>
  );
}

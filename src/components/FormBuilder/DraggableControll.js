import React from "react";
import { useDrag } from "react-dnd";
import { ControlTypes } from "../untils/types";
import { Element } from "./Element";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  draggableContainer: {
    cursor: "move",
  },
  draggableElement: {
    pointerEvents: "none",
    padding: "10px 0 10px",
  },
}));

export function DraggableControl({ item, selectNewElement }) {
  const classes = useStyles();
  const [{ isDragging }, drag] = useDrag(() => {
    return {
      type: ControlTypes.CONTROL,
      item,
      collect: monitor => {
        return {
          isDragging: monitor.isDragging(),
        };
      },
    };
  });

  return (
    <div ref={drag} className={classes.draggableContainer}>
      <div className={classes.draggableElement} style={{ opacity: isDragging ? 0.5 : 1 }}>
        <Element item={item} selectNewElement={selectNewElement} />
      </div>
    </div>
  );
}

import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { ControlTypes } from "../untils/types";
import { makeStyles } from "@material-ui/core/styles";
import { Element } from "./Element";

const useStyles = makeStyles(() => ({
  pageElement: {
    margin: 10,
    border: props => (props.isOver ? "1px dashed black" : 0),
    opacity: props => (props.isDragging ? 0.5 : 1),
  },
}));

export function FormElement({ item, index, onDrop, page, sectionIndex, setSelectedItem }) {
  const [{ isDragging }, drag] = useDrag(() => {
    return {
      type: ControlTypes.ELEMENT,
      item: {
        item,
        index,
        sectionIndex,
        page,
      },
      collect: monitor => {
        return {
          isDragging: monitor.isDragging(),
        };
      },
    };
  }, [item]);

  const [{ isOver }, drop] = useDrop(() => {
    return {
      accept: ControlTypes.ELEMENT,
      collect: monitor => {
        return {
          isOver: monitor.isOver(),
        };
      },
      canDrop: item => {
        if (page !== item.page) {
          return false;
        }

        return true;
      },
      drop: (item, monitor) => {
        onDrop(item.index, index, page, item.sectionIndex, sectionIndex);
      },
    };
  }, [item]);

  const getRef = element => {
    drag(element);
    drop(element);
  };

  const classes = useStyles({ isOver, isDragging });

  return (
    <div className={classes.pageElement} ref={getRef} onClick={() => setSelectedItem(item)}>
      <div style={{ pointerEvents: "none" }}>
        <Element item={item} />
      </div>
    </div>
  );
}

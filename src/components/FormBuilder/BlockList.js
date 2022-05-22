import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import builderItems from "../../config/fields.json";
import { DraggableControl } from "./DraggableControll";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  blockList: {
    margin: "30px 20px 0",
  },
  blockListHeader: {
    fontSize: "18px",
    fontWeight: "400",
    fontFamily: "Roboto",
  },
  showBlocks: {
    color: "#3785F4",
    cursor: "pointer",
  },
}));

export const BlockList = ({ selectNewElement }) => {
  const classes = useStyles();
  return (
    <div className={classes.blockList}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h5" component="h5" className={classes.blockListHeader}>
            All blocks
          </Typography>
        </Grid>
      </Grid>
      {builderItems.map((item, i) => (
        <DraggableControl selectNewElement={selectNewElement} item={item} key={i} />
      ))}
    </div>
  );
};

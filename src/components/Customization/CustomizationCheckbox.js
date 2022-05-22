import React from "react";
import { Grid, TextField } from "@material-ui/core";

export const CustomizationCheckbox = ({
  elementSettings,
  changeElementValue,
}) => {
  return (
    <Grid container>
      {elementSettings &&
        elementSettings.map(([key, value]) => (
          <Grid item xs={12} key={key} style={{ paddingTop: "10px" }}>
            <TextField
              label={key}
              value={value}
              variant="standard"
              onChange={(e) => changeElementValue(key, e.target.value)}
            />
          </Grid>
        ))}
    </Grid>
  );
};

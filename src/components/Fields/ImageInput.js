import React, { useState } from "react";
import { Button } from "@material-ui/core";

export const ImageInput = ({ fieldConfig }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  function uploadButtonHandler() {
    const file = document.getElementById("download");
    file.click();
  }

  function uploadFileChanged(event) {
    if (event.target.files.length < 1 || !event.target.files) {
      return;
    }
    setSelectedFile(event.target.files);
  }

  return (
    <div>
      {selectedFile && (
        <img
          src={URL.createObjectURL(selectedFile[0])}
          style={{
            margin: "15px 15px 15px 0",
            height: "100px",
            display: "block",
          }}
        />
      )}
      <input
        accept="image/*"
        id="download"
        type="file"
        style={{ display: "none" }}
        onChange={uploadFileChanged}
        name={fieldConfig.fieldName}
      />
      <Button
        className="formBtn"
        color="primary"
        variant="outlined"
        style={{ minWidth: 203 }}
        onClick={uploadButtonHandler}
      >
        {fieldConfig.fieldLabel}
      </Button>
    </div>
  );
};

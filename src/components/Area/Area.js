import React, { useCallback, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Page } from "../FormBuilder/Page";
import { Grid } from "@material-ui/core";
import { Button, Divider } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { v4 as uuidv4 } from "uuid";
import { PageInfoPanel } from "../PageInfoPanel/PageInfoPanel";

const useStyles = makeStyles(() => ({
  area: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  pages: {
    marginBottom: "50px",
    marginTop: "130px",
  },
  navBar: {
    padding: "15px 40px 15px",
    position: "fixed",
    bottom: 0,
    background: "white",
    width: "calc(100% - 400px) !important",
  },
  navBarButton: {
    textTransform: "none",
    fontSize: "12px",
    fontWeight: "400",
  },
  navBarButtonBlue: {
    color: "#3785F4",
  },
  navBarDeleteButton: {
    color: "#8D1B11",
  },
  navBarItem: {
    height: "100%",
  },
  navBarPageInfo: {
    paddingRight: "10px",
    color: "#818181",
    fontSize: "14px",
    margin: 0,
  },
}));

export function Area({
  setSelectedItem,
  config,
  setConfig,
  setSelectedSection,
  selectedSection,
}) {
  const classes = useStyles();
  const [isEditorMode, setEditorMode] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);

  const updateSection = useCallback(
    function (index) {
      return function (section, pageIndex) {
        setConfig((prevConfig) => {
          const currentPage = { ...prevConfig[pageIndex] };

          if (!currentPage.sections || currentPage.sections.length === 0) {
            currentPage.sections = [section];
          } else {
            currentPage.sections = currentPage.sections.map((s, i) =>
              i === index ? section : s
            );
          }

          return prevConfig.map((p, i) => (i === pageIndex ? currentPage : p));
        });
      };
    },
    [setConfig]
  );

  const addPage = () => {
    setConfig((prevConfig) =>
      prevConfig.concat({
        sections: [
          {
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
          },
        ],
      })
    );
  };

  function addSection(section, pageIndex) {
    setConfig((prevConfig) => {
      const currentPage = config[pageIndex];
      if (currentPage.sections) {
        currentPage.sections = currentPage.sections.concat(section);
      } else {
        currentPage.sections = [section];
      }
      return prevConfig.map((page, index) =>
        index === pageIndex ? currentPage : page
      );
    });
  }

  const swapSections = useCallback(
    (indexA, indexB, pageIndex) => {
      setConfig((prevConfig) => {
        const currentPage = prevConfig[pageIndex];
        const sections = [...currentPage.sections];
        const temp = { ...sections[indexA] };
        sections[indexA] = { ...sections[indexB] };

        sections[indexB] = temp;

        currentPage.sections = [...sections];

        return prevConfig.map((p, i) => (i === pageIndex ? currentPage : p));
      });
    },
    [config, setConfig]
  );

  const swapPages = useCallback(
    (indexA, indexB) => {
      setConfig((prevConfig) => {
        const newConfig = [...prevConfig];
        const temp = { ...prevConfig[indexA] };
        newConfig[indexA] = { ...newConfig[indexB] };
        newConfig[indexB] = temp;

        return newConfig;
      });
    },
    [setConfig]
  );

  function swapFields(sectionIndex) {
    return function (indexA, indexB, pageIndex, indexSectionA, indexSectionB) {
      if (indexSectionA === indexSectionB) {
        setConfig((prevConfig) => {
          return prevConfig.map((p, i) => {
            if (pageIndex === i) {
              const section = p.sections[sectionIndex];
              const temp = section.fields[indexA];

              section.fields[indexA] = section.fields[indexB];
              section.fields[indexB] = temp;

              return {
                ...p,
                sections: p.sections.map((s, i) => {
                  if (i === sectionIndex) {
                    return {
                      ...section,
                    };
                  }

                  return s;
                }),
              };
            }
            return p;
          });
        });
      } else {
        setConfig((prevConfig) => {
          return prevConfig.map((p, i) => {
            if (pageIndex === i) {
              const sectionFieldsA = p.sections[indexSectionA].fields;
              const sectionFieldsB = p.sections[indexSectionB].fields;
              const temp = sectionFieldsA[indexA];

              sectionFieldsA[indexA] = sectionFieldsB[indexB];
              sectionFieldsB[indexB] = temp;
            }
            return p;
          });
        });
      }
    };
  }

  return (
    <div className={classes.area}>
      <Grid className={classes.pages}>
        {isEditorMode ? (
          <>
            <PageInfoPanel
              setSelectedSection={setSelectedSection}
              selectedSection={selectedSection}
              swapSections={swapSections}
              addSection={addSection}
              page={pageNumber}
              config={config[pageNumber]}
            />
            <Page
              isEditorMode={isEditorMode}
              setSelectedItem={setSelectedItem}
              config={config[pageNumber]}
              updateSection={updateSection}
              addSection={addSection}
              swapFields={swapFields}
              swapPages={swapPages}
              swapSections={swapSections}
              page={pageNumber}
              key={pageNumber}
            />
          </>
        ) : (
          <div>
            {config.map((page, index) => (
              <Page
                isEditorMode={isEditorMode}
                setSelectedItem={setSelectedItem}
                config={page}
                updateSection={updateSection}
                addSection={addSection}
                swapFields={swapFields}
                swapPages={swapPages}
                swapSections={swapSections}
                page={index}
                key={index}
              />
            ))}
          </div>
        )}
      </Grid>
      <Grid container className={classes.navBar} justify="space-between">
        <Grid item xs={4}>
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            className={classes.navBarItem}
          >
            {isEditorMode && (
              <Grid item>
                <p className={classes.navBarPageInfo}>Page {pageNumber + 1}</p>
                <Divider orientation="vertical" style={{ height: "70%" }} />
              </Grid>
            )}
            <Button
              onClick={() => setEditorMode((prevState) => !prevState)}
              className={`${classes.navBarButton} ${classes.navBarButtonBlue}`}
            >
              {isEditorMode ? "View Mode" : "Editor Mode"}
            </Button>
          </Grid>
        </Grid>
        {isEditorMode && (
          <Grid item xs={4}>
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.navBarItem}
            >
              <Button
                className={classes.navBarButton}
                startIcon={<ArrowBackIcon color="primary" />}
                onClick={() => setPageNumber((prevState) => prevState - 1)}
                disabled={pageNumber === 0}
              >
                Previous Page
              </Button>
              <Divider orientation="vertical" style={{ height: "70%" }} />
              <Button
                className={classes.navBarButton}
                endIcon={<ArrowForwardIcon color="primary" />}
                onClick={() => setPageNumber((prevState) => prevState + 1)}
                disabled={pageNumber === config.length - 1}
              >
                Next Page
              </Button>
            </Grid>
          </Grid>
        )}
        <Grid item xs={4}>
          <Grid
            container
            justify="flex-end"
            alignItems="center"
            className={classes.navBarItem}
          >
            <Button
              className={`${classes.navBarButton} ${classes.navBarDeleteButton}`}
              onClick={() =>
                setConfig((prevState) =>
                  prevState.filter((page, index) => index !== pageNumber)
                )
              }
              disabled={config.length === pageNumber + 1}
            >
              Delete page
            </Button>
            <Divider orientation="vertical" style={{ height: "70%" }} />
            <Button
              onClick={addPage}
              className={`${classes.navBarButton} ${classes.navBarButtonBlue}`}
            >
              Add New Page
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

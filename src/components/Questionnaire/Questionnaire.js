import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../images/constructor.png";
import { questions } from "./questions";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { DynamicInput } from "../DynamicInput";

const useStyles = makeStyles(() => ({
  questionnaire: {
    padding: "0 135px",
    width: "calc(100% - 400px)",
    height: "100%",
  },
  questionnaireHeaderContainer: {
    marginTop: "70px",
  },
  questionNumber: {
    color: "#818181",
    fontSize: 14,
  },
  questionsContainer: {
    marginTop: "70px",
    paddingLeft: "200px",
  },
  questionnaireHeader: {
    fontWeight: 700,
    fontSize: 20,
    marginBottom: 10,
  },
  questionnaireHeaderText: {
    color: "#818181",
    fontSize: 16,
    marginBottom: 50,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 700,
    color: "#000",
    marginBottom: 20,
  },
  navBar: {
    position: "absolute",
    marginBottom: "70px",
    bottom: "0",
  },
  navBarButton: {
    textTransform: "none",
    fontSize: "12px",
    fontWeight: "400",
  },
  configButton: {
    fontWeight: "700",
    color: "#3785F4",
    fontSize: 18,
  },
  footerText: {
    color: "#818181",
    fontSize: 16,
    fontWeight: 400,
  },
  footerLink: {
    color: "#818181",
    textDecoration: "none",
  },
  logo: {
    cursor: "pointer",
  },
}));

export const Questionnaire = ({
  isOpenQuestionnaire,
  selectTemplateMode,
  setSelectTemplateMode,
  buildNewTemplate,
}) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [question, setQuestion] = useState(questions[questionNumber]);
  const [questionValues, setQuestionValues] = useState({});

  const classes = useStyles({ question });

  const isDisableButton = () =>
    question.value !== "minOwnership" && questionValues[question.value] === "";

  const isLastPage = () => questionNumber === questions.length - 1;

  useEffect(() => {
    setQuestion(questions[questionNumber]);
  }, [questionNumber]);

  return (
    <Grid container className={classes.questionnaire}>
      <Grid item xs={12} className={classes.questionnaireHeaderContainer}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={4}>
            <img alt="Logo" src={logo} className={classes.logo} />
          </Grid>
          {isOpenQuestionnaire && (
            <Grid item>
              <p className={classes.questionNumber}>{`${questionNumber + 1} / ${
                questions.length
              }`}</p>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.questionsContainer}>
        <Typography
          variant="h5"
          component="h5"
          className={classes.questionnaireHeader}
        >
          {isOpenQuestionnaire ? "Couple Questions" : "Hi there!"}
        </Typography>
        <p className={classes.questionnaireHeaderText}>
          {isOpenQuestionnaire
            ? "This will help us to customize your template"
            : "Now it’s just a matter of small"}
        </p>
        {isOpenQuestionnaire ? (
          <Grid item>
            <Typography
              variant="h5"
              component="h5"
              className={classes.questionText}
            >
              {question.questionText}
            </Typography>
            <DynamicInput
              question={question}
              questionValues={questionValues}
              setQuestionValues={setQuestionValues}
              buildNewTemplate={buildNewTemplate}
            />
          </Grid>
        ) : (
          <Grid item>
            <Typography
              variant="h5"
              component="h5"
              className={classes.questionText}
            >
              Select One of the Templates
            </Typography>
            <Button
              disabled={selectTemplateMode}
              onClick={() => setSelectTemplateMode(true)}
              className={`${classes.navBarButton} ${classes.configButton}`}
            >
              Select Template
            </Button>
          </Grid>
        )}
      </Grid>
      <Grid item xs={12} className={classes.navBar}>
        {isOpenQuestionnaire ? (
          <Grid container justify="flex-start">
            {questionNumber > 0 && (
              <>
                <Button
                  className={classes.navBarButton}
                  startIcon={<ArrowBackIcon color="primary" />}
                  onClick={() =>
                    setQuestionNumber((prevState) => prevState - 1)
                  }
                >
                  Previous Page
                </Button>
              </>
            )}
            <Button
              className={classes.navBarButton}
              onClick={() => buildNewTemplate()}
            >
              Skip questions
            </Button>
            {isLastPage() || (
              <Button
                className={classes.navBarButton}
                endIcon={<ArrowForwardIcon color="primary" />}
                onClick={() => setQuestionNumber((prevState) => prevState + 1)}
                disabled={isDisableButton()}
              >
                Next Page
              </Button>
            )}
          </Grid>
        ) : (
          <>
            <p className={classes.footerText}>
              Your Personal Template Constructor
            </p>
            <p className={classes.footerText}>
              <a
                className={classes.footerLink}
                href="https://github.com/ToxichQQQ/form-constructor"
              >
                Documentation
              </a>
            </p>
          </>
        )}
      </Grid>
    </Grid>
  );
};

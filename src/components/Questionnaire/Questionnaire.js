import React, { useEffect, useState } from "react";
import {
  Button,
  Collapse,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../images/dcrLogo.png";
import { questions } from "./questions";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { termsAndConditions } from "../untils/constants";
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  questionnaire: {
    padding: "0 135px",
    width: "calc(100% - 400px)",
    height:'100%'
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
    fontSize: 35,
    fontWeight: 700,
    color: "#000",
    marginBottom: 30,
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
  radioGroup: {
    flexDirection: "row",
  },
  radioButton: {
    marginRight: 40,
    color: "#818181",
    "& .MuiTypography-root": {
      fontSize: 12,
    },
  },
  questionnaireField: {
    "& .MuiInputBase-root": {
      fontFamily: props => props.question.value === "signature" && "'Homemade Apple', cursive",
    },
    "& input": {
      color: "#818181",
    },
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
  terms: {
    padding: "5px",
    border: "1px solid black",
  },
  termsButton: {
    fontWeight: 700,
    cursor: "pointer",
  },
  dcrLogo: {
    cursor: "pointer",
  },
}));

export const Questionnaire = ({
  isOpenQuestionnaire,
  selectTemplateMode,
  setSelectTemplateMode,
  buildNewTemplate,
  setQuestionValues,
  questionValues,
}) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [question, setQuestion] = useState(questions[questionNumber]);
  const [isShowTerms, setShowTerms] = useState(false);

  const classes = useStyles({ question });

  useEffect(() => {
    setQuestion(questions[questionNumber]);
  }, [questionNumber]);

  const handleInputChange = (name, value) => {
    if (name === "minOwnership") {
      const formattedValue = value.replace(/[\D]+/g, "");

      if (formattedValue.length > 2) {
        setQuestionValues({ ...questionValues, [name]: formattedValue.slice(0, -1) });
        return true;
      }
      setQuestionValues({ ...questionValues, [name]: formattedValue });
      return true;
    }

    setQuestionValues({ ...questionValues, [name]: value });
  };

  const isDisableButton = () => question.value !== "minOwnership" && questionValues[question.value] === "";

  const isLastPage = () => questionNumber === questions.length - 1;

  const questionField = type => {
    switch (type) {
      case "radio":
        return (
          <FormControl component="fieldset">
            <RadioGroup
              className={classes.radioGroup}
              value={questionValues[question.value]}
              onChange={e => handleInputChange(question.value, e.target.value)}
            >
              {question.variants.map(variant => (
                <FormControlLabel
                  key={variant.value}
                  className={classes.radioButton}
                  value={variant.value}
                  control={<Radio color="primary" />}
                  label={variant.label}
                />
              ))}
            </RadioGroup>
          </FormControl>
        );
      case "terms":
        return (
          <FormControl component="fieldset">
            <Collapse in={isShowTerms}>
              <div className={classes.terms}>{termsAndConditions}</div>
            </Collapse>
            <p className={classes.termsButton} onClick={() => setShowTerms(prevState => !prevState)}>
              {isShowTerms ? "Hide Terms and Conditions" : "Show Terms and Conditions"}
            </p>
            <RadioGroup
              className={classes.radioGroup}
              value={questionValues[question.value]}
              onChange={e => handleInputChange(question.value, e.target.value)}
            >
              {question.variants.map(variant => (
                <FormControlLabel
                  key={variant.value}
                  className={classes.radioButton}
                  value={variant.value}
                  control={<Radio color="primary" />}
                  label={variant.label}
                />
              ))}
            </RadioGroup>
          </FormControl>
        );
      case "select":
        return (
          <FormControl fullWidth>
            <Select
              value={questionValues[question.value]}
              onChange={e => handleInputChange(question.value, e.target.value)}
            >
              {question.variants.map(variant => (
                <MenuItem value={variant.value} key={variant.value}>
                  {variant.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      case "input":
        return (
          <TextField
            fullWidth
            value={questionValues[question.value]}
            className={classes.questionnaireField}
            onChange={e => handleInputChange(question.value, e.target.value)}
            helperText={question.helperText}
          />
        );
      case "button":
        return (
          <Button className={`${classes.navBarButton} ${classes.configButton}`} onClick={buildNewTemplate}>
            Build Template
          </Button>
        );
    }
  };

  return (
    <Grid container className={classes.questionnaire}>
      <Grid item xs={12} className={classes.questionnaireHeaderContainer}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={4}>
            <img alt="Logo" src={logo} className={classes.dcrLogo} />
          </Grid>
          {isOpenQuestionnaire && (
            <Grid item>
              <p className={classes.questionNumber}>{`${questionNumber + 1} / ${questions.length}`}</p>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.questionsContainer}>
        <Typography variant="h5" component="h5" className={classes.questionnaireHeader}>
          {isOpenQuestionnaire ? "Couple Questions" : "Hi there!"}
        </Typography>
        <p className={classes.questionnaireHeaderText}>
          {isOpenQuestionnaire ? "This will help us to customize your template" : "Now it’s just a matter of small"}
        </p>
        {isOpenQuestionnaire ? (
          <Grid item>
            <Typography variant="h5" component="h5" className={classes.questionText}>
              {question.questionText}
            </Typography>
            {questionField(question.type)}
          </Grid>
        ) : (
          <Grid item>
            <Typography variant="h5" component="h5" className={classes.questionText}>
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
                  onClick={() => setQuestionNumber(prevState => prevState - 1)}
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
                onClick={() => setQuestionNumber(prevState => prevState + 1)}
                disabled={isDisableButton()}
              >
                Next Page
              </Button>
            )}
          </Grid>
        ) : (
          <p className={classes.footerText}>Your Personal Template Constructor</p>
        )}
      </Grid>
    </Grid>
  );
};

import React, {useState} from 'react'
import {Questionnaire} from "../components/Questionnaire/Questionnaire";
import {TemplateSelector} from "../components/TemplateSelector/TemplateSelector";
import {Grid} from "@material-ui/core";
import {useNavigate} from "react-router-dom";


export function MainPage({setConfig}){
    const [ocaType, setOcaType] = useState("Standard");
    const [showSideMenu,setShowSideMenu] = useState(false)
    const [customTemplates, setCustomTemplates] = useState([]);
    const [activeTemplate, setActiveTemplate] = useState(customTemplates[0] || "");
    const [questionValues, setQuestionValues] = useState({
        isSupSpanishLang: "",
        isCapAmountReq: "",
        primaryIndustry: "",
        isDownloadDL: "",
        minOwnership: "",
        isReceiveApp: "",
        enableSubLenders: "",
        isPromptReqFin: "",
        captureType: "",
        signature: "",
        isAgreeTerms: "",
        industryGroupType: "generic",
    });
    const [isOpenQuestionnaire, setOpenQuestionnaire] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const navigation = useNavigate();

    const buildNewTemplate = () => {
        navigation('/')
    };

    const selectNewTemplate = templateConfig => {
        setConfig(templateConfig);
        setOpenQuestionnaire(true)
        setShowSideMenu(false)
    };

    const editTemplate = (template) => {
        setShowSideMenu(false);
        setConfig(template.jsonDefinition);
    };

    return <Grid container>
        <Questionnaire
            questionValues={questionValues}
            setQuestionValues={setQuestionValues}
            buildNewTemplate={buildNewTemplate}
            isOpenQuestionnaire={isOpenQuestionnaire}
            selectTemplateMode={showSideMenu}
            setSelectTemplateMode={setShowSideMenu}
        />
        {showSideMenu &&
            <TemplateSelector
                setOcaType={setOcaType}
                selectNewTemplate={selectNewTemplate}
                customTemplates={customTemplates}
                editTemplate={editTemplate}
                activeTemplate={activeTemplate}
                setActiveTemplate={
                    () => console.log('here')
                }
                accountName={'Ivan'}
                selectedTemplate={selectedTemplate}
                setSelectedTemplate={setSelectedTemplate}
            />
        }
    </Grid>
}
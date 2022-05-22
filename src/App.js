import './App.css';
import {Constructor} from "./Constructor";
import {Route, Routes} from "react-router-dom";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {Context} from './context/context'
import {Area} from "./components/Area/Area";
import {MainPage} from "./pages/MainPage";
import React,{useState} from "react";

function App() {
    const [config, setConfig] = useState([{}]);

    return <DndProvider backend={HTML5Backend}>
        <Context.Provider>
            <Routes>
                <Route path='/' element={<Constructor config={config} setConfig={setConfig}/>}/>
                <Route path='/main' element={<MainPage setConfig={setConfig}/>}/>
            </Routes>
        </Context.Provider>
    </DndProvider>
}

export default App;

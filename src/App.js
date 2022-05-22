import { Constructor } from "./Constructor";
import { Route, Routes } from "react-router-dom";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { MainPage } from "./pages/MainPage";
import React, { useState } from "react";

function App() {
  const [config, setConfig] = useState([{}]);

  return (
    <DndProvider backend={HTML5Backend}>
      <Routes>
        <Route
          path="/constructor"
          element={<Constructor config={config} setConfig={setConfig} />}
        />
        <Route path="/" element={<MainPage setConfig={setConfig} />} />
      </Routes>
    </DndProvider>
  );
}

export default App;

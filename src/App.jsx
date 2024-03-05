import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ExplorePage from "./components/ExplorePage";
import ProjectPage from "./components/ProjectPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/ai-insighter/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/projects" element={<ProjectPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

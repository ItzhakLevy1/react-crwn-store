import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
  <div> 
    <Routes>
    <Route path='/react-crwn-store' element={<HomePage/>} /> 
    {/* Exactly (true or false) when the path is "/", "component={HomePage}" is the component we want to render */}
    <Route path="/hats" component={HatsPage} />
    </Routes>
    </div>
  );
}

export default App;

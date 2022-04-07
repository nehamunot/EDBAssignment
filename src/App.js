import React from "react";
import PetsApplication from "./PetsApplication";
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom';

function App (props) {
  // To add New view and paint esily, user can write new view and add its path here in <Rountes> tag
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PetsApplication/>} />
        <Route path="/petsApp" element={<PetsApplication/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
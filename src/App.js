// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import path from './utils/path';

import FuturePage from './layouts/Future';
import CurriculumPage from './layouts/Curriculum';
import StructurePage from './layouts/Structure';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
    <Routes>
      <Route path="/" element={<CurriculumPage />} />
      <Route path="/structure" element={<StructurePage />} />
      <Route path="/Future" element={<FuturePage />} />
      {/* <Route exact path={path.future} component={FuturePage} /> */}
    </Routes>
    </Router>
  );
}

export default App;

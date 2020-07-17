import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"; // route diff urls to diff react components easier
import "./styles.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import InputId from "./components/InputId";
import Test from "./components/Test";
import Results from "./components/Results";

// router maps specific url paths to specific components that will load on the page
function App() {
  return (
    <div className="page-container container">
    <div className="content-wrap">

    <Router>
        <Header />
        <br/>
        <Route path="/" exact component={InputId} />
        <Route path="/test" component={Test} />
        <Route path="/results" component={Results} />
        <br />
    </Router>
    </div>

    <Footer />
    </div>
  );
}

export default App;
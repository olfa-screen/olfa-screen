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
    <Router>
      <div className="container">
        <Header />
        <br/>
        <Route path="/" exact component={InputId} />
        <Route path="/test" component={Test} />
        <Route path="/results" component={Results} />
        <br/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
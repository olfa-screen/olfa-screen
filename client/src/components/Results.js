import React, { Fragment } from 'react';

const Results = () => {
  return (
    <Fragment>
      <h1> You got _/3 scents correct.</h1>
      <br/>
      <h5>
        Interpret results of screening test is at your own risk as many carriers of COVID-19 are asymptomatic or may not observe a change in smell. Not been approved by the FDA or CDC. 
      </h5>
    </Fragment>
  )
}

export default Results;

// This could be a modal
// Have a warning message render based on score
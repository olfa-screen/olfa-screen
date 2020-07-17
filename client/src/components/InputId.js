import React, { Fragment, useState } from "react";
import { Link } from 'react-router-dom';

const InputId = () => {
  const [screenId, setScreenId] = useState("");
  const [testKey, setTestKey] = useState("")

  const onSubmitForm = () => {
    fetch(`/test/${screenId}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setTestKey(data);
    })
    .then(console.log(testKey))
    .catch(err => console.log('ERROR while getting test key: ', err))
  };

  // const onSubmitForm = async e => {
  //   e.preventDefault()
  //   try {
  //     const body = { screenId }
  //     const response = await fetch("http://localhost:5000/test/:id", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(body)
  //     });
  //     // refreshes and shows changes when response is sent
  //     window.location = "/"
  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // };

  return (
    <Fragment>
      <h2 className="text-center mt-5"> Enter your 4-letter code below to begin your smell test</h2>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input 
          type="text" 
          className="form-control" 
          value={screenId} 
          onChange={e => setScreenId(e.target.value)}
        />
        <Link to="/test">
          <button className="btn btn-success">Enter</button>
        </Link>
      </form>
      <h4 className="text-center mt-5">New Loss of Smell is a common, early symptom of COVID-19</h4>
    </Fragment>
  );
}

export default InputId;
import React, { Fragment, useState } from "react";
import { Link } from 'react-router-dom';

const Test = () => {
  const [screenId, setScreenId] = useState("");

  const onSubmitForm = () => {

  };

  return (
    <Fragment>
      <h3 className="text-center"> Select the scent of each sticker.</h3>
      <form onSubmit={onSubmitForm}>
        <h5 className="mt-4">Sticker 1</h5>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="stickerA" id="stickerA1" value="option1" />
          <label className="form-check-label">
            Cherry
        </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="stickerA" id="stickerA2" value="option2" />
          <label className="form-check-label">
            Chocolate
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="stickerA" id="stickerA3" value="option3" />
          <label className="form-check-label">
            Coconut
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="stickerA" id="stickerA4" value="option4" />
          <label className="form-check-label">
            Coffee
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="stickerA" id="stickerA5" value="option5" />
          <label className="form-check-label">
            Lemon
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="stickerA" id="stickerA6" value="option6" />
          <label className="form-check-label">
            Mint
          </label>
        </div>

        <h5 className="mt-4">Sticker 2</h5>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="stickerB" id="stickerB1" value="option1" />
          <label className="form-check-label">
            Cherry
        </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="stickerB" id="stickerB2" value="option2" />
          <label className="form-check-label">
            Chocolate
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="stickerB" id="stickerB3" value="option3" />
          <label className="form-check-label">
            Coconut
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="stickerB" id="stickerB4" value="option4" />
          <label className="form-check-label">
            Coffee
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="stickerB" id="stickerB5" value="option5" />
          <label className="form-check-label">
            Lemon
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="stickerB" id="stickerB6" value="option6" />
          <label className="form-check-label">
            Mint
          </label>
        </div>
        <br/>

        <Link to="/results">
          <button className="btn btn-success">Submit</button>
        </Link>
      </form>
    </Fragment>
  );
}

export default Test;
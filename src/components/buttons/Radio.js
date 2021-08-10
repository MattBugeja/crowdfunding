import React from "react";
import { useState } from "react";
import "./Radio.module.css";

function Radio(props) {
  const [radioButton, setRadioButton] = useState(false);

  function radioButtonHandler() {
    radioButton ? setRadioButton(false) : setRadioButton(true);
  }

  return (
    <form>
      <label>
        <input
          type="radio"
          checked={radioButton}
          onClick={radioButtonHandler}
        />
      </label>
    </form>
  );
}

export default Radio;

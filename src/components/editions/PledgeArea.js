import Button from "../buttons/Button";
import classes from "./PledgeArea.module.css";
import { useState } from "react";

function PledgeArea(props) {
  const [inputValue, setInputValue] = useState("");

  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };

  const resetInputFiled = () => {
    setInputValue("");
  };

  return (
    
    <div className={classes.enterPledge}>
      Enter your pledge
      <div className={classes.row}>
        <form className ={classes.form} onSubmit={props.submit}>
          <input
            className={classes.pledgeAmount}
            value={inputValue}
            onChange={handleUserInput}
            onInput={(e) => props.setTempPledgeValue(e.target.value)}
            type="number"
          ></input>

          <Button
            type={props.type}
            smallButton={true}
            className={classes.btn}
            text="Continue"
            click={resetInputFiled}
          />
        </form>
      </div>
    </div>
  );
}

export default PledgeArea;

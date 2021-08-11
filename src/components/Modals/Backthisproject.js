import React from "react";
import { useState } from "react";
import classes from "./Backthisproject.module.css";
import Editions from "../editions/editions";
import { ReactComponent as CloseIcon } from "./assets/icon-close-modal.svg";
function BackThisProject(props) {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);

  // <div>
  //   <p>{`The current count is ${count}`}</p>
  //   <Child increaseCount={increaseCount} />
  // </div>

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        Back this project{" "}
        <CloseIcon className={classes.close} onClick={props.close} />
      </div>

      <div className={classes.intro}>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </div>

      <div className={classes.rows}>
        <div>
          <Editions
            title={"Pledge with no reward"}
            info={
              "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
            }
            modalMode={true}
            increaseCount={increaseCount}
          />
        </div>
        <div>
          <Editions
            title={"Bamboo Stand"}
            pledge={"Pledge $25 or more"}
            info={
              "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
            }
            startcount={110}
            modalMode={true}
            text={"left"}
          />
        </div>
        <div>
          <Editions
            title={"Black Edition Stand"}
            pledge={"Pledge $75 or more"}
            info={
              "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
            }
            startcount={64}
            modalMode={true}
            text={"left"}
          />
        </div>
        <div>
          <Editions
            title={"Mahogany Special Edition"}
            pledge={"Pledge $200 or more"}
            info={
              "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
            }
            startcount={0}
            modalMode={true}
            text={"left"}
          />
        </div>
      </div>
    </div>
  );
}

export default BackThisProject;

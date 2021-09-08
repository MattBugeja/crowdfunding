import classes from "./About.module.css";
import React from "react";
import Editions from "../editions/editions";



function About(props) {

 
  return (
    <div className={classes.container}>
      <div className={classes.title}>About this project</div>
      <div className={classes.infoText}>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand. <br /> <br /> Featuring artisan craftsmanship, the
        simplicity of design creates extra desk space below your computer to
        allow notepads, pens, and USB sticks to be stored under the stand.
      </div>

      <div className={classes.column}>
        <div>
          <Editions
            title={"Bamboo Stand"}
            info={
              "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
            }
            editionMinAmount = {25}
            startcount={props.bambooCount}
            modalMode={false}
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
            editionMinAmount = {75}
            startcount={props.blackCount}
            modalMode={false}
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
            editionMinAmount = {200}
            startcount={props.seCount}
            modalMode={false}
            text={"left"}
          />
        </div>
      </div>
    </div>
  );
}

export default About;

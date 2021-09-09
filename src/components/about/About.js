import classes from "./About.module.css";
import React from "react";
import BambooEdition from "../editions/BambooEdition";
import BlackEdition from "../editions/BlackEdition";
import SeEdition from "../editions/seEdition";



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
        <BambooEdition setEditionID = {props.setEditionID} startcount = {props.bambooCount} modalMode = {false}/>
        <BlackEdition setEditionID = {props.setEditionID} startcount = {props.bambooCount} modalMode = {false}/>
        <SeEdition setEditionID = {props.setEditionID} startcount = {props.bambooCount} modalMode = {false}/>                
      </div>
    </div>
  );
}

export default About;

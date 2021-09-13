import classes from "./About.module.css";
import React  from "react";
import EditionsList from "../editions/EditionsList";

function About(props) {


  return (
    <div className={classes.container}>
      <div className={classes.title}>About this project</div>
      <div className={classes.text}>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand. <br /> <br /> Featuring artisan craftsmanship, the
        simplicity of design creates extra desk space below your computer to
        allow notepads, pens, and USB sticks to be stored under the stand.
      </div>

      <EditionsList setPledgeValue = {props.setPledgeValue} pledgeSubmittedTracker = {props.pledgeSubmittedTracker}/>

    </div>
  );
}

export default About;

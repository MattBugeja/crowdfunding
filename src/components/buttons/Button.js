import React from "react";
import { useState, useRef, useEffect } from "react";
import classes from "./Button.module.css";

function Button(props) {
  const [smallButton, setSmallButton] = useState(props.smallButton);

  // const [hoverRef, isHovered] = useHover();

  // function useHover() {
  //   const [value, setValue] = useState(false);
  //   const ref = useRef(null);
  //   const handleMouseOver = () => setValue(true);
  //   const handleMouseOut = () => setValue(false);

  //   useEffect(
  //     () => {
  //       const node = ref.current;
  //       if (node) {
  //         node.addEventListener("mouseover", handleMouseOver);
  //         node.addEventListener("mouseout", handleMouseOut);
  //         return () => {
  //           node.removeEventListener("mouseover", handleMouseOver);
  //           node.removeEventListener("mouseout", handleMouseOut);
  //         };
  //       }
  //     },
  //     [ref.current] // Recall only if ref changes
  //   );
  //   return [ref, value];
  // }

  return (
    <button
      className={
        smallButton ? `${classes.btn} ${classes.btnSmall} ` : `${classes.btn}`
      }
      onClick={props.click}
    >
      {props.text}
      {/* {useHover} */}
    </button>
  );
}

export default Button;

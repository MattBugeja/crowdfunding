import React from "react";
import { useState, createContext, useContext } from "react";

const BambooContext = createContext();

const BambooProvider =  (children)  => {
  const [bambooCount, setBambooCount] = useState(10);
  const [bambooMinAmt] = useState(25);
  const [pledgeValue, setPledgeValue] = useState(0);
  const [title] = useState("Bamboo Stand");
  const [id] = useState("bamboo");
  const [info] = useState(
    "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
  );

const value = {


bambooCount, setBambooCount, pledgeValue, setPledgeValue, title, id, info


};



  return (
    <BambooContext.provider
      value={ value}>
    {children}</BambooContext.provider>
  );
};

// export useBambooContext = () => useContext(BambooContext)
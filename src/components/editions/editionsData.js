// import React from "react";
// import { useState } from "react";

const editionsData = ((props) => {

    // const [bambooCount, setBambooCount] = useState(10);
    // const [blackCount, setBlackCount] = useState(10);
    // const [seCount, setSeCount] = useState(10);


    // const [editionID, setEditionID] = useState("");


    // function click() {
    //     switch (editionID) {
    //       case "bamboo":
    //         setBambooCount(bambooCount - 1);
    //         break;
    //       case "black":
    //         setBlackCount(blackCount - 1);
    //         break;
    //       case "se":
    //         setSeCount(seCount - 1);
    //     }
    //   }

    //   const setTempPledgeValue = props.setTempPledgeValue
    //   const thanksWithReward = props.thanksWithReward
    //   const thanksNoReward = props.thanksNoReward
    //   const notEnoughPledged = props.notEnoughPledged



    const data ={


        // "noReward":{

        //     "title":  "Pledge with no reward",
        //     "id" : "noReward",
        //     // "setEditionID" : setEditionID,
        //     "info": "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
        //     "editionMinAmount" : 1,
        //     // "setTempPledgeValue": setTempPledgeValue,
        //     "modalMode": true,
          


        //       },

              "bamboo":{

                "title":  "Bamboo Edition Stand",
                "id" : "bamboo",
                // "setEditionID" : setEditionID,
                "info": "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
                "editionMinAmount" : 25,
                // "setTempPledgeValue": setTempPledgeValue,
                "modalMode": true,
                
        }, 
        "black":{

            "title":  "Black Edition Stand",
            "id" : "black",
            // "setEditionID" : setEditionID,
            "info": "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
            "editionMinAmount" : 75,
            // "setTempPledgeValue": setTempPledgeValue,
            "modalMode": true,
          
    }, 
    "specialEdition":{

        "title":  "Mahogany Special Edition",
        "id" : "se",
        // "setEditionID" : setEditionID,
        "info": "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
        "editionMinAmount" : 200,
        // "setTempPledgeValue": setTempPledgeValue,
        "modalMode": true,
}, 




    }

return {data}





})()

export default editionsData
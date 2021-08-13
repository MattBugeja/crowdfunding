import { useEffect } from "react";

const Item = () => {
  useEffect(() => {
    console.log("Mount item");
    return () => console.log("Unmount item");
  }, []);
  return <div />;
};

export default Item;

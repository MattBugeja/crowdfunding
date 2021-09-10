import React from "react";
import { createContext } from "react";

const BambooContext = createContext([10, () => {}])

export default BambooContext
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import React, { useContext } from "react";
import { GlobalInfoVAr } from "./ContextAPI";

const TODOList = () => {
const data = useContext(GlobalInfoVAr)
console.log("THIS is data",data)

  return <div>TODOList</div>;
};

export default TODOList;

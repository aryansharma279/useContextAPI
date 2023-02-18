import React, { useContext } from "react";
import { AppDataContext } from "../../../../App";
import { SomeExtra } from "../../../../App";
import "./ComC.css";

const ComC = () => {
  const AppData = useContext(AppDataContext);
  const ExtraData = useContext(SomeExtra);
  // console.log(AppDataContext);
  return (
    <div className="backgroundc">
      <h1>inside C</h1>
      <h2>{AppData.data}</h2>
      <h2>{AppData.newData.name}</h2>
      <h2>{AppData.newData.lastName}</h2>
      <h2>{ExtraData.little}</h2>
    </div>
  );
};

export default ComC;

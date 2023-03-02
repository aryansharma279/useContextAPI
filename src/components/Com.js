import React,{memo} from "react";

const Com = ({ data, addData }) => {
  console.log("inside child");
  return (
    <>
      {data.map((item, index) => {
       return (
        <h1 key={index}>{item}</h1>
        )
      })}

      <button onClick={() => addData()}>Add</button>
    </>
  );
};

export default memo(Com);

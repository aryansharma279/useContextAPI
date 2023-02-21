import React, { useContext,useEffect,useState, useRef } from "react";
import { AppDataContext } from "../../../../App";
import { SomeExtra } from "../../../../App";
import "./ComC.css";

const ComC = () => {
  const AppData = useContext(AppDataContext);
  const ExtraData = useContext(SomeExtra);
  const [data,setData] = useState("")
  // const [count,setCount]=useState(0);
  const inputRef = useRef();
  const prevInput = useRef();
  // console.log(AppDataContext);
  useEffect(()=>{
    // inputRef.current = inputRef.current +1;
    prevInput.current = data;
    console.log("rendering")
  },[data])

  const addData = (e) => {
      console.log(e.target.value);
      setData(e.target.value);

  }

  const changeSty = () => {
    inputRef.current.focus();
    inputRef.current.style.border = "2px solid red"
  }
  return (
    <div className="backgroundc">
      <h1>inside C</h1>
      <h2>{AppData.data}</h2>
      <h2>{AppData.newData.name}</h2> 
      <h2>{AppData.newData.lastName}</h2>
      <h2>{ExtraData.little}</h2>
      <input ref={inputRef} value={data} onChange={addData} />
      {/* <h3>Rendered {inputRef.current} times</h3> */}
      <h3>Prev State is  {prevInput.current} times</h3>
      <button onClick={changeSty}>submit</button>
    </div>
  );
};

export default ComC;

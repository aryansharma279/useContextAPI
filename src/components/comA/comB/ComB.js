import React, { useReducer } from "react";
import ComC from "./comC/ComC";
import "./ComB.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1
    
    case "DEC":
      return state - 1
      
    case "DIV":
      return state / 2
     
    case "MUL":
      return state * 2
   

    default:
      break;
  }

  return state;
};

const ComB = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="backgroundb">
      <h1>inside B</h1>
      <h2>{state}</h2>
      <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "DIV" })}>Divide</button>
      <button onClick={() => dispatch({ type: "MUL" })}>Multiply</button>


    </div>
  );
};

export default ComB;

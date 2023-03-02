import "./App.css";
import React, { useState, useCallback } from "react";
import Com from "./components/Com";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const addData = useCallback(() => {
    setData([...data, "newdata"]);
  },[data]);

  return (
    <div className="App">
      <h1>inside App</h1>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <Com data={data} addData={addData} />
      </div>
    </div>
  );
}

export default App;

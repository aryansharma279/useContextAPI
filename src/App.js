import "./App.css";
import React from "react";
import Com from "./components/Com";
import Fetch from "./components/Fetch";
//declared outside the function component as individual

function App() {
  const data = Fetch("https://hub.dummyapis.com/employee?noofRecords=2&idStarts=1001");
  console.log(data);
  return (
    
        <div className="App">
          <h1>inside App</h1>
          <Com/>
        </div>
  );
}

export default App;


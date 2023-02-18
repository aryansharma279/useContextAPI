import "./App.css";
import { createContext, useState } from "react";
import ComA from "./components/comA/ComA";

//declared outside the function component as individual
const AppDataContext = createContext();
const SomeExtra = createContext();

function App() {
  const [data, setData] = useState("aryan");
  const [newData, setNewData] = useState({ name: "Inu", lastName: "sharma" });
  const [extra, setExtra] = useState({ little: "something Good" });
  return (
    <AppDataContext.Provider value={{ data, newData }}>
      <SomeExtra.Provider value={extra}>
        <div className="App">
          <h1>inside App </h1>
          <ComA />
        </div>
      </SomeExtra.Provider>
    </AppDataContext.Provider>
  );
}

export default App;
export { AppDataContext, SomeExtra };

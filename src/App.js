import './App.css';
import { createContext , useState, Provider } from 'react';
import ComA from './components/comA/ComA';

//declared outside the function component as individual
const AppDataContext = createContext();

function App() {
  const [data,setData] = useState("aryan");
  return (
    <AppDataContext.Provider value={data}>
    <div className="App">
    
      <h1>inside App </h1>
      <ComA/>
   
    </div>
    </AppDataContext.Provider>
  );
}

export default App;
export {AppDataContext}

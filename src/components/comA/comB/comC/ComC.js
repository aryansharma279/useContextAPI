import React,{ useContext} from 'react'
import { AppDataContext } from '../../../../App';
import "./ComC.css";

const ComC = () => {
  const AppData = useContext(AppDataContext);
  console.log(AppDataContext);
  return (
    <div className='backgroundc'>
      <h1>inside C</h1>
      <h2>{AppData}</h2>
      
    </div>
  )
}

export default ComC

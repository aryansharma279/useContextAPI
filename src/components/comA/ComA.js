import React from 'react'
import ComB from './comB/ComB'
import './ComA.css';    

const ComA = () => {
  return (
    <div className='backgrounda'>
      <h1>inside A</h1>
      <ComB/>
    </div>
  )
}

export default ComA

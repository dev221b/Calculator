import './Input.css'
import React from 'react'

const Input = ({text, result}) => {
  return (
    <div className="inp">
        <div className="text">
            <h3>{text}</h3>
        </div>
        <div className="result">
            <h2>{result}</h2>
        </div>
    </div>
  )
};

export default Input
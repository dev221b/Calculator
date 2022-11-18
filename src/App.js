import './App.css';
import Button from './components/Button'
import Input from './components/Input';
import React, { useState } from 'react';
import * as math from 'mathjs';
const App = () => {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  
  const addToText = (val) => {
    setText((text) => [...text, val + ""]);
    
  };

  const calculateResult = () => {
    const input = text.join('');
    setResult(math.evaluate(input));
  };

  const deleteLast = () => {
    const text1 = text.slice(0,-1);
    setText(text1)
  }
  
  const resetInput = () => {
    setText("");
    setResult("");
  };

  return (
    <div className="App">
      <div className="calc">

        <Input text={text} result={result}/> 
        
        <div className="row">
        <Button symbol='7' handleClick={addToText}/>
        <Button symbol='8' handleClick={addToText}/>
        <Button symbol='9' handleClick={addToText}/>
        <Button symbol='/' color='rgb(240,150,60)' handleClick={addToText}/>
        </div>

        <div className="row">
        <Button symbol='4' handleClick={addToText}/>
        <Button symbol='5' handleClick={addToText}/>
        <Button symbol='6' handleClick={addToText}/>
        <Button symbol='*' color='rgb(240,150,60)' handleClick={addToText}/>
        </div>

        <div className="row">
        <Button symbol='1' handleClick={addToText}/>
        <Button symbol='2' handleClick={addToText}/>
        <Button symbol='3' handleClick={addToText}/>
        <Button symbol='+' color='rgb(240,150,60)' handleClick={addToText}/>
        </div>

        <div className="row">
        <Button symbol='0' handleClick={addToText}/>
        <Button symbol='.' handleClick={addToText}/>
        <Button symbol='=' handleClick={calculateResult}/>
        <Button symbol='-' color='rgb(240,150,60)' handleClick={addToText}/>
        </div>
        <div className="row">
        <Button symbol='Del' color='rgb(105,105,105)' handleClick={deleteLast}/>
        <Button symbol='Clear' color='rgb(105,105,105)' handleClick={resetInput}/>
        </div>
        
      </div>
    </div>
  );
}

export default App;

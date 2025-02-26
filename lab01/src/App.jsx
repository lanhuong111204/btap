import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 var [a,setA] = useState(0);
 var [b,setB] = useState(0);
 var [result,setResult] = useState(0);
 var [operator, setOperator]=useState(0);
 
 function handleChangeA(e){
  setA(e.target.value);
 }
 function handleChangeB(e){
  setB(e.target.value);
 }
 function handleClick(){
  if (operator=='+')
    setResult(parseInt(a) + parseInt(b))
  else if (operator=='-')
    setResult(parseInt(a) - parseInt(b))
  else if (operator=='*')
    setResult(parseInt(a) * parseInt(b))
  else if (operator=='/')
    setResult(parseInt(a) / parseInt(b))
}

  function handlRadioChange(e){
    setOperator(e.target.value);
  }


  return (
    <>
    <input onChange={handleChangeA} placeholder='input a' type="text" />
    <br/>
    <input onChange={handleChangeB} placeholder='input b' type="text" />
    <br/>
    <input onChange={handlRadioChange} type="radio" name =" group" value='+'/> <span>+</span>
    <input onChange={handlRadioChange} type="radio" name =" group"value='-'/> <span>-</span>
    <input onChange={handlRadioChange} type="radio" name =" group" value='*'/> <span>*</span>
    <input onChange={handlRadioChange} type="radio" name =" group" value='/'/> <span>/</span>
    <button onClick={handleClick}>Click</button>
    <br/>
    <span>Result is:{result}</span>
    
    </>
  )
}

export default App

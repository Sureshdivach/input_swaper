import { useState } from 'react';
import './App.scss';

function App() {
  const [inputValue1,setINputValue1]=useState("")
  const [inputValue2,setINputValue2]=useState("")
 
 const _handelChange=(field)=>{ 
 if((field==="submit1")&& (!inputValue1=="")){
   setINputValue2(inputValue1)
   setINputValue1("");
   
}  
 else if((field==="submit2") && (!inputValue2=="")){  
  setINputValue1(inputValue2)
  setINputValue2("")     
 }
 else{
  alert("Please enter fields")
 }
}
  console.log(inputValue1)
  console.log(inputValue2)
  return (
    <div className="App ">
     
      <h1>Input Swapper</h1> <hr className='w-100 m-auto'/>
      <div className='input_container '>
    <div className=''>
      <label  className='fw-bold'> Input 1</label><br/>
      <input type='text'    value={inputValue1}  onChange={(e)=>{setINputValue1(e.target.value)}}/> <br/>
      <button   onClick={() => _handelChange("submit1")}  > Move 2</button>
    </div>
    <div>
    <label className='fw-bold'> Input 2</label><br/>
      <input type='text' value={inputValue2} onChange={(e)=>{setINputValue2(e.target.value)}}/> <br/>
      <button  onClick={() => _handelChange("submit2")}> Move 1</button>
    </div>
    </div>
    </div>
  );
}

export default App;

import { useState } from 'react'

import './App.css'

function App() {
const [name ,setName] =useState({user:"sarthak",age:21})

const changeName =()=>{
  const newNum ={...name} //createing same but diff obj of the name state
  console.log(newNum);
  newNum.user="samarth"
  newNum.age=22
  setName(newNum)
  console.log(newNum);
  
}
  
  return (
    <>
     
      <h1>{name.user} ,{name.age}</h1>
      

      <button onClick={changeName}>Click</button>
    
    </>
  )
}

export default App

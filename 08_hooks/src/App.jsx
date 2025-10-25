import { useState } from "react"


function App() {
 
 //a is read only and  seta is the write only  
// const [a, seta] = useState(0)
// const changeNum =()=>{
//   seta()
// }

//creating counter

const [count, setcount] = useState(0)

let increment =()=>{
  setcount(count +1)
}
let deccrement =()=>{
   setcount(count -1)}

let jump =()=>{
  setcount(count+6)
}
  return (
    <>
       {/* <div>
        <h1>Change the number{a}</h1>
        <button onClick={changeNum}>Click </button>
       </div> */}

        <div id="box">
          <h1>Counter: {count}</h1>
          <button onClick={increment} >Increase</button>
          <button onClick={deccrement} >Decrease</button>
          <button onClick={jump} >Jump By 6</button>
        </div>

    </>
  )
}

export default App

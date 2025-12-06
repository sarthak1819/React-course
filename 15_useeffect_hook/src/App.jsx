
import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [a, seta] = useState(0)
  const [b, setb] = useState(0)

  useEffect(()=>{
    aChanging()
  }, [a])
  
  const aChanging =()=>{
    console.log("A is changing");
    
  }

   const bChanging =()=>{
    console.log("B is changing");
    
  }

  return (
    <>
    {/* useeffect is used for side effects ,when task is running form side stack */}
      <h1>useeffect example</h1>
      <br />

      <h1>valuse of a is {a}</h1>
      <h1>valuse of b is {b}</h1>
      <button onClick={()=>{
        seta(a+1)
      }}>For A</button>

      <button onClick={()=>{
        setb(b-1)
      }}>
        For B
      </button>
    </>
  )
}

export default App

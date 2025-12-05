import {useState} from 'react'

import './App.css'

function App() {
const [title, settitle] = useState("")
const [email, setemail] = useState("")

 const submitter =(e)=>{
  e.preventDefault()
  console.log(e.target.value);
   console.log("submitted" , title);
   settitle("");
   setemail("");
 }

  return (
    <>
      <form onSubmit={(e)=>{
        submitter(e)
      }}>
        <input 
        type="text"
         placeholder='Enter the name'
         value={title}
         onChange={(e) => settitle(e.target.value)}
         />
        <input type="text"
         placeholder='Enter the email' 
         value={email}
         onChange={(e)=>setemail(e.target.value)}
         />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App

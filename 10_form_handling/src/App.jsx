
import './App.css'

function App() {

const submitHandler =(e)=>{
  e.preventDefault();
  console.log("submitted");
  
}


  return (
    <>
     <form onSubmit={(e)=>{
      submitHandler(e)
     }} >
      <input type="text" placeholder='Enter your Name' />
      <input type="text" placeholder='Enter your email' />
      <button>Submit</button>
      </form> 
    </>
  )
}

export default App

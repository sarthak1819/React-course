
import './App.css'

function App() {
  
  // function btnClicked(){
  //   //alert("button clicked")
  //   console.log("btn click ");
    
  // }

  // function mouseEntered (){
  //   console.log("mouse entered");
  // }

  function changeValue(valueeeee){
    console.log("input changed");
    console.log(valueeeee);
  }
  return (
    <>
      <div>
        {/* <button id='btn' onClick={btnClicked}>Click Here</button>
         <button id='btn' onMouseEnter={mouseEntered}>Click Here</button> */}
        <input 
          onChange={(elem)=>{
          changeValue(elem.target.value)
          
        }} type="text " placeholder='Enter your Name' />
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {


 const [datas, setdatas] = useState([])

   {/* 1st method of api calling using fetch method */}
  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const data = await response.json();
  //   console.log(data);
    
  // }


    {/* 2nd method of api calling using axios library */}

    // const getData = async()=>{
    //   const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    //   const data = response.data;
    //   console.log(data);
      
    // }

     
    // {calling api in div using hook}
    const getData = async ()=>{
     const response= await axios.get('https://jsonplaceholder.typicode.com/users')
     const data = response.data
      console.log(data);
      setdatas(data)
    }

    
  return (
    <>
     <h1>API Calling</h1>
    
    <button onClick={getData}>Click</button>
    <div>
      {datas.map((elem,idx)=>{
        return <h1>{idx} {elem.username}</h1>
      })}
    </div>
    </>
  )
}

export default App

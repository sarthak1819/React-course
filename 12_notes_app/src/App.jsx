import { useState } from 'react'
import './App.css'

function App() {

  const [title, settitle] = useState("")
  const [details, setdetails] = useState("")
  const [task, settask] = useState([])
  
  //adding the form handler in this function
  const onSubmitter =(e)=>{
    e.preventDefault();
   
    // Here we add the  task
    const newTask =[...task]
    newTask.push({title,details})
    settask(newTask);
  
    settitle("");
    setdetails("");
    
  }

  const deletNote =(idx)=>{
    console.log("delet clicked button", idx);
    const newTask =[...task]
    newTask.splice(idx,1)
    console.log(newTask);
    settask(newTask);
    
    
  }

  return (
    < >
    <div className='h-screen   bg-black text-white '>
      <h1 className='text-3xl font-bold mb-3 text-center p-5'>Notes App</h1>
      <div className='text-white flex flex-col lg:flex-row gap-20 '>
      <form className=' p-5 h-90 flex flex-col gap-5 lg:w-1/2 item-start'
       onSubmit={(e)=>{
        onSubmitter(e)
       }}
      >
        <input 
        type="text"
        placeholder='Enter Notes Title'
        value={title }
        onChange={(e)=>settitle(e.target.value)}
         className='px-4 w-full outline-none border-2 rounded h-15' />
      <textarea 
      name="" id=""
      type="text"
       placeholder="Enter your notes here"
       value={details}
       onChange={(e)=>setdetails(e.target.value)}
        className='px-4 w-full h-70 outline-none border-2 rounded flex-row'
       ></textarea>
      <button type='submit' className='bg-white rounded active:scale-95 cursor-pointer w-full text-black px-5 py-1 font-bold'>Add Note</button>
      </form>

        <div className='  lg:w-1/2 p-4 '>
          <h1 className='text-xl font-bold mb-5'>Recent Notes</h1>
          <div className='flex flex-wrap gap-5 items-start max-h-[70vh] overflow-auto'>
            {task.map((elem,idx)=>{
              return<div key={idx} className='bg-white h-60 w-[180px] rounded-2xl pt-9 pb-5 px-3 flex flex-col items-start relative  '>
                <h1 className='text-black font-bold  leading-tight mb-3' >{elem.title}</h1>
                <p  className='text-gray-700   font-medium break-words' >{elem.details}</p>
                <button 
                type="button"
                onClick={()=>{
                  deletNote(idx)
                }}
                className='text-white bg-red-600 w-full cursor-pointer text-xs  active:scale-95 font-bold rounded mt-auto p-1'>
                  Delete
                </button>
              </div>
              
              
            })}
        
          </div>
        </div>
        

      </div>
      </div>
    </>
  )
}

export default App

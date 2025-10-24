import React from 'react'
import { ArrowRight } from 'lucide-react';

const RightCardContent = (props) => {
    
    
    
  return (
    <div>
         <div  className='absolute top-0 left-0 h-full w-full  flex flex-col  p-5 justify-between '>
           <h2 className='text-2xl font-black h-10 w-10 rounded-full flex justify-center items-center p-3 bg-white'>{props.id+1}</h2>
           <div className='mt-auto mb-5'>
            <p className='text-xl leading-normal text-white '>{props.para}</p>
            </div> 
            <div className='flex justify-between items-center'>
                <button className='bg-blue-600 text-white font-bold px-3 py-2  rounded-3xl hover:bg-blue-900 '>{props.tag}</button>
                <ArrowRight 
                size={38}
                className='bg-blue-600 text-white px-2 py-1 rounded-3xl hover:bg-blue-900 '
                />
                
            </div>

        </div>
    </div>
  )
}

export default RightCardContent
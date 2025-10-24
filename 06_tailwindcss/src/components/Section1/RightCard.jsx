import React from 'react'
import { ArrowRight } from 'lucide-react';
import RightCardContent from './RightCardContent';

const RightCard = (props) => {

  
  return (
    <div className='w-72  shrink-0   h-full  rounded-3xl overflow-hidden relative '>
        <img  className='h-full w-full object-cover ' src={props.img} alt="" />

       <RightCardContent 
       para={props.para}
       id={props.id}
       tag={props.tag}
       />
       
    </div>
  )
}

export default RightCard
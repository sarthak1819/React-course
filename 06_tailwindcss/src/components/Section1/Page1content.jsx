import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  
  return (
    <div className=' h-[90vh] flex items-center justify-between py-10 px-10 gap-7'>
        <Leftcontent/>
        <Rightcontent user={props.user}/>
    </div>
  )
}

export default Page1content
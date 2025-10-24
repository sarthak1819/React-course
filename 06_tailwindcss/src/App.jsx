import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section 2/Section2'


function App() {
  
const users =[
  {
    img:"https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    para:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae pariatur corrupti odio! Velit, facilis temporibus?",
    tag:"Satisfied"
  },
 {
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=60&w=500",
    para: "Hard work always pays off. Dedication and effort bring the best outcomes in professional life.",
    tag: "Motivated"
  },
  {
    img: "https://images.unsplash.com/photo-1690846152581-37a78f2e83e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    para: "Teamwork makes the dream work. Collaboration builds stronger connections and better results.",
    tag: "Collaborative"
  },
  {
    img: "https://images.unsplash.com/photo-1753450711825-b58801aee254?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    para: "Taking time to reflect and relax improves productivity and creativity throughout the day.",
    tag: "Relaxed"
  }]

  return (
    <>
     <Section1 user={users}/>
     <Section2 />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '/src/components/Card'

function App() {
 

  const jobs = [
  {
    title: "Frontend Developer",
    company: "TechVision Pvt. Ltd.",
    location: "Mumbai, India",
    salary: "₹6–10 LPA",
    description: "Build responsive web apps using React.",
    logo: "https://logo.clearbit.com/techvision.com"
  },
  {
    title: "Backend Developer",
    company: "CodeCrafters Inc.",
    location: "Bangalore, India",
    salary: "₹7–12 LPA",
    description: "Work on Node.js APIs and databases.",
    logo: "https://logo.clearbit.com/codecrafters.com"
  },
  {
    title: "UI/UX Designer",
    company: "DesignHub",
    location: "Pune, India",
    salary: "₹5–8 LPA",
    description: "Create clean and modern UI designs.",
    logo: "https://logo.clearbit.com/designhub.com"
  },
  {
    title: "Fullstack Developer",
    company: "WebWorks",
    location: "Hyderabad, India",
    salary: "₹8–15 LPA",
    description: "Handle frontend and backend development.",
    logo: "https://logo.clearbit.com/webworks.com"
  },
  {
    title: "Data Scientist",
    company: "DataX Labs",
    location: "Gurgaon, India",
    salary: "₹10–18 LPA",
    description: "Analyze data and build predictive models.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZx22_Yw9iGJRurHGWU7dZapvtqatxG_6xg&s"
  },
  {
    title: "Mobile App Developer",
    company: "Appify",
    location: "Chennai, India",
    salary: "₹7–11 LPA",
    description: "Develop cross-platform mobile apps.",
    logo: "https://logo.clearbit.com/appify.com"
  },
  {
    title: "Cloud Engineer",
    company: "CloudCore",
    location: "Bangalore, India",
    salary: "₹9–16 LPA",
    description: "Manage AWS and Azure cloud solutions.",
    logo: "https://dcassetcdn.com/design_img/3954644/644882/26685655/rvhaeat81zhp85x7pwawdr84yp_image.png"
  },
  {
    title: "Machine Learning Engineer",
    company: "AI Solutions",
    location: "Mumbai, India",
    salary: "₹12–20 LPA",
    description: "Build and deploy ML models.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKb6DweQ6jctob7M8cLUMnyZu4M79n468EVg&s"
  },
  {
    title: "DevOps Engineer",
    company: "OpsGuru",
    location: "Pune, India",
    salary: "₹8–14 LPA",
    description: "Maintain CI/CD pipelines and servers.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJPwBfmzVplugaUDQmkOHiQi9beP7JSm3AA&s"
  },
  {
    title: "Product Manager",
    company: "InnoTech",
    location: "Delhi, India",
    salary: "₹15–25 LPA",
    description: "Lead product planning and execution.",
    logo: "https://logo.clearbit.com/innotech.com"
  }
];

  return (
    <>
    
    <div className="card-container">
      {jobs.map((job )=>{
        return <Card logo={job.logo} title={job.title} company={job.company} location={job.location} salary={job.salary} description={job.description} />
      })}
     
    </div>
    </>
  )
}

export default App

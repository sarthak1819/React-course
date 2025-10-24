import React from 'react'


const Card = (props) => {
    console.log(props);
    
  return (
    <div className="job-card">
      <div className="job-header">
        <img
          src={props.logo}
          alt="Company Logo"
          className="company-logo"
        />
        <div>
          <h2 className="job-title">{props.title}</h2>
          <p className="company-name">{props.company}</p>
        </div>
      </div>

      <p className="location"> {props.location}</p>
      <p className="job-description">
        {props.description}
      </p>

      <div className="job-footer">
        <span className="salary">{props.salary}</span>
        <button className="apply-btn">Apply</button>
      </div>
    </div>
  )
}

export default Card
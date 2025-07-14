import React from 'react'
import './Education.css'
function Education() {
  return (
    <div id="education" className="education-container">
        <h2 id="title">Education</h2>
        <div className="education-content">
          <p className="education">
            <h3>Bachelor of Engineering in Computer Science</h3>  
            <p>Madras Institute of Technology campus, Anna University, Chennai, TamilNadu</p>
            <p>2023 – 2027 (Expected)</p>
            <p>CGPA: 8.3 / 10</p>
          </p>
          <p className="education">
            <h3>Higher Secondary (12th Grade)</h3>
            <p>Bharathi Vidya Bhavan, Erode,TamilNadu</p>
            <p>2022 – 2023</p>
            <p>Percentage: 97%</p>
          </p>
        </div>
    </div>
  )
}

export default Education

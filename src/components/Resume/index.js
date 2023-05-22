import React from 'react';
import '../Resume/Resume.css';

function Resume() {
  return (
    <section>
      <h1>Resume</h1>
      <div className="resume-container">
        <h3>Download Resume</h3>
        <a
          href="/path/to/your/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          Download PDF
        </a>
        <h3>Proficiencies</h3>
        <ul className="proficiencies-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          {/* Add more proficiencies as needed */}
        </ul>
      </div>
    </section>
  );
}

export default Resume;

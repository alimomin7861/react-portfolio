import React from 'react';
import './Projects.css'; // Import the CSS file for styling
import EmployeeTrackerImage from '../../assets/EmployeeTracker.png'; // Import the image file for the Employee Tracker project
import Project2Image from '../../assets/Project2.png'; // Import the image file for the second project
import Project3Image from '../../assets/Project3.png'; // Import the image file for the third project

function Projects() {
  return (
    <section>
      <h1>My Projects</h1>
      <div className="project-container">
        <div className="projCard">
          <h3>Employee Tracker</h3>
          <a
            href="webiteURLGoesHere"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={EmployeeTrackerImage} alt="Employee Tracker frontend" />
          </a>
          <div className="project-links">
            <a
              href="deployedURLGoesHere"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed App
            </a>
            <a
              href="githubURLGoesHere"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </div>

        {/* Additional projCard divs for other projects */}
        <div className="projCard">
          <h3>Project 2</h3>
          <a
            href="webiteURLGoesHere"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Project2Image} alt="Project 2 frontend" />
          </a>
          <div className="project-links">
            <a
              href="deployedURLGoesHere"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed App
            </a>
            <a
              href="githubURLGoesHere"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </div>

        <div className="projCard">
          <h3>Project 3</h3>
          <a
            href="webiteURLGoesHere"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Project3Image} alt="Project 3 frontend" />
          </a>
          <div className="project-links">
            <a
              href="deployedURLGoesHere"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed App
            </a>
            <a
              href="githubURLGoesHere"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </div>

        <div className="projCard">
          <h3>Project 4</h3>
          <a
            href="webiteURLGoesHere"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Project3Image} alt="Project 4 frontend" />
          </a>
          <div className="project-links">
            <a
              href="deployedURLGoesHere"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed App
            </a>
            <a
              href="githubURLGoesHere"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </div>

        <div className="projCard">
          <h3>Project 5</h3>
          <a
            href="webiteURLGoesHere"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Project3Image} alt="Project 5 frontend" />
          </a>
          <div className="project-links">
            <a
              href="deployedURLGoesHere"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed App
            </a>
            <a
              href="githubURLGoesHere"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </div>

        <div className="projCard">
          <h3>Project 6</h3>
          <a
            href="webiteURLGoesHere"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Project3Image} alt="Project 6 frontend" />
          </a>
          <div className="project-links">
            <a
              href="deployedURLGoesHere"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed App
            </a>
            <a
              href="githubURLGoesHere"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

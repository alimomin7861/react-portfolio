import React from 'react';
import './About.css'; // Import the CSS file for styling
import avatarImage from '../../assets/avatar.png'; // Import the image file for the avatar

function About() {
  return (
    <section className="about-container"> {/* Add a class name for the container */}
      <h1>About Me</h1>
      <div className="about-content">
        <img src={avatarImage} alt="Avatar" className="avatar" /> {/* Display the avatar image */}
        <div className="bio">
          <p>
            Hi there! I'm [Your Name], a passionate [Your Profession] based in [Your Location]. I have [Number of Years] years of experience in [Your Area of Expertise] and enjoy creating [Your Specialties]. I'm dedicated to [Your Mission or Goal].
          </p>
          <p>
            In my free time, I love [Your Hobbies or Interests]. I also believe in giving back to the community, and I actively contribute to [Any Organizations or Causes] to make a positive impact.
          </p>
          <p>
            Feel free to explore my portfolio to see some of my previous work. If you have any questions or would like to collaborate, please don't hesitate to get in touch!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

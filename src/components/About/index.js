import React from 'react';
import avatarImage from '../../assets/avatar.png';
import './About.css';

function About() {
  return (
    <section>
      <h1>About Me</h1>
      <div className="about-container">
        <img src={avatarImage} alt="Avatar" className="avatar" />
        <div className="about-content">
          <p>
            My name is Ali Momin. I recently completed a Full-stack coding bootcamp and I'm passionate about becoming a full-stack developer. Currently, I am working in Client Operations for a listings and reputation management company, where I gained valuable experience in customer service and problem-solving.
          </p>
          <p>
            I graduated from Pomona College with a B.A. in Molecular Biology, where I developed a strong analytical mindset and attention to detail. Although my background is in science, I have always been drawn to technology and coding, which led me to pursue a career in web development.
          </p>
          <p>
            I am excited to apply my knowledge and skills in web development to create innovative and user-friendly applications. I enjoy working in a collaborative environment, solving complex problems, and continuously learning new technologies. My goal is to contribute to meaningful projects and make a positive impact in the tech industry.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

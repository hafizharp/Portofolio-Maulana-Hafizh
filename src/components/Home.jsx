import React from "react";
import "./Home.css";
import profilePhoto from "../assets/images/profile.png"; 
import { FaDownload } from "react-icons/fa";


const cvLink = "/Maulana Hafizh Ariputra-resume.pdf";


const About = () => (
  <section className="about-section">
    <div className="about-container">
      <div className="about-info">
        <h1 className="about-name">Maulana Hafizh Ariputra</h1>
        <h2 className="about-title">
          Frontend Developer | Machine Learning | UI/UX Designer
        </h2>

        <a href={cvLink} download className="cv-button">
          <FaDownload className="cv-icon" /> Download CV
        </a>
      </div>

      <div className="about-photo-container">
        <img
          src={profilePhoto}
          alt="Maulana Hafizh Ariputra"
          className="about-photo"
        />
      </div>
    </div>

    <div className="about-description-container">
      <p className="about-description">
        I am a passionate and dedicated Information Technology student at Universitas Trisakti with a strong interest in web development and data analysis. Throughout my academic journey, I have worked on various projects involving web application development, artificial intelligence, and database management.
      </p>
      <p className="about-description">
        Beyond web development, I have experience in data analysis and machine learning, where I have implemented predictive models and automated data processing using Python. My ability to manage and analyze data has helped optimize decision-making and enhance system performance. I am also well-versed in database management using MySQL, ensuring effective data organization and security.
      </p>
      <p className="about-description">
        In addition to my technical skills, I possess strong soft skills that support my ability to work effectively in a team and lead projects. I have excellent communication and leadership abilities, along with a keen eye for detail and problem-solving. My adaptability and eagerness to learn new technologies drive me to stay updated with industry trends and continuously improve my skill set.
      </p>
      <p className="about-description">
        With a commitment to innovation and continuous learning, I am always seeking new opportunities to expand my knowledge and contribute to impactful projects in the IT field. My goal is to leverage my technical expertise and analytical skills to develop solutions that drive technological advancement and efficiency.
      </p>
    </div>
  </section>
);

export default About;

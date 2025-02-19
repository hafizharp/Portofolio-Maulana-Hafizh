import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: 'fab fa-html5', color: '#e34c26' },
    { name: 'CSS', icon: 'fab fa-css3-alt', color: '#264de4' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: '#f7df1e' },
    { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
    { name: 'Java', icon: 'fab fa-java', color: '#007396' },
    { name: 'Python', icon: 'fab fa-python', color: '#3776ab' },
    { name: 'Django', icon: 'fas fa-leaf', color: '#092e20' },
    { name: 'MySQL', icon: 'fas fa-database', color: '#00758f' },
    { name: 'Canva', icon: 'fas fa-paint-brush', color: '#00c4cc' },
    { name: 'Figma', icon: 'fas fa-pen-nib', color: '#f24e1e' },
    { name: 'Microsoft Tools', icon: 'fas fa-tools', color: '#d83b01' },
  ];

  return (
    <section className="skills-section">
      <h2 className="section-title">
        <span className="highlight">My</span> Skills
      </h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card" style={{ '--index': index + 1, borderColor: skill.color }}>
            <i className={skill.icon} style={{ color: skill.color }}></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

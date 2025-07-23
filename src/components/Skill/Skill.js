import React from 'react';
import './Skill.css';
import { FaReact, FaJsSquare, FaGitAlt,} from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiMysql,  SiFramer, SiPhp} from 'react-icons/si';

const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'framer', icon: <SiFramer /> },
     { name: 'php', icon: <SiPhp /> },
];

function Skill() {
  return (
    <section className="skill-section" id="skill">
      <h2 className="skill-title" data-aos="fade-up">Skill</h2>
      <div className="logo-skill-grid" data-aos="fade-up" data-aos-delay="100">
        {skills.map((skill, index) => (
          <div className="logo-card" key={index}>
            <div className="logo-icon">{skill.icon}</div>
            <span className="logo-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;

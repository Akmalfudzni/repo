import React from 'react';
import './Navbar.css'; // Import file CSS

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="logo">Jago Universe</a>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#tentang">About Me</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#skill">Skill</a></li>         
        <li><a href="#experience">Experience</a></li>
        <li><a href="#kontak">Kontak</a></li>
      </ul>
    </nav>

  );
}

export default Navbar;

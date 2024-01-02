import React from 'react';
import navbar from './Navbar.module.css';
import { getImageUrl } from '../../utils';
import { Helmet } from 'react-helmet';

const Navbar = () => {
  const handleTitleChange = (title) => {
    document.title = `S - ${title}`;
  };

  return (
    <nav className={navbar.navbar}>
      <a href='/' className={navbar.title}>
        Portfolio
      </a>
      <div className={navbar.menu}>
        <img
          className={navbar.menuBtn}
          src={getImageUrl('nav/menuIcon.png')}
          alt='menuBtn'
          onClick={() => {}}
        />
        <ul className={`${navbar.menuItems}`}>
          <li>
            <a href='#about' onClick={() => handleTitleChange('About')}>
              About
            </a>
          </li>
          <li>
            <a href='#experience' onClick={() => handleTitleChange('Skills')}>
              Skills
            </a>
          </li>
          <li>
            <a href='#projects' onClick={() => handleTitleChange('Projects')}>
              Projects
            </a>
          </li>
          <li>
            <a href='#contact' onClick={() => handleTitleChange('Contact')}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

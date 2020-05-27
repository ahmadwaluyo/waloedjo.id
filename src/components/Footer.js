import React from 'react';
import SocialLinks from './SocialLinks';
import '../App.css';

export default function Footer (props) {
    return (
      <footer>
        <div className="wrapper">
          <h3>THANKS FOR VISITING</h3>
          <p>© {new Date().getFullYear()} Ahmad Waluyo.</p>
          <SocialLinks />
        </div>
      </footer>
    );
  };
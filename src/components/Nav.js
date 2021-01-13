import React from 'react';
import '../App.css';

export default function Nav (props) {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">
            Ahmad
            <strong> Waluyo</strong>
          </p>
          <a
            href={() => false}
            onClick={props.toggleMenu}
            className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
          >
            <span />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

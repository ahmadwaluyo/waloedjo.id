import React from 'react';
import '../App.css';

export default function SocialLinks (props) {
    return (
      <div className="social">
        <a
          href="https://twitter.com/703wal03"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Twitter profile"
        >
          {' '}
          <i className="fab fa-twitter" />
        </a>
        <a
          href="https://www.instagram.com/joe_achmed/"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Instagram profile"
        >
          {' '}
          <i className="fab fa-instagram" />
        </a>
        <a
          id="profile-link"
          href="https://github.com/ahmadwaluyo"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's GitHub Profile"
        >
          {' '}
          <i className="fab fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmad-waluyo-4086b8127/"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's LinkedIn Profile"
        >
          {' '}
          <i className="fab fa-linkedin" />
        </a>
      </div>
    );
  };
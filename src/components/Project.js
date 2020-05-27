import React from 'react';
import '../App.css';

export default function Project (props) {
    const tech = {
      sass: 'fab fa-sass',
      css: 'fab fa-css3-alt',
      js: 'fab fa-js-square',
      react: 'fab fa-react',
      vue: 'fab fa-vuejs',
      d3: 'far fa-chart-bar',
      node: 'fab fa-node',
      aws: 'fab fa-aws'
    };
  
    const link = props.link || 'http://';
    const repo = props.repo || 'http://';
  
    return (
      <div className="project">
        <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
          <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
        </a>
        <div className="project-details">
          <div className="project-tile">
            <p className="icons">
              {props.tech.split(' ').map(t => (
                <i className={tech[t]} key={t} />
              ))}
            </p>
            {props.title}{' '}
          </div>
          {props.children}
          <div className="buttons">
            <a href={repo} target="_blank" rel="noopener noreferrer">
              View source <i className="fas fa-external-link-alt" />
            </a>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Visit Web <i className="fas fa-external-link-alt" />
            </a>
          </div>
        </div>
      </div>
    );
  };
import React from 'react';
import Project from './Project';
import '../App.css';

export default function Projects (props) {
    return (
      <section id="projects">
        <div className="projects-container">
          <div className="heading">
            <h3 className="title works">My Works</h3>
            <p className="separator" />
            <p className="subtitle">
              Here's a list of <u>most</u> of the projects I've been working on lately. All of these
              were built during my coding camp adventure on{' '}
              <a href="https://hacktiv8.com/" target="_blank" rel="noopener noreferrer">
                hacktiv8 Indonesia
              </a>
              , where I've been coding for almost 5 months non-stop until I completed all the projects
              required to get my Full-Stack Developer certification.
            </p>
          </div>
          <div className="projects-wrapper">
          <Project
              title="Neplix Entertainme."
              img={'https://i.ibb.co/kMDF107/rsz-screenshot-from-2020-05-26-11-30-22.png'}
              tech="js  css  react  node"
              link="https://github.com/ahmadwaluyo/entertainme"
              repo="https://github.com/ahmadwaluyo/entertainme"
            >
              <small>
                Built using Node, Express, MongoDB, Redis, Apollo graphQL, ReactJS, JS + jQuery + Axios, CSS + Bootstrap.
              </small>
              <p>
                Another full-stack website to check the information about film and movies, inspired by netflix.
              </p>
            </Project>
            <Project
              title="Sudoku React Native."
              img={'https://i.ibb.co/jWXc0xn/rsz-screenshot-from-2020-05-26-11-21-49.png'}
              tech="js  css  react  node"
              link="https://github.com/ahmadwaluyo/sudoku_react_native"
              repo="https://github.com/ahmadwaluyo/sudoku_react_native"
            >
              <small>
                Built using React Native, Expo, CSS + UI-Kitten, Redux state management, Axios, Babel.
              </small>
              <p>
                A Mobile Game Aplication to exercise your brain.
              </p>
            </Project>
            <Project
              title="Yu-Gi-Oh Card Deck Info."
              img={'https://i.ibb.co/pjXR2TJ/rsz-1rsz-screenshot-from-2020-05-26-10-55-38.png'}
              tech="js  css  react  sass"
              link="https://yu-gi-oh-14599.web.app/"
              repo="https://github.com/ahmadwaluyo/react-challenge"
            >
              <small>
                Built using ReactJS, JS + jQuery + Axios, Redux state management, CSS + Semantic-UI UI-Kit,
              </small>
              <p>
                A website to check information about Yu-Gi-Oh gamecards which is limitted on 3000 power of the monster.
              </p>
            </Project>
            <Project
              title="E-Commerce Customer."
              img={'https://i.ibb.co/D9s0wxz/rsz-screenshot-from-2020-05-26-10-44-22.png'}
              tech="js  css  vue  node  sass"
              link="https://e-commerce-1b0ae.web.app/"
              repo="https://github.com/ahmadwaluyo/Ecommerce_customer_client"
            >
              <small>
                Built using Node, Express, PostgreSQL + Sequelize, VueJS, Axios, JS + jQuery, CSS + Bootstrap + Sass, babel, vuex.
              </small>
              <p>
                A full-stack e-commerce website (client side) to provides kind of cameras and accessories.
              </p>
            </Project>
            <Project
              title="E-Commerce Admin."
              img={'https://i.ibb.co/f9Nhn89/rsz-screenshot-from-2020-05-26-10-39-09.png'}
              tech="js  css  vue  node"
              link="https://ecommerce-e1af2.web.app/dashboard"
              repo="https://github.com/ahmadwaluyo/Ecommerce_Client"
            >
              <small>
                Built using Node, Express, PostgreSQL + Sequelize, VueJS, Axios, JS + jQuery, CSS + Bootstrap + Sass, babel, vuex.
              </small>
              <p>
                A full-stack e-commerce website (admin side) to manage all camera stocks.
              </p>
            </Project>
            <Project
              title="Kanban App."
              img={'https://i.ibb.co/5637v8g/rsz-screenshot-from-2020-05-25-21-12-32.png'}
              tech="js  css  vue  node"
              link="https://kanbanapps-99c93.web.app/"
              repo="https://github.com/ahmadwaluyo/Kanban-Client"
            >
              <small>
                Built using Node, Express, PostgreSQL, JS + jQuery + Axios, CSS + Bulma.
              </small>
              <p>
                A full-stack website to manage progress list.
              </p>
            </Project>
            <Project
              title="Fancy Todo App."
              img={'https://i.ibb.co/BPFCJqx/rsz-screenshot-from-2020-05-25-20-22-58.png'}
              tech="js  css  node  aws"
              link="http://fancytodo.s3-website.eu-west-2.amazonaws.com/#"
              repo="https://github.com/ahmadwaluyo/FancyTodo-client"
            >
              <small>
                Built using Node, Express, PostgreSQL, Ajax + Axios, CSS + Bootstrap, jQuery.
              </small>
              <p>
                This is a full-stack website that I made which lets the users arrange their todo list, additional features to check information about corona.
              </p>
            </Project>
            <Project
              title="Commodity Info."
              img={'https://i.ibb.co/XyD59s2/rsz-screenshot-from-2020-05-26-11-06-50.png'}
              tech="js  css  react  node"
              link="http://safe-headland-38867.herokuapp.com/"
              repo="https://github.com/naufalyunan/Pair-Project-Phase1-Cominfo"
            >
              <small>
                Built using Node, Express, EJS, JS + jQuery, CSS + Bootstrap.
              </small>
              <p>
                ComInfo is a Fullstack web app on pair project which is contributed by Ahmad Waluyo and Naufal Yunan that's designed to provide certain market commodities price to the people.
                The data is updated by the trader on a daily basis to give an average value of a certain commodity monthly and then display it on a graph.
              </p>
            </Project>
          </div>
        </div>
      </section>
    );
  };
import React, { useEffect, useRef, useState } from "react";
import Project from "./Project";
import "../App.css";

export default function Projects(props) {
  const ref = useRef(3);

  useEffect(() => {
    ref.current = 1
  }, [])
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title works">My Works { ref.current }</h3>
          <p className="separator" />
          <p className="subtitle flex justify-center">
            Here's a list of most of the projects I've been working on
            lately.
            {/* All of these were built during my coding camp adventure on{" "}
            <a
              href="https://hacktiv8.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hacktiv8 Indonesia
            </a>
            , where I have been coding for almost 5 months non-stop until I
            completed all the projects required to get my Full-Stack Developer
            certification. */}
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="Wehelpyou.id v.2"
            img={
              "https://i.ibb.co/JjYHX5K/Screen-Shot-2022-04-18-at-11-13-08.png"
            }
            tech="js  css  vue"
            link="https://dev-website.wehelpyou.xyz/"
            repo="https://i.ibb.co/b5ySX3Z/Fixed-Sorry-you-are-not-allowed-to-access-this-page.png"
          >
            <small>Built using Vue3 + Tailwindcss</small>
            <p>
              This App was being created and it was built to revamp current existing website
            </p>
          </Project>
          <Project
            title="Wehelpyou Merchant Dashboard"
            img={
              "https://i.ibb.co/0BWDtQD/Screen-Shot-2022-04-18-at-11-36-46.png"
            }
            tech="js  css  vue"
            link="https://merchant.wehelpyou.xyz/"
            repo="https://i.ibb.co/b5ySX3Z/Fixed-Sorry-you-are-not-allowed-to-access-this-page.png"
          >
            <small>Built using Vue3 + Tailwindcss</small>
            <p>
              This App was being created and it was built to accomodate merchant's transactions
            </p>
          </Project>
          <Project
            title="Web Prakerja Techfor ID"
            img={
              "https://i.ibb.co/tYBNnT0/Screen-Shot-2022-04-18-at-11-23-35.png"
            }
            tech="js  css  react  php"
            link="https://kampus.techfor.id/"
            repo="https://i.ibb.co/b5ySX3Z/Fixed-Sorry-you-are-not-allowed-to-access-this-page.png"
          >
            <small>Built using ReactJS and Integrated with php for make Rest API</small>
            <p>
              This App was built to accomodate government program "prakerja", consists of premium course and tutorial
            </p>
          </Project>
          <Project
            title="MUNERIS VMWare Airforce"
            img={
              "https://i.ibb.co/MfBW0ZY/rsz-12whatsapp-image-2021-01-14-at-172548.jpg"
            }
            tech="js  css  react  node"
            link="https://i.ibb.co/b5ySX3Z/Fixed-Sorry-you-are-not-allowed-to-access-this-page.png"
            repo="https://i.ibb.co/b5ySX3Z/Fixed-Sorry-you-are-not-allowed-to-access-this-page.png"
          >
            <small>Built using NodeJS, React + CoreUI, Redux.</small>
            <p>
              This App was built in collaboration with VMWare Indonesia to
              fulfill National Airforce needs in IT Sectors
            </p>
          </Project>
          <Project
            title="CEISA V.4"
            img={"https://i.ibb.co/G9h3wx1/portal-beacukai.png"}
            tech="js  css  react  node"
            link="https://portal.beacukai.go.id/"
            repo="https://portal.beacukai.go.id/"
          >
            <small>
              Built using Java Springboot, React + Antd Design, Firebase
              Storage, Redux.
            </small>
            <p>
              This App was built for Beacukai administration process and it is
              used in whole beacukai's branch in Indonesia
            </p>
          </Project>
          {/* <Project
            title="Reseller App"
            img={
              "https://i.ibb.co/ypSP642/rsz-screenshot-from-2020-08-08-20-12-10.png"
            }
            tech="js  css  react  node"
            link="https://github.com/ahmadwaluyo/reseller_client"
            repo="https://github.com/ahmadwaluyo/reseller_client"
          >
            <small>
              Built using Node, Express, MongoDB, PostgreSQL React Native+Expo,
              Firebase Storage, Native Base, ReactJS, MaterialUI.
            </small>
            <p>
              Reseller App is my very first freelance job i've ever handled.
              This is a fullstack project with PostgreSQL for database and React
              Native Expo for mobile. And CMS using React + MaterialUI theme for
              web dashboard. This App has being finalized.
            </p>
          </Project>
          <Project
            title="PPM Wiriosoedarmo"
            img={
              "https://i.ibb.co/DzCdjPz/rsz-screenshot-from-2020-08-08-19-50-18.png"
            }
            tech="js  css  react"
            link="https://wiriosoedarmogombong.com"
            repo="https://github.com/ahmadwaluyo/ppm_wiriosoedarmo"
          >
            <small>
              Built using ReactJS, MaterialUI, Redux, Firebase Storage, And
              Under Development for additional dashboard.
            </small>
            <p>
              This App was built to fulfill digitalization branding of
              Wiriosoedarmo Muhammadiyah Boarding School. This web is under
              developing process.
            </p>
          </Project>
          <Project
            title="ModaLin"
            img={
              "https://i.ibb.co/LQkPF8P/rsz-screenshot-from-2020-08-04-14-25-28.png"
            }
            tech="js  css  react  node"
            link="https://github.com/Modalin"
            repo="https://github.com/Modalin"
          >
            <small>
              Built using Node, Express, MongoDB, React Native+Expo, Firebase
              Storage, Native Base.
            </small>
            <p>
              This App was built for final project submission Hacktiv8
              Indonesia. ModaLin is a group project with 4 participants. This
              Mobile App provides some services to connect between investor and
              entrepreneurs which is looking for startup capital.
            </p>
          </Project>
          <Project
            title="Neplix Entertainme."
            img={
              "https://i.ibb.co/kMDF107/rsz-screenshot-from-2020-05-26-11-30-22.png"
            }
            tech="js  css  react  node"
            link="https://github.com/ahmadwaluyo/entertainme"
            repo="https://github.com/ahmadwaluyo/entertainme"
          >
            <small>
              Built using Node, Express, MongoDB, Redis, Apollo graphQL,
              ReactJS, JS + jQuery + Axios, CSS + Bootstrap.
            </small>
            <p>
              Another full-stack website to check the information about film and
              movies, inspired by netflix.
            </p>
          </Project>
          <Project
            title="Sudoku React Native."
            img={
              "https://i.ibb.co/jWXc0xn/rsz-screenshot-from-2020-05-26-11-21-49.png"
            }
            tech="js  css  react  node"
            link="https://expo.io/@joe_achmed/sudoku"
            repo="https://github.com/ahmadwaluyo/sudoku_react_native"
          >
            <small>
              Built using React Native, Expo, CSS + UI-Kitten, Redux state
              management, Axios, Babel.
            </small>
            <p>A Mobile Game Aplication to exercise your brain.</p>
          </Project>
          <Project
            title="Yu-Gi-Oh Card Deck Info."
            img={
              "https://i.ibb.co/pjXR2TJ/rsz-1rsz-screenshot-from-2020-05-26-10-55-38.png"
            }
            tech="js  css  react  sass"
            link="https://yu-gi-oh-14599.web.app/"
            repo="https://github.com/ahmadwaluyo/react-challenge"
          >
            <small>
              Built using ReactJS, JS + jQuery + Axios, Redux state management,
              CSS + Semantic-UI UI-Kit,
            </small>
            <p>
              A website to check information about Yu-Gi-Oh gamecards which is
              limitted on 3000 power of the monster.
            </p>
          </Project>
          <Project
            title="E-Commerce Customer."
            img={
              "https://i.ibb.co/D9s0wxz/rsz-screenshot-from-2020-05-26-10-44-22.png"
            }
            tech="js  css  vue  node  sass"
            link="https://e-commerce-1b0ae.web.app/"
            repo="https://github.com/ahmadwaluyo/Ecommerce_customer_client"
          >
            <small>
              Built using Node, Express, PostgreSQL + Sequelize, VueJS, Axios,
              JS + jQuery, CSS + Bootstrap + Sass, babel, vuex.
            </small>
            <p>
              A full-stack e-commerce website (client side) to provides kind of
              cameras and accessories.
            </p>
          </Project>
          <Project
            title="E-Commerce Admin."
            img={
              "https://i.ibb.co/f9Nhn89/rsz-screenshot-from-2020-05-26-10-39-09.png"
            }
            tech="js  css  vue  node"
            link="https://ecommerce-e1af2.web.app/dashboard"
            repo="https://github.com/ahmadwaluyo/Ecommerce_Client"
          >
            <small>
              Built using Node, Express, PostgreSQL + Sequelize, VueJS, Axios,
              JS + jQuery, CSS + Bootstrap + Sass, babel, vuex.
            </small>
            <p>
              A full-stack e-commerce website (admin side) to manage all camera
              stocks.
            </p>
          </Project>
          <Project
            title="Kanban App."
            img={
              "https://i.ibb.co/5637v8g/rsz-screenshot-from-2020-05-25-21-12-32.png"
            }
            tech="js  css  vue  node"
            link="https://kanbanapps-99c93.web.app/"
            repo="https://github.com/ahmadwaluyo/Kanban-Client"
          >
            <small>
              Built using Node, Express, PostgreSQL, JS + jQuery + Axios, CSS +
              Bulma.
            </small>
            <p>A full-stack website to manage progress list.</p>
          </Project>
          <Project
            title="Fancy Todo App."
            img={
              "https://i.ibb.co/BPFCJqx/rsz-screenshot-from-2020-05-25-20-22-58.png"
            }
            tech="js  css  node  aws"
            link="http://fancytodo.s3-website.eu-west-2.amazonaws.com/#"
            repo="https://github.com/ahmadwaluyo/FancyTodo-client"
          >
            <small>
              Built using Node, Express, PostgreSQL, Ajax + Axios, CSS +
              Bootstrap, jQuery.
            </small>
            <p>
              This is a full-stack website that I made which lets the users
              arrange their todo list, additional features to check information
              about corona.
            </p>
          </Project>
          <Project
            title="Commodity Info."
            img={
              "https://i.ibb.co/XyD59s2/rsz-screenshot-from-2020-05-26-11-06-50.png"
            }
            tech="js  css  react  node"
            link="http://safe-headland-38867.herokuapp.com/"
            repo="https://github.com/naufalyunan/Pair-Project-Phase1-Cominfo"
          >
            <small>
              Built using Node, Express, EJS, JS + jQuery, CSS + Bootstrap.
            </small>
            <p>
              ComInfo is a Fullstack web app on pair project which is
              contributed by Ahmad Waluyo and Naufal Yunan that's designed to
              provide certain market commodities price to the people. The data
              is updated by the trader on a daily basis to give an average value
              of a certain commodity monthly and then display it on a graph.
            </p>
          </Project> */}
        </div>
      </div>
    </section>
  );
}

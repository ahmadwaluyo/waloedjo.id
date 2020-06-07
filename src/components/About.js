import React from 'react';
import '../App.css';

export default function About(props) {
    return (
      <section id="about">
        <div className="wrapper">
          <article>
            <div className="title">
              <h3>Who's this guy?</h3>
              <p className="separator" />
            </div>
            <div className="desc full">
              <h4 className="subtitle">My name is Ahmad.</h4>
              <p>
                I am a fullstack developer based in the beautiful rain city of Bogor,
                West Java, Indonesia.
              </p>
              <p>
                I really enjoy solving problems as well as making things pretty and easy to use. I
                can't stop learning new things; the more, the better. I also love photography, a hobby
                I'm taking along since the good old film cameras. Oh, and I'm a chocolate addict; I have a
                passion for all kind of chocolates!
              </p>
            </div>
            <div className="title">
              <h3>What does he do?</h3>
              <p className="separator" />
            </div>
            <div className="desc">
              <h4 className="subtitle">My Profile</h4>
              <img src="https://i.ibb.co/QJCP1jt/Ahmad-Waluyo.jpg" style={{ width : '100%' }} alt="Ahmad-Waluyo" border="10" />
              <div className="profile" style={{ display: 'flex', marginTop: 10}}>
                <div style={{ display: 'flex',flexDirection: 'column', width: '40%', fontFamily: 'inherit'}}>
                    <h4>Name</h4>
                    <h4>Birthplace/Year</h4>
                    <h4>Background</h4>
                    <h4>Area of Expertise</h4>

                    <div style={{ paddingTop: 30, width: '200%', display: 'flex', justifyContent: 'space-around'}}>
                      <i className="fab fa-js-square" />
                      <i className="fab fa-html5" />
                      <i className="fab fa-css3-alt" />
                      <i className="fab fa-react" />
                      <i className="fab fa-vuejs" />
                      <i className="fab fa-sass" />
                      <i className="fab fa-node" />
                      <i className="far fa-chart-bar" />
                      <i className="fab fa-aws" />
                      <i className="fab fa-github" />
                    </div>
                </div>
                <div style={{ display: 'flex',flexDirection: 'column', width: '60%', fontFamily: 'inherit'}}>
                    <h4>: Ahmad Waluyo</h4>
                    <h4>: Kebumen, 02-15-1995</h4>
                    <h4>: Programming, Networking</h4>
                    <h4>: </h4>
                </div>
              </div>
            </div>
            <div className="desc">
            <h4 className="subtitle">I'm a programmer.</h4>
              <p>
                For the front-end I usually work with Javascript, either standalone or including
                popular frameworks like ReactJS and VueJS. I also make the web pretty by using Sass,
                CSS and, whenever needed, any of their friends: Bootstrap, Bulma, etc.
              </p>
              <p>
                For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). But, of
                course, whenever the project requires PHP, I do PHP as well (Wordpress, Laravel, etc).
              </p>

              <h4 className="subtitle">Also a designer.</h4>

              <p>
                I feel comfortable working with many Adobe products. Photoshop, Illustrator, InDesign,
                Lightroom or Xd are some kind of industry standards and I love working with them. I'm
                not limited to them, though: Gimp, Inkscape or Figma are also very valid applications
                that I've been working with.
              </p>
              <p>
                User interfaces, brochures, books, branding... You name it! As I mentioned, creating
                pretty things is particularly important for me.
              </p>
            </div>
          </article>
        </div>
      </section>
    );
  };
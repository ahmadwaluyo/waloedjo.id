import React from 'react';
import { useState } from 'react'
import SocialLinks from './SocialLinks';
import axios from 'axios';
import swal from 'sweetalert'
import '../App.css';

export default function Contact (props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { name, email, message };
    axios.post('https://waloedjo.herokuapp.com', data)
      .then(result => {
        console.log('success', result);
        swal("Thank you for your Attention!", "Your messages sent successfully to Ahmad's mailbox", "success");
      })
      .catch(err => {
        swal("Oops!", "Something went wrong!", "error");
      })

      setName('');
      setEmail('');
      setMessage('');
  }

    return (
      <section id="contact">
        <div className="container">
          <div className="heading-wrapper">
            <div className="heading">
              <p className="title">
                Want to <br />
                contact me?
              </p>
              <p className="separator" />
              <p className="subtitle">
                Please, use the form below or send an email to {''}
                <span className="mail">
                  ahmad.umb15
                  <i className="fas fa-at at" />
                  gmail.com
                </span>
                :
              </p>
            </div>
            <SocialLinks />
          </div>
          <form id="contact-form" onSubmit={handleSubmit}>
            <input placeholder="Name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            <input placeholder="Email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <textarea placeholder="Message" type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required/>
            <input className="button" id="submit" value="Submit" type="submit" />
          </form>
        </div>
      </section>
    );
  };
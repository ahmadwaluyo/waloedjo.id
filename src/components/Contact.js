import React, { useEffect } from "react";
import { useState } from "react";
import SocialLinks from "./SocialLinks";
// import axios from "axios";
// import swal from "sweetalert2";
import "../App.css";
import { Spin } from "antd";

export default function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [])

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = { name, email, message };
  //   swal
  //     .fire({
  //       title: "Confirm",
  //       text: "are you sure want to send me a message?",
  //       icon: "question",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes",
  //       cancelButtonText: "No, Maybe later",
  //     })
  //     .then((result) => {
  //       if (result.isConfirmed) {
  //         setLoading(true);
  //         axios
  //           .post("https://waloedjo.herokuapp.com", data)
  //           .then((result) => {
  //             console.log("success", result);
  //             swal.fire(
  //               "Thank you for your Attention!",
  //               "Your messages sent successfully to Ahmad's mailbox",
  //               "success"
  //             );
  //           })
  //           .catch((err) => {
  //             swal.fire("Oops!", "Something went wrong!", "error");
  //           })
  //           .finally(() => {
  //             setLoading(false);
  //           });
  //         setName("");
  //         setEmail("");
  //         setMessage("");
  //       }
  //     });
  // };

  return (
    <Spin spinning={loading} size="large" centered>
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
                Please, use the form below or send an email to {""}
                <span className="mail">
                  ahmad.umb15
                  <i className="fas fa-at at" />
                  gmail.com,
                </span>
                <span>
                  &nbsp;Or kindly to review my CV's{" "}
                  <a
                    style={{ color: "white" }}
                    href="../assets/CV_AhmadWaluyo.pdf"
                    download
                  >
                    here
                  </a>
                </span>
                :
              </p>
            </div>
            <SocialLinks />
          </div>
          {/* onSubmit={handleSubmit} */}
          <form id="contact-form">
            <input
              placeholder="Name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              placeholder="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Message"
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <a
              className="submit"
              href={`mailto:ahmad.umb15@gmail.com?subject=${message}`}
            >
              Submit
              {/* <input
                className="button"
                id="submit"
                value="Submit"
                type="submit"
              /> */}
            </a>
          </form>
        </div>
      </section>
    </Spin>
  );
}

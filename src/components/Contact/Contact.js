import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const Contact = () => {
  return (
    <section class="contact" id="contact">
      <h1 class="heading" data-aos="fade-up">
        <span>contact me</span>
      </h1>

      <div class="box-container">
        <a href="https://github.com/whatthefoobar">
          <div class="box" data-aos="zoom-in">
            <FaGithub className="contact-social" fill="white" />
            <h3>
              <a href="https://github.com/whatthefoobar">Github</a>
            </h3>
          </div>
        </a>

        <div class="box" data-aos="zoom-in">
          <FaPhone className="contact-social" fill="white" />
          <h3>
            <a href="mailto:irina.mntn@gmail.com">Email</a>
          </h3>
        </div>

        <div class="box" data-aos="zoom-in">
          <BsLinkedin className="contact-social" fill="white" />
          <h3>
            <a href="https://www.linkedin.com/in/irina-munteanu-b%C3%A4ck-523a41b4/">
              LinkedIn
            </a>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;

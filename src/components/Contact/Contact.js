import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const Contact = () => {
  return (
    <section class="contact" id="contact">
      <h1 class="heading" data-aos="fade-up">
        <span>contact me</span>
      </h1>

      <div class="box-container">
        <div class="box" data-aos="zoom-in">
          <a href="https://github.com/whatthefoobar">
            <FaGithub className="contact-social" fill="white" />
            <h3>Github</h3>
          </a>
        </div>

        <div class="box" data-aos="zoom-in">
          <a href="mailto:irina.mntn@gmail.com">
            <FaMailBulk className="contact-social" fill="white" />
            <h3>Email</h3>
          </a>
        </div>

        <div class="box" data-aos="zoom-in">
          <a href="https://www.linkedin.com/in/irina-munteanu-b%C3%A4ck-523a41b4/">
            <BsLinkedin className="contact-social" fill="white" />
            <h3>LinkedIn</h3>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

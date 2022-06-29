import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const Contact = () => {
  return (
    <section class="contact" id="contact">
      <h1 class="heading">
        <span>contact me</span>
      </h1>
      <h3 className="contact-text">
        If I'm not tinkering at something I do make sure to check my email and
        socials so If you like what you see, don't be a stranger. Drop me a line
        and let's collaborate.
      </h3>

      <div class="box-container">
        <div class="box">
          <a href="https://github.com/whatthefoobar">
            <FaGithub className="contact-social" fill="white" />
            <h3>Github</h3>
          </a>
        </div>

        <div class="box">
          <a href="mailto:irina.mntn@gmail.com">
            <FaMailBulk className="contact-social" fill="white" />
            <h3>Email</h3>
          </a>
        </div>

        <div class="box">
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

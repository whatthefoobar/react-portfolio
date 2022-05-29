import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
// import Footer from '../../components/Footer/Footer';

const Contact = () => {
  return (
    <section class="contact" id="contact">
      <h1 class="heading" data-aos="fade-up">
        <span>contact me</span>
      </h1>
      <h3 className="contact-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum earum
        tempora asperiores, necessitatibus esse recusandae ullam eius libero
        aliquid consequuntur? Illo earum cum sequi numquam cumque nemo?
        Necessitatibus perferendis magni cum nostrum corrupti placeat expedita
        recusandae tempore ad nobis? Repellendus illum nemo magnam, voluptatibus
        rerum eius et molestias laborum optio?
      </h3>

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

      {/* <Footer /> */}
    </section>
  );
};

export default Contact;

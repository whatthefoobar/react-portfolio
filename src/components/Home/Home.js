import React from 'react';
import me from '../../img/me.jpg';

const Home = () => {
  return (
    <section class="home" id="home">
      <div class="image" data-aos="fade-right">
        <img src={me} alt="profile " />
      </div>

      <div class="content">
        <h3 data-aos="fade-up">Hi, I am Irina Munteanu Bäck</h3>
        <span data-aos="fade-up">Frontend Developer</span>
        <p data-aos="fade-up">
          I'm an aspiring developer with an infinite curiosity and willingness
          to learn.
        </p>
        <a data-aos="fade-up" href="#about" class="btn">
          About me
        </a>
      </div>
    </section>
  );
};

export default Home;
import React from 'react';

const About = () => {
  return (
    <section class="about" id="about">
      <h1 class="heading" data-aos="fade-up">
        <span>About me</span>
      </h1>

      <div class="biography">
        <p data-aos="fade-up">
          “A jack of all trades is a master of none, but oftentimes better than
          a master of one.” I like this saying because it best describes my
          approach to learning. Often a cliché, I do consider myself a life-time
          learner, after studying economics and psychology and working in
          customer oriented jobs I decided to finally bite the bullet and take
          on potentially the biggest challenge I had so far : get into frontend
          development. Coding challenges me in finding solutions to unique
          problems all the while keeping me humble and focused on a goal that
          doesn't have a clear timeline.
        </p>

        <div class="bio">
          <h3 data-aos="zoom-in">
            <span>Name : </span> Irina Munteanu Bäck
          </h3>
          <h3 data-aos="zoom-in">
            <span>Email : </span> irina.mntn@gmail.com
          </h3>
          <h3 data-aos="zoom-in">
            <span>Address : </span> Stockholm, Sweden
          </h3>
          <h3 data-aos="zoom-in">
            <span>Phone : </span> 0760554024
          </h3>
          <h3 data-aos="zoom-in">
            <span>Age : </span> 34 years
          </h3>
        </div>

        <a href="/" class="btn" alt="download">
          Download CV
        </a>
      </div>

      <div class="skills" data-aos="fade-up">
        <h1 class="heading">
          <span>Skills</span>
        </h1>

        <div class="progress">
          <div class="bar" data-aos="fade-left">
            <h3>
              <span>HTML</span> <span>95%</span>
            </h3>
          </div>
          <div class="bar" data-aos="fade-right">
            <h3>
              <span>CSS</span> <span>80%</span>
            </h3>
          </div>
          <div class="bar" data-aos="fade-left">
            <h3>
              <span>JavaScript</span> <span>85%</span>
            </h3>
          </div>
          <div class="bar" data-aos="fade-right">
            <h3>
              <span>React</span> <span>70%</span>
            </h3>
          </div>
          <div class="bar" data-aos="fade-left">
            <h3>
              <span>Node.js</span> <span>75%</span>
            </h3>
          </div>
          <div class="bar" data-aos="fade-left">
            <h3>
              <span>MongoDb</span> <span>80%</span>
            </h3>
          </div>
          <div class="bar" data-aos="fade-left">
            <h3>
              <span>Git and Github</span> <span>65%</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

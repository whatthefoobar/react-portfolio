import React from 'react';
// import Footer from '../../components/Footer/Footer';

const About = () => {
  return (
    <section class="about" id="about">
      <h1 class="heading">
        <span>About me</span>
      </h1>

      <div class="biography">
        <p>
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
          <h2 className="bio-subtitle">Tech package:</h2>
          <h3>React</h3>
          <h3 className="bio-box">React Hooks</h3>
          <h3 className="bio-box">Context Api</h3>
          <h3 className="bio-box">Redux</h3>
          <h3 className="bio-box">Node.js</h3>
          <h3 className="bio-box">Express.js</h3>
          <h3 className="bio-box">Git</h3>
          <h3 className="bio-box">Github</h3>
          <h3 className="bio-box">MongoDB</h3>
          <h3 className="bio-box">Mongoose</h3>
          <h3 className="bio-box">Cloud Firestore</h3>
          <h3 className="bio-box">Firebase Auth</h3>
          <h3 className="bio-box">Sass</h3>
          <h3 className="bio-box">Styled Components</h3>
          <h3 className="bio-box">Figma</h3>
          <h3 className="bio-box">Responsive Design</h3>
          <h3 className="bio-box">VSCode</h3>
        </div>

        {/* <a href="/" class="btn" alt="download">
          Download CV
        </a> */}
      </div>
    </section>
  );
};

export default About;

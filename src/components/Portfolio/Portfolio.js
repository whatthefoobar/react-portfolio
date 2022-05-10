import React from 'react';
// import img1 from '../../img/img1.jpg';
import p1 from '../../img/p1.jpg';
import p2 from '../../img/p2.jpg';
import p3 from '../../img/p3.jpg';
import p4 from '../../img/p4.jpg';
import p5 from '../../img/p5.png';
import p6 from '../../img/p6.png';

const Portfolio = () => {
  return (
    <section class="portfolio" id="portfolio">
      <h1 class="heading" data-aos="fade-up">
        <span>portfolio</span>
      </h1>

      <div class="box-container">
        <div class="box" data-aos="zoom-in">
          <img src={p1} alt="" />
          <h3>Artist portfolio</h3>
          <div className="btns">
            <button className="btn preview">
              <a href="/">Preview</a>
            </button>

            <button className="btn code">
              <a href="/">Code</a>
            </button>
          </div>
        </div>

        <div class="box" data-aos="zoom-in">
          <img src={p2} alt="" />
          <h3>Web development</h3>
          <div className="btns">
            <button className="btn preview">
              <a href="/">Preview</a>
            </button>

            <button className="btn code">
              <a href="/">Code</a>
            </button>
          </div>
        </div>

        <div class="box" data-aos="zoom-in">
          <img src={p3} alt="project" />
          <h3>web development</h3>
          <div className="btns">
            <button className="btn preview">
              <a href="/">Preview</a>
            </button>

            <button className="btn code">
              <a href="/">Code</a>
            </button>
          </div>
        </div>

        <div class="box" data-aos="zoom-in">
          <img src={p4} alt="project" />
          <h3>Web development</h3>
          <div className="btns">
            <button className="btn preview">
              <a href="/">Preview</a>
            </button>

            <button className="btn code">
              <a href="/">Code</a>
            </button>
          </div>
        </div>

        <div class="box" data-aos="zoom-in">
          <img src={p5} alt="project" />
          <h3>Web development</h3>
          <div className="btns">
            <button className="btn preview">
              <a href="/">Preview</a>
            </button>

            <button className="btn code">
              <a href="/">Code</a>
            </button>
          </div>
        </div>

        <div class="box" data-aos="zoom-in">
          <img src={p6} alt="project" />
          <h3>Web development</h3>
          <div className="btns">
            <button className="btn preview">
              <a href="/">Preview</a>
            </button>

            <button className="btn code">
              <a href="/">Code</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

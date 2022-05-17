import React from 'react';
// import img1 from '../../img/img1.jpg';
import Footer from '../../components/Footer/Footer';
import p1 from '../../img/p1.jpg';
import p2 from '../../img/p2.jpg';
import p3 from '../../img/p3.jpg';
import p4 from '../../img/p4.jpg';
import p5 from '../../img/p5.png';
import p6 from '../../img/p6.png';
import p7 from '../../img/p7.png';
import p8 from '../../img/p8.PNG';
import p9 from '../../img/p9.PNG';
import p10 from '../../img/p10.PNG';

const Portfolio = () => {
  return (
    <section class="portfolio" id="portfolio">
      <h1 class="heading" data-aos="fade-up">
        <span>portfolio</span>
      </h1>

      <div class="box-container">
        <div class="box" data-aos="zoom-in">
          <img src={p6} alt="project" />
          <h3>MERN e-commerce app</h3>
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
          <img src={p9} alt="project" />
          <h3>LinkedIn Clone</h3>
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
          <img src={p10} alt="project" />
          <h3>Gmail Clone</h3>
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
          <img src={p7} alt="project" />
          <h3>50 days of Code</h3>
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
          <h3>React news app</h3>
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
          <img src={p8} alt="project" />
          <h3>Killer quiz</h3>
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
          <h3>Phaser RPG Game</h3>
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
          <h3>Killer Zodiac app</h3>
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
          <h3>Movie app</h3>
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
      </div>

      <Footer />
    </section>
  );
};

export default Portfolio;

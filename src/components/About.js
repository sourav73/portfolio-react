import user from '../img/user.png';
const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">About</h2>
      <div className="about-container py-5 px-3 max-width">
        <div className="row">
          <div className="col-md-6">
            <div className="my-img d-flex align-items-center justify-content-center">
              <img src={user} alt="Me" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="my-info text-center text-md-start px-3 mt-4 mt-md-0">
              <h2>Who Is This Guy?</h2>
              <span className="profession">Web Developer</span>
              <p className="text">I'm Md Sahabuddin, a Front-End Developer from Dhaka, Bangladesh. I work with HTML, CSS, Bootstrap,JavaScript,
                jQuery. Nowadays, I'm working on my React projects. Please feel free to contact me if you need any further information.
                <br /><br />
                <span className="mail text-black"><i className="fa-solid fa-envelope-open"></i> mdsehab1@gmail.com</span></p>
              <div className="social-media">
                <a href="mailto: mdsehab1@gmail.com"><i className="fa-solid fa-envelope-open"></i></a>
                <a href="https://github.com/sourav73" rel="noreferrer" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="#footer"><i className="fa-solid fa-map-location-dot"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-card py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 mb-2">
              <div className="about-card-content text-center">
                <i className="fa-solid fa-rocket"></i>
                <h3>Fast</h3>
                <p>Fast load time is my highest priority.</p>
              </div>
            </div>
            <div className="col-sm-4 mb-2">
              <div className="about-card-content text-center">
                <i className="fa-solid fa-mobile-screen-button"></i>
                <h3>Responsive</h3>
                <p>My layouts will work on any device.</p>
              </div>
            </div>
            <div className="col-sm-4 mb-2">
              <div className="about-card-content text-center">
                <i className="fa-solid fa-lightbulb"></i>
                <h3>Intuitive</h3>
                <p>Strong preference for easy to use.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
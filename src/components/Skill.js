import work from '../img/working.jpg';
const Skill = () => {
  return (
    <section id="skills" className="py-4">
      <h2 className="section-title">Skills</h2>
      <div className="container py-5 max-width">
        <div className="row text-center text-md-start">
          <div className="col-md-6">
            <div className="mb-3 mb-md-0">
              <img className="w-100 rounded-3" src={work} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="skill-box">
              <div className="skills">
                <h3 className="mb-3">Development</h3>
                <div>
                  <span><i className="fa-brands fa-html5"></i> HTML</span>
                  <span><i className="fa-brands fa-css3"></i> CSS</span>
				  <span><i className="fa-brands fa-sass"></i> SASS</span>
                  <span><i className="fa-brands fa-bootstrap"></i> Bootstrap</span>
                  <span><i className="fa-brands fa-js"></i> JavaScript</span>
                  <span><i className="fa-brands fa-js"></i> JQuery</span>
                  <span><i className="fa-brands fa-react"></i> React</span>
                </div>
              </div>
              <div className="utilities">
                <h3 className="mb-3">Utilities</h3>
                <div>
                  <span><i className="fa-brands fa-github"></i> GitHub</span>
                  <span><i className="fa-brands fa-figma"></i> Figma</span>
                  <span><i className="fa-solid fa-paintbrush"></i> Photoshop</span>
                  <span><i className="fa-brands fa-font-awesome"></i> Font-Awesome</span>
                  <span><i className="fa-solid fa-font"></i> Material Icon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
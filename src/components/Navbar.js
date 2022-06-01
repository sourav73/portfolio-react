import { useState } from 'react';
import { Link } from 'react-scroll';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // For toggling back to top
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      document.querySelector('.go-top').classList.add('show');
    } else {
      document.querySelector('.go-top').classList.remove('show');
    }
  });

  const handleNavToggle = (e) => {
    setIsOpen(!isOpen);
  }

  const closeNav = () => {
    setIsOpen(false);
  }

  return (
    <header>
      <nav className="nav-bar d-flex justify-content-between align-items-center max-width" id="nav-bar">
        <div className="nav-brand">
          <a href="#home" className="ms-3 ms-lg-0">SB</a>
        </div>
        <div className="main-nav d-flex">
          <ul className={`d-flex p-0 m-0 ${isOpen ? "show" : ""}`}>
            <li><Link activeClass="active" spy={true} offset={-100} to="home" className="nav_link" onClick={closeNav}>Home</Link></li>
            <li><Link activeClass="active" spy={true} offset={-100} to="about" className="nav_link" onClick={closeNav}>About</Link></li>
            <li><Link activeClass="active" spy={true} offset={-100} to="skills" className="nav_link" onClick={closeNav}>Skills</Link></li>
            <li><Link activeClass="active" spy={true} offset={-100} to="works" className="nav_link" onClick={closeNav}>Works</Link></li>
            <li><a href="#footer" className="pe-0 pe-lg-3 nav_link" onClick={closeNav}>Contact</a></li>
          </ul>
          <div className="nav-toggle">
            <i className={`fa-solid ${isOpen ? "fa-x" : "fa-bars"}`} onClick={handleNavToggle}></i>
          </div>
        </div>
      </nav>
      <a href="#home" className="go-top"><i className="fa-solid fa-angle-up"></i></a>
    </header>
  );
}

export default Navbar;
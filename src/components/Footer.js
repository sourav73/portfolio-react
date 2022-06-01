const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact text-center text-md-start mb-4 mb-md-0">
              <p>Get In <span>Touch</span></p>
              <p><i className="fa-solid fa-square-phone"></i> +8801521435569</p>
              <p><i className="fa-solid fa-envelope-open"></i> mdsehab1@gmail.com</p>
              <p><i className="fa-solid fa-location-dot"></i> Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="copy text-center text-md-end">
              <div className="social-links mb-4 pe-0 pe-md-5">
                <a href="mailto:mdsehab1@gmail.com"><i className="fa-solid fa-envelope-open"></i></a>
                <a href="https://github.com/sourav73" rel="noreferrer" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.facebook.com/msourav73" rel="noreferrer" target="_blank" className="me-2"><i className="fa-brands fa-facebook"></i></a>
              </div>
              <p>2022 &copy; <span>Md Sahabuddin</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
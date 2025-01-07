import React from "react";

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo-section'>
            <img 
              src={`${process.env.PUBLIC_URL}/images/skilluplogo/logo.jpg`} 
              alt="Skillup Placement Logo" 
              className="logo-image" 
            />
            <div className="text-section">
              <h1>Skillup Placement</h1>
              <span>EDUCATION & LEARNING</span>
            </div>
          </div>

          <div className='social'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-facebook-f icon'></i>
            </a>
            <a href="https://www.instagram.com/dacoe_karad_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-instagram icon'></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-twitter icon'></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-youtube icon'></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;

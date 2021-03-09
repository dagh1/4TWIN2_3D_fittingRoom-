import React from "react";

const Footer = () => {
  return (
    <footer className='footer-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6'>
            <div className='single-footer-widget'>
              <div className='logo'>
                <a href='index.html'>
                  <img src='' alt='logo' />
                </a>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida.
              </p>
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <div className='single-footer-widget'>
              <h3>Quick Links</h3>
              <ul className='quick-links'>
                <li>
                  <a href='about.html'>About Us</a>
                </li>
                <li>
                  <a href='faq.html'>Faq&#x27;s</a>
                </li>
                <li>
                  <a href='customer-service.html'>Customer Services</a>
                </li>
                <li>
                  <a href='contact-us.html'>Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <div className='single-footer-widget'>
              <h3>Information</h3>
              <ul className='information-links'>
                <li>
                  <a href='about.html'>About Us</a>
                </li>
                <li>
                  <a href='contact-us.html'>Contact Us</a>
                </li>
                <li>
                  <a href='sizing-guide.html'>Sizing Guide</a>
                </li>
                <li>
                  <a href='customer-service.html'>Customer Services</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <div className='single-footer-widget'>
              <h3>Contact Us</h3>
              <ul className='footer-contact-info'>
                <li>
                  <i className='fas fa-map-marker-alt'></i>Location: 2750 Quadra
                  Street <br /> Victoria, Canada
                </li>
                <li>
                  <i className='fas fa-phone'></i>Call Us:{" "}
                  <a href='tel:(+123) 456-7898'>(+123) 456-7898</a>
                </li>
                <li>
                  <i className='far fa-envelope'></i>Email Us:{" "}
                  <a href='cdn-cgi/l/email-protection.html#89fafcf9f9e6fbfdc9e7e6ffe0e7eca7eae6e4'>
                    <span
                      className='__cf_email__'
                      data-cfemail='45363035352a3731052b2a332c2b206b262a28'
                    >
                      [email&#160;protected]
                    </span>
                  </a>
                </li>
                <li>
                  <i className='fas fa-fax'></i>Fax:{" "}
                  <a href='tel:+123456'>+123456</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright-area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-6'>
              <p>
                Copyright @ 2020 Novine. All Rights Reserved By{" "}
                <a href='https://envytheme.com/' target='_blank'>
                  EnvyTheme.com
                </a>
              </p>
            </div>
            <div className='col-lg-6 col-md-6'>
              <ul className='payment-card'>
                <li>
                  <a target='_blank' href='#'>
                    <img src='' alt='image' />
                  </a>
                </li>
                <li>
                  <a target='_blank' href='#'>
                    <img src='' alt='image' />
                  </a>
                </li>
                <li>
                  <a target='_blank' href='#'>
                    <img src='' alt='image' />
                  </a>
                </li>
                <li>
                  <a target='_blank' href='#'>
                    <img src='' alt='image' />
                  </a>
                </li>
                <li>
                  <a target='_blank' href='#'>
                    <img src='' alt='image' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

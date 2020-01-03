import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section section-contact">
      <div className="animate-up">
        <h2 className="section-title">Contact Me</h2>
        <div className="row">
          <div className="col-sm-6">
            <div
              className="section-box contact-form"
              style={{ minHeight: '488px' }}
            >
              <h3>Feel free to contact me</h3>
              <form
                className="contactForm"
                action="php/contact_form.php"
                method="post"
              >
                <div className="input-field">
                  <input className="contact-name" type="text" name="name" />
                  <span className="line" />
                  <label>Name</label>
                </div>
                <div className="input-field">
                  <input className="contact-email" type="email" name="email" />
                  <span className="line" />
                  <label>Email</label>
                </div>
                <div className="input-field">
                  <input
                    className="contact-subject"
                    type="text"
                    name="subject"
                  />
                  <span className="line" />
                  <label>Subject</label>
                </div>
                <div className="input-field">
                  <textarea
                    className="contact-message"
                    rows={4}
                    name="message"
                    defaultValue=""
                  />
                  <span className="line" />
                  <label>Message</label>
                </div>
                <span className="btn-outer btn-primary-outer ripple">
                  <input
                    className="contact-submit btn btn-lg btn-primary"
                    type="submit"
                    defaultValue="Send"
                  />
                </span>
                <div className="contact-response" />
              </form>
            </div>
          </div>

          <div className="col-sm-6">
            <div
              className="section-box contact-info has-map"
              style={{ minHeight: '488px' }}
            >
              <ul className="contact-list">
                <li className="clearfix">
                  <strong>Address</strong>
                  <span>Belgium, Brussels, Liutte 27, BE</span>
                </li>
                <li className="clearfix">
                  <strong>phone</strong>
                  <span>
                    <a href="tel:+12562548456">+1 256 254 84 56</a>
                  </span>
                </li>
                <li className="clearfix">
                  <strong>E-mail</strong>
                  <span>
                    <a href="mailto:robertsmith@company.com">
                      robertsmith@company.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>
            <div id="map" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

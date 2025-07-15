 import React from 'react'
 import './Contact.css' 

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-description">
        I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
      </p>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3 className='contact-info-title'>Contact Information</h3>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <div>
              <strong>Email</strong>
              <p>lokeshnagarajan151105@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <div>
              <strong>Phone</strong>
              <p>+91 9344362544</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div>
              <strong>Location</strong>
              <p>Chennai, Tamil Nadu, India</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">💼</span>
            <div>
              <strong>LinkedIn</strong>
              <a href="https://linkedin.com/in/lokesh-rn" target="_blank" rel="noopener noreferrer">linkedin.com/in/lokesh-rn</a>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">💻</span>
            <div>
              <strong>GitHub</strong>
              <a href="https://github.com/Lokesh-1511" target="_blank" rel="noopener noreferrer">github.com/Lokesh-1511</a>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <h3>Send me a message</h3>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

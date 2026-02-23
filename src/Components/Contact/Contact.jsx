import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending...');

    const formData = new FormData(event.target);
    formData.append("access_key", "e2c9e96a-e692-42ae-9d9e-73d64eba07c1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await res.json();

      if (result.success) {
        setStatus("✅ Thank you! Your message has been sent.");
        event.target.reset(); // clear form
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Network error. Please try again later.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>I'm currently available</h1>
        <img src={theme_pattern} alt="design pattern" />
      </div>

      <div className="contact-section">
        {/* LEFT */}
        <div className="contact-left">
          <h1><span>Let's talk</span></h1>
          <p>
           I’m a frontend developer actively seeking opportunities to build real-world projects and grow my skills in a professional environment.

          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="email" />
              <p>poojklh15@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="phone" />
              <p>+91 8115417276</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>Mau, India</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Write your message here</label>
          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit now
          </button>

          {/* STATUS MESSAGE */}
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container" style={{ maxWidth: 540 }}>
      <h1 className="text-center mb-4">Contact Us</h1>
      <p className="mb-4 text-center">
        Have a question, suggestion, or want to make a reservation? Reach out to Burger Lab and we'll get back to you soon!
      </p>

      {!submitted ? (
        <form
          className="p-4"
          onSubmit={handleSubmit}
          autoComplete="off"
          style={{
            background: 'linear-gradient(135deg, #232526 0%, #1a1919 100%)',
            borderRadius: '20px',
            boxShadow: '0 6px 24px 0 rgba(0,0,0,0.7)',
            border: '1px solid #333'
          }}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label" style={{ color: '#ffbe33', fontWeight: 500 }}>Full Name</label>
            <div className="input-group">
              <span className="input-group-text" style={{ background: '#181818', borderRight: '0', color: '#ffbe33' }}>
                <i className="bi bi-person-fill"></i>
              </span>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                style={{ background: '#181818', color: '#fff', borderLeft: '0' }}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{ color: '#ffbe33', fontWeight: 500 }}>Email Address</label>
            <div className="input-group">
              <span className="input-group-text" style={{ background: '#181818', borderRight: '0', color: '#ffbe33' }}>
                <i className="bi bi-envelope-fill"></i>
              </span>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                style={{ background: '#181818', color: '#fff', borderLeft: '0' }}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label" style={{ color: '#ffbe33', fontWeight: 500 }}>Your Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              rows={4}
              style={{
                background: '#181818',
                color: '#fff',
                border: '1px solid #333',
                borderRadius: '8px'
              }}
            ></textarea>
          </div>
          <div className="d-grid mt-4">
            <button type="submit" className="btn" style={{
              background: 'linear-gradient(90deg, #ffbe33 0%, #ff8c24 100%)',
              color: '#151515',
              fontWeight: 'bold',
              border: 'none',
              padding: '12px 0',
              borderRadius: '8px',
              fontSize: '1.1rem',
              boxShadow: '0 2px 12px 0 #000a'
            }}>
              Send Message
            </button>
          </div>
        </form>
      ) : (
        <div className="alert mt-4 text-center" style={{ background: '#232323', color: '#fff', borderColor: '#222', borderRadius: 16 }}>
          Thank you for contacting Burger Lab! We'll respond to your message soon.
        </div>
      )}
    </div>
  );
}

export default Contact;
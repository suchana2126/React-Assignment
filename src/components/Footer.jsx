function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <p className="section-label">LET'S CONNECT</p>
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-card">
        <p>Have a project or opportunity in mind?</p>
        <p>I'd love to hear from you.</p>

        <div className="contact-details">
          <p>📧 suchana@example.com</p>
          <p>📍 Kolkata, India</p>
        </div>

        <a href="mailto:suchana@example.com" className="contact-btn">
          Send Me an Email
        </a>
      </div>
    </section>
  );
}

export default Contact;
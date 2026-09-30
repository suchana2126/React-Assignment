function About() {
  return (
    <section id="about" className="section">
      <p className="section-label">GET TO KNOW ME</p>
      <h2 className="section-title">About Me</h2>

      <div className="about-card">
        <div>
          <h3>Hello! I'm Suchana 👋</h3>
          <p>
            I am a BCA student with a strong interest in software development
            and web technologies. I enjoy learning programming and building
            creative projects.
          </p>

          <p>
            I have a good understanding of Java and I am also exploring
            React, JavaScript, HTML, CSS and MySQL.
          </p>
        </div>

        <div className="about-info">
          <p><strong>Name:</strong> Suchana Palai</p>
          <p><strong>Course:</strong> BCA</p>
          <p><strong>Year:</strong> 4th Year</p>
          <p><strong>Interest:</strong> Software Development</p>
        </div>
      </div>
    </section>
  );
}

export default About;
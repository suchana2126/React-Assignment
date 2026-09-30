function Skills() {
  const skills = [
    "Java",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "MySQL",
    "Python",
    "Git"
  ];

  return (
    <section id="skills" className="section">
      <p className="section-label">WHAT I KNOW</p>
      <h2 className="section-title">My Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
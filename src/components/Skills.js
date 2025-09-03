import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">

        {/* Languages */}
        <div className="skills-row">
          <h3 className="skills-category">Languages</h3>
          <div className="skills-tiles">
            <span>C++</span>
            <span>Python</span>
            <span>Java</span>
            <span>C#</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>Golang</span>
            <span>Kotlin</span>
            <span>SQL</span>
          </div>
        </div>

        {/* Frameworks */}
        <div className="skills-row">
          <h3 className="skills-category">Frameworks</h3>
          <div className="skills-tiles">
            <span>React.js</span>
            <span>Angular.js</span>
            <span>Node.js</span>
            <span>Next.js</span>
            <span>Django</span>
            <span>Flask</span>
            <span>JUnit</span>
            <span>FastAPI</span>
          </div>
        </div>

        {/* Automation Frameworks */}
        <div className="skills-row">
          <h3 className="skills-category">Automation Frameworks</h3>
          <div className="skills-tiles">
            <span>Playwright</span>
            <span>Cypress</span>
            <span>Jest</span>
            <span>Selenium</span>
          </div>
        </div>

        {/* Databases */}
        <div className="skills-row">
          <h3 className="skills-category">Databases</h3>
          <div className="skills-tiles">
            <span>Redis</span>
            <span>MySQL</span>
            <span>MongoDB</span>
            <span>GraphQL</span>
            <span>PostgreSQL</span>
            <span>Cassandra</span>
          </div>
        </div>

        {/* Performance Engineering Tools */}
        <div className="skills-row">
          <h3 className="skills-category">Performance Engineering Tools</h3>
          <div className="skills-tiles">
            <span>JMeter</span>
            <span>LoadRunner</span>
          </div>
        </div>

        {/* API Tools */}
        <div className="skills-row">
          <h3 className="skills-category">API Tools</h3>
          <div className="skills-tiles">
            <span>Postman</span>
            <span>SoapUI</span>
            <span>CA DevTest</span>
            <span>Hoppscotch</span>
          </div>
        </div>

        {/* Domains */}
        <div className="skills-row">
          <h3 className="skills-category">Domains</h3>
          <div className="skills-tiles">
            <span>Payments (ISO 20022)</span>
            <span>Banking</span>
            <span>Finance</span>
            <span>Insurance</span>
            <span>Indirect Tax</span>
          </div>
        </div>

        {/* Others */}
        <div className="skills-row">
            <h3 className="skills-category">Other</h3>
            <div className="skills-tiles">
              <span className="long-skill">System Design</span>
              <span>Salesforce</span>
              <span className="long-skill">Microsoft Dynamics 365</span>
              <span>SAP</span>
              <span>LaTeX</span>
              <span className="long-skill">Amazon Web Services</span>
            </div>
        </div>


      </div>
    </section>
  );
}

import React from "react";

const SKILLS = [
  {
    category: "Languages",
    items: ["C++", "Python", "Java", "JavaScript", "TypeScript", "Golang", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["React.js", "Angular.js", "Node.js", "Next.js", "Django", "Flask", "JUnit", "FastAPI"],
  },
  {
    category: "Automation Frameworks",
    items: ["Playwright", "Cypress", "Selenium"],
  },
  {
    category: "Databases",
    items: ["Redis", "MySQL", "MongoDB", "GraphQL", "PostgreSQL"],
  },
  {
    category: "Performance Engineering Tools",
    items: ["JMeter", "LoadRunner"],
  },
  {
    category: "Other",
    items: ["System Design", "Amazon Web Services", "Design Patterns"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mb-12">
      <h3 className="text-sm text-gray-400">SKILLS</h3>
      <h2 className="text-3xl font-serif mt-2 mb-6">Skills & Tools</h2>

      <div className="space-y-6">
        {SKILLS.map((group) => (
          <div
            key={group.category}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
          >
            <div className="md:col-span-3">
              <h4 className="text-lg font-medium">{group.category}</h4>
            </div>

            <div className="md:col-span-9">
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="px-3 py-2 border rounded-full text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

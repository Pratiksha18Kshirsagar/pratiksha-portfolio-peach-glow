
import React from 'react';
import { Code, Server, Database } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code size={24} />,
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: ["Node.js", "Express"]
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: ["MongoDB"]
    },
    {
      title: "Tools & Others",
      icon: <Code size={24} />,
      skills: ["Git", "VS Code", "Postman", "REST APIs" ,"Netlify" , "Render" , "Vercel"]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-peach transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-peach-light p-3 rounded-full mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="inline-block h-2 w-2 bg-peach rounded-full mr-2"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  const educationHistory = [
    {
      id: 1,
      degree: "B.E. in Computer Science and Engineering",
      institution: "Basavakayan Engineering College, Basavakalyan, Bidar, Karnataka",
      year: "2025",
      score: "CGPA - 9.05"
    },
    {
      id: 2,
      degree: "12th",
      institution: "Alva's PU College, Moodubidre, Mangaluru, Karnataka",
      year: "2021",
      score: "90.5%"
    },
    {
      id: 3,
      degree: "10th SSLC",
      institution: "Florence English Medium School, Bengaluru, Karnataka",
      year: "2019",
      score: "90.88%"
    }
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <div className="max-w-3xl mx-auto">
          {educationHistory.map((item, index) => (
            <div 
              key={item.id}
              className={`relative pl-10 pb-10 ${
                index === educationHistory.length - 1 ? '' : 'border-l-2 border-peach'
              } animate-fade-in`}
              style={{ animationDelay: `${index * 0.2 + 0.3}s` }}
            >
              <div className="absolute -left-3 top-0 bg-peach-light border-4 border-white rounded-full p-2">
                <GraduationCap size={24} className="text-peach-dark" />
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-start flex-wrap mb-2">
                  <h3 className="text-xl font-bold text-foreground">{item.degree}</h3>
                  <span className="bg-peach-light text-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {item.year}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-2">{item.institution}</p>
                <p className="text-sm font-medium">Score: {item.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

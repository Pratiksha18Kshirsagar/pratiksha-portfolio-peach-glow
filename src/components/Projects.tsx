
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Wanderlust - Airbnb Clone",
      description: "A full-stack Airbnb clone with booking features, user authentication, and property listings. Built with React, Node.js, Express, and MongoDB.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "Spotify Clone",
      description: "A music streaming application that mimics Spotify's core features including playlists, music player, and user profiles. Uses React for frontend and Node.js for backend.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "Task Manager",
      description: "A comprehensive task management application with features like task categories, due dates, priorities, and progress tracking. Built on the MERN stack.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "Netflix Clone",
      description: "A Netflix-inspired streaming platform with movie browsing, categorization, and user authentication. Utilizes React, Express, and external movie API.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="border-peach text-foreground hover:bg-peach-light">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Button>
                  <Button size="sm" className="bg-peach hover:bg-peach-dark text-foreground">
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

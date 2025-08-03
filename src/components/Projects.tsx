
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Wanderlust - Airbnb ",
      description: "A full-stack Airbnb clone with booking features, user authentication, and property listings. Built with Node.js, Ejs, Express, and MongoDB.",
      image: "https://i.ibb.co/Q37CT63F/Screenshot-2025-04-30-011609.png",
      github: "https://github.com/Pratiksha18Kshirsagar/Apna-College-web/tree/main/Air-BnB",
      demo: "https://airbnb-jz4y.onrender.com/listings"
    },
    {
      title: "GreenCart-Ecommerce Website",
      description: "GreenCart is a grocery web app with cart, online payment via Stripe, and real-time order updates using webhooks.Built with Node.js, React, Express, and MongoDB.",
      image: "https://i.ibb.co/Cs6khjCB/Screenshot-2025-08-03-120641.png",
      github: "https://github.com/Pratiksha18Kshirsagar/GreenCart",
      demo: "https://green-cart-nu-eight.vercel.app/"
    },
    {
      title: "Streamify-Video-chat",
      description: "Streamify is a real-time video chat app with friend requests, chat, and calling features using Stream API, TanStack Query, and protected user routes.Built with Node.js, React, Express, and MongoDB.",
      image: "https://i.ibb.co/v6zpzV6n/Screenshot-2025-08-03-123535.png",
      github: "https://github.com/Pratiksha18Kshirsagar/streamify-video-calls-master",
      demo: "https://streamify-video-calls-master-1-x3a8.onrender.com/login"
    },

    {
      title: "Task Manager",
      description: "A feature-rich task management application with task categorization, priority levels, and deadline tracking.",
      image: "https://i.ibb.co/chXD6jJt/Screenshot-2025-05-01-124757.png",
      github: "https://github.com/Pratiksha18Kshirsagar/Reactjs/tree/main/To-do-list",
      demo:"#"
    },
    {
      title: "Netflix Clone",
      description: "Video streaming platform with content categorization, user profiles, and recommendation engine.",
      image: "https://i.ibb.co/DhCg0Rj/Screenshot-2025-04-30-005452.png",
      github: "https://github.com/Pratiksha18Kshirsagar/Sigma-web-dev/tree/main/Projects!!/Netflix-using-html-css",
      demo: "https://girishcpatil.github.io/netflix/"
    },
    {
      title: "Spotify",
      description: "Music streaming application with playlist creation, artist profiles, and song recommendations.",
      image: "https://i.ibb.co/W4Bk92c5/Screenshot-2024-07-24-214306.png",
      github: "https://github.com/Pratiksha18Kshirsagar/SPOTIFY-CLONE",
       demo:"#"
    },
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
                    <Github className="mr-2 h-4 w-4" /> <a href={project.github}>Code</a>
                  </Button>
                  <Button size="sm" className="bg-peach hover:bg-peach-dark text-foreground">
                    <ExternalLink className="mr-2 h-4 w-4" /> <a href={project.demo}>Demo</a>
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


import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-slide-in">
            <p className="text-lg mb-4">
              Hello! I'm Pratiksha Kshirsagar, a MERN Stack Developer passionate about building web applications 
              that solve real-world problems. With strong foundations in both frontend and backend technologies,
              I create seamless user experiences backed by robust server architecture.
            </p>
            <p className="text-lg mb-6">
              I'm constantly exploring new technologies and methods to improve my skills. 
              I believe in writing clean, maintainable code and take pride in paying attention to details 
              that make applications both functional and intuitive.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-peach-light p-4 rounded-lg text-center">
                <h3 className="font-bold text-lg mb-2">Clean Code</h3>
                <p className="text-sm">I write code that's readable and maintainable</p>
              </div>
              <div className="bg-peach-light p-4 rounded-lg text-center">
                <h3 className="font-bold text-lg mb-2">Problem-Solving</h3>
                <p className="text-sm">I enjoy finding innovative solutions to complex problems</p>
              </div>
              <div className="bg-peach-light p-4 rounded-lg text-center">
                <h3 className="font-bold text-lg mb-2">Adaptable</h3>
                <p className="text-sm">I quickly learn and adapt to new technologies</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-peach shadow-lg">
              <img
                src="https://i.ibb.co/GQ0hdGJ9/Pratiksha-img.jpg" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

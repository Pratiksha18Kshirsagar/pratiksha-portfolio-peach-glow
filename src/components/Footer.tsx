
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">© 2025 Pratiksha Kshirsagar. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Pratiksha18Kshirsagar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-peach transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/pratiksha-kshirsagar-9751ab252/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-peach transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:kshirsagarpratiksha1820@gmail.com" 
              className="text-gray-600 hover:text-peach transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

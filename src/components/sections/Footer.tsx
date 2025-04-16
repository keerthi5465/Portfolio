
import { motion } from 'framer-motion';
import { Github, Linkedin, Code, Mail, BookCopy, Briefcase, UserCircle, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-6 text-portfolio-primary">Thank You for Visiting!</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Thank you for taking the time to explore my portfolio. I'm excited about the possibility of working together and discussing how my skills and experiences could contribute to your team or project.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <motion.a
            href="https://www.linkedin.com/in/keerthi5465/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full bg-portfolio-accent3/30 flex items-center justify-center hover:bg-portfolio-accent3/50 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} className="text-portfolio-primary" />
          </motion.a>
          
          <motion.a
            href="https://github.com/keerthi5465"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full bg-portfolio-accent/30 flex items-center justify-center hover:bg-portfolio-accent/50 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={24} className="text-portfolio-primary" />
          </motion.a>
          
          <motion.a
            href="https://leetcode.com/u/Strict_Hayami/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full bg-portfolio-accent2/30 flex items-center justify-center hover:bg-portfolio-accent2/50 transition-colors"
            aria-label="LeetCode Profile"
          >
            <Code size={24} className="text-portfolio-primary" />
          </motion.a>
          
          <motion.a
            href="mailto:keerthikorrapati555@gmail.com"
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full bg-portfolio-accent4/30 flex items-center justify-center hover:bg-portfolio-accent4/50 transition-colors"
            aria-label="Email Contact"
          >
            <Mail size={24} className="text-portfolio-primary" />
          </motion.a>
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <motion.a 
            href="#about" 
            whileHover={{ y: -3 }}
            className="flex flex-col items-center"
          >
            <div className="w-10 h-10 rounded-full bg-portfolio-primary2/30 flex items-center justify-center mb-2">
              <UserCircle size={20} className="text-portfolio-primary" />
            </div>
            <span className="text-xs text-gray-600">About</span>
          </motion.a>
          
          <motion.a 
            href="#education" 
            whileHover={{ y: -3 }}
            className="flex flex-col items-center"
          >
            <div className="w-10 h-10 rounded-full bg-portfolio-accent3/30 flex items-center justify-center mb-2">
              <BookCopy size={20} className="text-portfolio-primary" />
            </div>
            <span className="text-xs text-gray-600">Education</span>
          </motion.a>
          
          <motion.a 
            href="#projects" 
            whileHover={{ y: -3 }}
            className="flex flex-col items-center"
          >
            <div className="w-10 h-10 rounded-full bg-portfolio-accent/30 flex items-center justify-center mb-2">
              <Briefcase size={20} className="text-portfolio-primary" />
            </div>
            <span className="text-xs text-gray-600">Projects</span>
          </motion.a>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Keerthi Korrapati. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

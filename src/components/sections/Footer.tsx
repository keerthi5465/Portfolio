
import { motion } from 'framer-motion';
import { Github, Linkedin, Code, Mail, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-6">Thank You for Visiting!</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Thank you for taking the time to explore my portfolio. I'm excited about the possibility of working together and discussing how my skills and experiences could contribute to your team or project.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <motion.a
            href="https://www.linkedin.com/in/keerthi5465/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </motion.a>
          
          <motion.a
            href="https://github.com/keerthi5465"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </motion.a>
          
          <motion.a
            href="https://leetcode.com/u/Strict_Hayami/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="LeetCode Profile"
          >
            <Code size={24} />
          </motion.a>
          
          <motion.a
            href="mailto:keerthikorrapati555@gmail.com"
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Email Contact"
          >
            <Mail size={24} />
          </motion.a>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Keerthi Korrapati. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

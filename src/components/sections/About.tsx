
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Linkedin, Github, Code, BookOpen } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    { 
      icon: Linkedin, 
      url: "https://www.linkedin.com/in/keerthi5465/", 
      color: "text-blue-600",
      name: "LinkedIn"
    },
    { 
      icon: Github, 
      url: "https://github.com/keerthi5465", 
      color: "text-gray-800",
      name: "GitHub"
    },
    { 
      icon: Code, 
      url: "https://leetcode.com/u/Strict_Hayami/", 
      color: "text-yellow-600",
      name: "LeetCode"
    },
    { 
      icon: BookOpen, 
      url: "https://www.geeksforgeeks.org/user/korrapatkikib0i/", 
      color: "text-green-600",
      name: "GeeksforGeeks"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-portfolio-dark">About Me</h2>
          <div className="h-1 w-20 bg-portfolio-primary mx-auto mb-8"></div>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Welcome to my portfolio website! I'm a passionate and aspiring software engineer and 
            Data engineer with a strong desire to create innovative solutions and push the 
            boundaries of technology. With a deep love for coding and problem-solving, I am 
            constantly seeking opportunities to learn and grow in this ever-evolving field.
          </p>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            My journey in technology has equipped me with a diverse skill set spanning Python, Java, SQL, 
            and various frameworks like Flask and TensorFlow. I'm particularly interested in the 
            intersection of data analytics, machine learning, and software development.
          </p>
          
          {/* Resume Button */}
          <div className="mt-8 mb-10">
            <a 
              href="/lovable-uploads/fd632c9e-8d76-4e0a-b5dc-334ff089e205.png" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-portfolio-primary text-white font-medium hover:bg-portfolio-primary/90 transition-colors"
            >
              <FileText className="mr-2" size={18} />
              View Resume
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center group"
              >
                <div className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center 
                  shadow-md hover:shadow-lg transition-all duration-300 
                  ${social.color} group-hover:${social.color}/80`}>
                  <social.icon size={28} />
                </div>
                <span className="mt-2 text-xs text-gray-600">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

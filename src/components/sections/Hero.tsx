
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { ThreeScene } from '../3d/Scene';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* 3D Scene Background */}
      <ThreeScene />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              <span className="block">Hi, I'm</span>
              <span className="text-portfolio-accent block mt-2">Keerthi Korrapati</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-200 mb-8">
              Software Engineer & Data Engineer
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">
              Passionate about creating innovative solutions and pushing the boundaries of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-portfolio-accent text-white font-medium hover:bg-portfolio-accent/90 transition-colors duration-300"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a 
          href="#about" 
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors duration-300"
        >
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown className="animate-bounce" size={20} />
        </a>
      </motion.div>
    </section>
  );
};

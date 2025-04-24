
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="flex justify-center lg:justify-start mb-8">
              <Avatar className="h-32 w-32 border-4 border-portfolio-primary/20">
                <AvatarImage src="/lovable-uploads/3e9652d8-759e-4c6d-b4a4-42338784e62e.png" alt="Keerthi Korrapati" />
                <AvatarFallback>KK</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
              <span className="block">Hi, I'm</span>
              <span className="text-portfolio-primary block mt-2">Keerthi Korrapati</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-8">
              Software Engineer & Data Engineer
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
              Passionate about creating innovative solutions and pushing the boundaries of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-portfolio-primary text-white font-medium hover:bg-portfolio-primary/90 transition-colors duration-300"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-full border border-portfolio-primary text-portfolio-primary font-medium hover:bg-portfolio-primary/10 transition-colors duration-300"
              >
                View Projects
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/3e9652d8-759e-4c6d-b4a4-42338784e62e.png"
                alt="Keerthi Korrapati"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-primary/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a 
          href="#about" 
          className="flex flex-col items-center text-gray-600 hover:text-portfolio-primary transition-colors duration-300"
        >
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown className="animate-bounce" size={20} />
        </a>
      </motion.div>
    </section>
  );
};

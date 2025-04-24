import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Github, PenTool, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectProps {
  title: string;
  description: string;
  duration: string;
  tech: string[];
  github?: string;
  image: string;
  index: number;
}

const Project = ({ title, description, duration, tech, github, image, index }: ProjectProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full bg-white border border-gray-100 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar size={16} className="mr-1" />
              <span>{duration}</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((item, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-portfolio-accent3/20 text-sm text-gray-700">
                {item}
              </span>
            ))}
          </div>
          
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-portfolio-primary hover:text-portfolio-secondary transition-colors"
            >
              <Github size={20} className="mr-2" />
              <span>View Repository</span>
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "APNA – AI – Placement related portal",
      description: "Developed an AI-driven placement portal that utilizes NLP-based scoring to match candidate resumes with job profiles. Implemented an activity scoring system that evaluates candidates based on their LinkedIn and GitHub activity.",
      duration: "June 2023 - July 2024",
      tech: ["Python", "SQL", "LangChain", "Google Gemini API"],
      github: "https://github.com/thecloudcode/apna.ai",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Fitness Tracker – AI-Powered Activity Monitoring",
      description: "Designed a data-driven fitness tracking system that processes sensor data to monitor user activities. The system leverages machine learning models such as SVM, Random Forest, and Neural Networks for predictive analytics.",
      duration: "Oct 2023 - Nov 2023",
      tech: ["Python", "Machine Learning", "SVM", "Random Forest"],
      github: "https://github.com/Ajay-Chelliah/FitnessTracker",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Object Recognition System – AI-Based Object Detection",
      description: "Built an object recognition model using YOLOv8 to classify objects based on shape and color. Integrated bit counting techniques to improve detection accuracy and implemented tracking algorithms.",
      duration: "Nov 2023 - Dec 2023",
      tech: ["Python", "YOLOv8", "Supervision", "ByteTrack"],
      github: "https://github.com/keerthi5465/YOLOv8---Traffic",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-portfolio-neutral">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">Projects</h2>
          <div className="h-1 w-20 colorful-gradient mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in software development, data engineering, and AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              duration={project.duration}
              tech={project.tech}
              github={project.github}
              image={project.image}
              index={index}
            />
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-white backdrop-blur-lg rounded-lg shadow-lg p-8 border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Microsoft Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/c0b64276-6db5-48b5-8876-81eb964cd5d0.png" 
                alt="Azure Data Scientist Associate Certificate" 
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/c468be7f-a502-4fb3-8d89-9c4a35ce709f.png" 
                alt="Azure Data Fundamentals Certificate" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-3 text-portfolio-primary"><PenTool size={20} /></div>
              <p className="text-gray-600">AWS Certified Cloud Practitioner</p>
            </li>
            <li className="flex">
              <div className="mr-3 text-portfolio-primary"><PenTool size={20} /></div>
              <p className="text-gray-600">Microsoft Azure Fundamentals (AZ-900)</p>
            </li>
            <li className="flex">
              <div className="mr-3 text-portfolio-primary"><PenTool size={20} /></div>
              <p className="text-gray-600">Google Data Analytics Professional Certificate</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

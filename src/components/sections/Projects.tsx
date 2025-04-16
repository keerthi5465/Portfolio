import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Github, PenTool } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  duration: string;
  tech: string[];
  github?: string;
  index: number;
}

const Project = ({ title, description, duration, tech, github, index }: ProjectProps) => {
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
      className="bg-portfolio-dark/50 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-white/10"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="flex items-center text-sm text-gray-400">
            <Calendar size={16} className="mr-1" />
            <span>{duration}</span>
          </div>
        </div>
        
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-portfolio-primary/20 text-sm text-white">
              {item}
            </span>
          ))}
        </div>
        
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white hover:text-portfolio-accent transition-colors"
          >
            <Github size={20} className="mr-2" />
            <span>View Repository</span>
          </a>
        )}
      </div>
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
      description: "Developed an AI-driven placement portal that utilizes NLP-based scoring to match candidate resumes with job profiles. Implemented an activity scoring system that evaluates candidates based on their LinkedIn and GitHub activity. Additionally, integrated AI-powered chatbots designed to assist software engineers, AI engineers, and data scientists in job-related queries.",
      duration: "June 2023 - July 2024",
      tech: ["Python", "SQL", "LangChain", "Google Gemini API"],
      github: "https://github.com/thecloudcode/apna.ai"
    },
    {
      title: "Fitness Tracker – AI-Powered Activity Monitoring",
      description: "Designed a data-driven fitness tracking system that processes sensor data to monitor user activities. The system leverages machine learning models such as SVM, Random Forest, and Neural Networks for predictive analytics and activity recognition. Applied advanced data techniques including feature engineering, outlier detection, PCA, clustering, and custom algorithms for repetition counting.",
      duration: "Oct 2023 - Nov 2023",
      tech: ["Python", "Machine Learning", "SVM", "Random Forest", "Neural Networks"],
      github: "https://github.com/Ajay-Chelliah/FitnessTracker"
    },
    {
      title: "Object Recognition System – AI-Based Object Detection",
      description: "Built an object recognition model using YOLOv8 to classify objects based on shape and color. Integrated bit counting techniques to improve detection accuracy and implemented tracking algorithms like ByteTrack and Supervision to enhance object identification and movement.",
      duration: "Nov 2023 - Dec 2023",
      tech: ["Python", "YOLOv8", "Supervision", "ByteTrack"],
      github: "https://github.com/keerthi5465/YOLOv8---Traffic"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-portfolio-dark/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Projects</h2>
          <div className="h-1 w-20 bg-portfolio-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in software development, data engineering, and AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              duration={project.duration}
              tech={project.tech}
              github={project.github}
              index={index}
            />
          ))}
        </div>

        {/* Updated Achievements/Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-portfolio-dark/50 backdrop-blur-lg rounded-lg shadow-lg p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Certifications</h3>
          
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-3 text-portfolio-accent"><PenTool size={20} /></div>
              <p className="text-gray-300">AWS Certified Cloud Practitioner</p>
            </li>
            <li className="flex">
              <div className="mr-3 text-portfolio-accent"><PenTool size={20} /></div>
              <p className="text-gray-300">Microsoft Azure Fundamentals (AZ-900)</p>
            </li>
            <li className="flex">
              <div className="mr-3 text-portfolio-accent"><PenTool size={20} /></div>
              <p className="text-gray-300">Google Data Analytics Professional Certificate</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

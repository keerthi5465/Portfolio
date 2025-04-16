
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Server, Cpu, Users } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: JSX.Element;
  index: number;
}

const SkillCategory = ({ title, skills, icon, index }: SkillCategoryProps) => {
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
      className="bg-white/80 backdrop-blur-lg rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group border border-gray-100"
    >
      <div className="w-12 h-12 rounded-full bg-portfolio-accent3/20 flex items-center justify-center mb-4 group-hover:bg-portfolio-accent3/40 transition-colors duration-300">
        <div className="text-portfolio-primary">{icon}</div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      
      <ul className="space-y-2">
        {skills.map((skill, i) => (
          <li key={i} className="text-gray-600 flex items-center">
            <div className="w-2 h-2 rounded-full bg-portfolio-accent/50 mr-2"></div>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      skills: ["Python", "Java", "SQL", "Kotlin", "HTML", "CSS"]
    },
    {
      title: "Frameworks",
      icon: <Server size={24} />,
      skills: ["Flask", "TensorFlow"]
    },
    {
      title: "Tools/Platforms",
      icon: <Cpu size={24} />,
      skills: ["Pandas", "NumPy", "Scikit-learn", "OpenCV", "MySQL", "Power BI", "Azure"]
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">Skills</h2>
          <div className="h-1 w-20 colorful-gradient mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my journey in software development and data engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Server, Cpu, PenTool, Users } from 'lucide-react';
import { InteractiveSkillsSection } from '../3d/InteractiveSkills';

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
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group"
    >
      <div className="w-12 h-12 rounded-full bg-portfolio-primary/10 flex items-center justify-center mb-4 group-hover:bg-portfolio-primary/20 transition-colors duration-300">
        <div className="text-portfolio-primary">{icon}</div>
      </div>
      
      <h3 className="text-xl font-bold text-portfolio-primary mb-3">{title}</h3>
      
      <ul className="space-y-2">
        {skills.map((skill, i) => (
          <li key={i} className="text-gray-700 flex items-center">
            <div className="w-2 h-2 rounded-full bg-portfolio-secondary mr-2"></div>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

// Interactive 3D skill orb
export const SkillOrb = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillLevels = [
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "SQL", level: 85 },
    { name: "Kotlin", level: 80 },
    { name: "HTML/CSS", level: 75 },
    { name: "React", level: 70 },
    { name: "TensorFlow", level: 80 },
    { name: "Flask", level: 75 },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h3 className="text-xl font-bold text-portfolio-primary mb-6 text-center">Skill Proficiency</h3>
      
      <div className="space-y-4">
        {skillLevels.map((skill, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between">
              <span className="text-gray-700">{skill.name}</span>
              <span className="text-portfolio-primary font-medium">{skill.level}%</span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                className="h-full bg-portfolio-primary rounded-full"
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
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
      title: "Soft Skills",
      icon: <Users size={24} />,
      skills: ["Problem-Solving & Analytical Thinking", "Leadership", "Time Management", "Communication"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-portfolio-dark">Skills</h2>
          <div className="h-1 w-20 bg-portfolio-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my journey in software development and data engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

        <div className="max-w-3xl mx-auto">
          <SkillOrb />
        </div>
        
        {/* Add 3D Interactive Skills Visualization */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-portfolio-primary mb-6 text-center">Interactive Skills Visualization</h3>
          <div className="w-full">
            <InteractiveSkillsSection />
          </div>
        </div>
      </div>
    </section>
  );
};

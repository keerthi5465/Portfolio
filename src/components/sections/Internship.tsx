
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

interface InternshipItemProps {
  company: string;
  role: string;
  duration: string;
  description: string;
  tech: string[];
  index: number;
}

const InternshipItem = ({ company, role, duration, description, tech, index }: InternshipItemProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-portfolio-primary">{company}</h3>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar size={16} className="mr-1 text-portfolio-primary" />
          <span>{duration}</span>
        </div>
      </div>
      
      <h4 className="text-lg text-gray-800 mb-3 font-medium">{role}</h4>
      
      <p className="text-gray-700 mb-4">{description}</p>
      
      {tech.length > 0 && (
        <div className="mt-4">
          <h5 className="text-sm font-semibold text-gray-600 mb-2">Technology Stack:</h5>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, i) => (
              <span 
                key={i} 
                className="px-3 py-1 rounded-full bg-portfolio-primary/10 text-sm text-portfolio-primary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export const Internship = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const internships = [
    {
      company: "Futuresense Technologies",
      role: "Data Analyst Intern",
      duration: "June 2023 - Aug 2023",
      description: "Analyzed and processed large datasets, uncovering actionable insights to support data-driven decision-making. Designed interactive dashboards with real-time data integration, improving trend visualization.",
      tech: ["Python", "SQL", "Pandas", "NumPy", "Power BI", "Azure", "Scikit-learn"],
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-portfolio-dark">Internship Experience</h2>
          <div className="h-1 w-20 bg-portfolio-primary mx-auto mb-6"></div>
          
          <div className="mb-12">
            <div className="max-w-3xl mx-auto group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
              <img 
                src="/lovable-uploads/34bceb24-fa37-4c71-b94a-937f171a095c.png"
                alt="Internship Completion Certificate - Futuresense Technologies"
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
            </div>
          </div>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            My professional experience has allowed me to apply my technical skills to real-world challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {internships.map((internship, index) => (
            <InternshipItem
              key={index}
              company={internship.company}
              role={internship.role}
              duration={internship.duration}
              description={internship.description}
              tech={internship.tech}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

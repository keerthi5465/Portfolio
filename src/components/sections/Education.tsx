
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

interface EducationItemProps {
  institution: string;
  degree: string;
  location: string;
  duration: string;
  gpa?: string;
  percentage?: string;
  index: number;
}

const EducationItem = ({ 
  institution, 
  degree, 
  location, 
  duration, 
  gpa, 
  percentage,
  index 
}: EducationItemProps) => {
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
      className="bg-white rounded-lg shadow-lg p-6 relative"
    >
      <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-portfolio-primary flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-white"></div>
      </div>
      
      <h3 className="text-xl font-bold text-portfolio-primary mb-2">{institution}</h3>
      <p className="text-lg text-gray-800 mb-3">{degree}</p>
      
      <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600">
        <div className="flex items-center">
          <MapPin size={16} className="mr-1 text-portfolio-primary" />
          <span>{location}</span>
        </div>
        <div className="flex items-center">
          <Calendar size={16} className="mr-1 text-portfolio-primary" />
          <span>{duration}</span>
        </div>
      </div>
      
      {(gpa || percentage) && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          {gpa && <p className="text-gray-700"><span className="font-medium">GPA:</span> {gpa}</p>}
          {percentage && <p className="text-gray-700"><span className="font-medium">Percentage:</span> {percentage}</p>}
        </div>
      )}
    </motion.div>
  );
};

export const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationItems = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      location: "Jalandhar, Punjab",
      duration: "2020 - August 2022",
      gpa: "8.00",
    },
    {
      institution: "Narayana High School",
      degree: "Intermediate",
      location: "Hyderabad, Telangana",
      duration: "April 2018 - March 2020",
      percentage: "86%",
    },
    {
      institution: "Narayana High School",
      degree: "Matriculation",
      location: "Hyderabad, Telangana",
      duration: "April 2016 - March 2018",
      percentage: "100%",
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-portfolio-dark">Education</h2>
          <div className="h-1 w-20 bg-portfolio-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            My academic journey has provided me with a strong foundation in computer science and engineering principles.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-portfolio-primary/30"></div>
          
          {/* Education items */}
          <div className="space-y-8 pl-8">
            {educationItems.map((item, index) => (
              <EducationItem
                key={index}
                institution={item.institution}
                degree={item.degree}
                location={item.location}
                duration={item.duration}
                gpa={item.gpa}
                percentage={item.percentage}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

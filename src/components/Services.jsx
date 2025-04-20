import React from 'react';
import {
  FaPlug,
  FaMobileAlt,
  FaDatabase,
  FaCode,
  FaServer,
  FaJsSquare,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaPlug className="text-green-500 text-4xl" />,
    title: 'API Development',
    description: 'We design and implement secure, high-performance APIs to ensure seamless integration across platforms.',
    hoverColor: 'hover:bg-green-200 dark:hover:bg-green-900',
  },
  {
    icon: <FaMobileAlt className="text-orange-500 text-4xl" />,
    title: 'Mobile App Development',
    description: 'Building cross-platform mobile apps with React Native, Flutter, and more to extend your business to mobile platforms.',
    hoverColor: 'hover:bg-orange-200 dark:hover:bg-orange-900',
  },
  {
    icon: <FaDatabase className="text-yellow-500 text-4xl" />,
    title: 'Database Management',
    description: 'Expertise in designing, managing, and optimizing SQL and NoSQL databases for scalability and efficiency.',
    hoverColor: 'hover:bg-yellow-200 dark:hover:bg-yellow-900',
  },
  {
    icon: <FaCode className="text-indigo-500 text-4xl" />,
    title: 'Frontend Development',
    description: 'Crafting responsive and interactive user interfaces using modern frameworks like React, Vue, and Angular.',
    hoverColor: 'hover:bg-indigo-200 dark:hover:bg-indigo-900',
  },
  {
    icon: <FaServer className="text-gray-700 dark:text-gray-300 text-4xl" />,
    title: 'Backend Development',
    description: 'Building robust backend systems using Node.js, Express, and other technologies to power your applications.',
    hoverColor: 'hover:bg-gray-300 dark:hover:bg-gray-700',
  },
  {
    icon: <FaJsSquare className="text-yellow-400 text-4xl" />,
    title: 'JavaScript Technologies',
    description: 'Proficiency in JavaScript, including ES6+, Node.js, React, and modern tooling for full-stack development.',
    hoverColor: 'hover:bg-yellow-100 dark:hover:bg-yellow-800',
  },
];

function Services() {
  return (
    <section id="services" className="bg-[#f8f9ff] dark:bg-[#0b0f1a] py-20 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white">My Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-[#111827] rounded-2xl p-6 shadow-lg transform transition-all duration-300 group ${service.hoverColor} hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div className="mb-5 transition-transform duration-300 group-hover:scale-110">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 dark:bg-[#1f2937] rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline transition-all duration-200"
              >
                Know more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

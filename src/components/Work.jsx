import React from "react";
import project1 from "../assets/img/pr4.png";
import project2 from "../assets/img/pr2.png";
import project3 from "../assets/img/pr3.png";
import project4 from "../assets/img/pr1.png";
import project5 from "../assets/img/pr5.png";
import project6 from "../assets/img/pr6.png";
import project7 from "../assets/img/pr7.png";

const projects = [
  {
    name: "Bitcoin",
    image: project1,
    link: "https://bitcoin-seven-xi.vercel.app/",
  },
  {
    name: "Portfolio Website",
    image: project2,
    link: "https://newproject-hi2c.vercel.app/",
  },
  {
    name: "Dexon Website",
    image: project3,
    link: "https://dexonapp02.vercel.app/",
  },
  {
    name: "Text Web",
    image: project4,
    link: "https://my-app-lelx.vercel.app/",
  },
  {
    name: "Itech Web",
    image: project5,
    link: "https://itech-test-lime.vercel.app/",
  },
  {
    name: "E-commerce",
    image: project6,
    link: "https://exclusive-web-esya.vercel.app/",
  },
  {
    name: "Admin-Panel",
    image: project7,
    link: "https://exclusive-web-x984.vercel.app/",
  },
  {
    name: "Bitcoin",
    image: project1,
    link: "https://bitcoin-seven-xi.vercel.app/",
  },
];

function Work() {
  return (
    <section id="work">
        <div className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="text-center mb-10">
        <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-1 rounded-full text-sm font-medium">
          Work
        </span>
        <h2 className="text-3xl font-bold mt-4 text-gray-800 dark:text-white">
          Some of the noteworthy projects I have built:
        </h2>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto px-2 sm:px-0">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-2xl overflow-hidden shadow-md bg-gray-100 dark:bg-gray-800 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className="relative w-full h-48 md:h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-contain bg-white dark:bg-gray-700 p-3 transition-transform duration-500 group-hover:scale-105"
              />

              {/* Black overlay with smooth left-to-right scroll effect */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 group-hover:translate-x-0 -translate-x-full transition-all duration-500 ease-in-out z-10" />

              {/* Visit Project Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  Visit Project
                </a>
              </div>
            </div>

            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {project.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default Work;

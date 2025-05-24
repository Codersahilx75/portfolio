import React from "react";
import aboutImg from "../assets/img/new.jpg";

function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-10 px-4"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2  ">
        {/* Image - appears first on large screen, second on small screen */}
        <div className="order-1 lg:order-1 flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            <img
              src={aboutImg}
              alt="About me"
              className="rounded-lg w-full object-cover shadow-xl"
            />
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-gray-300 dark:border-gray-600 rounded-lg z-[-1]" />
          </div>
        </div>

        {/* Text Content - appears below on small screen, right side on large */}
        <div className="order-2 lg:order-2">
          {/* Badge centered on small screens */}
          <div className="flex justify-center mt-5 lg:mt-0 lg:justify-start">
            <span className="text-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-900 hover:text-white transition px-3 py-1 rounded-full mb-4 inline-block font-medium text-center">
              About me
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center lg:text-left">
            Curious about me? Here you have it:
          </h2>

          <div className="space-y-5 text-base sm:text-lg leading-relaxed">
            <p>
              I’m a passionate,{" "}
              <a href="#" className="text-blue-500 underline">
                self-proclaimed designer
              </a>{" "}
              who specializes in MERN stack development (React.js & Node.js). I
              bring both technical and visual aspects of digital products to
              life with a love for UI-UX design, and clean,
              performant code.
            </p>
            <p>
              My journey began in 2023 and since then, I’ve kept evolving—
              embracing new challenges and technologies. Now, in my thirties,
              two years into this exciting career, I build modern web
              applications using technologies like HTML, CSS, Bootstrap,
              Node.js, MongoDB, React.js, JavaScript, TailwindCSS, Supabase,
              and more.
            </p>
            <p>
              I'm a progressive thinker who enjoys working on products from
              ideation to launch.
            </p>

            <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
               <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center lg:text-left">Education</h2>
              <li>B.Sc in Mathematics</li>
              <li>M.Sc in Information Technology</li>
              
           
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

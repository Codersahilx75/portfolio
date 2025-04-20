import React from "react";
import {
  MapPin,
  CheckCircle,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import profileImg from "../assets/img/profile.png";

function Profile() {
  return (
    <section id="profile" className="bg-white dark:bg-gray-900  md:py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-2/3 space-y-4">
          <h1 className="text-4xl md:text-5xl dark:text-white font-bold">
            Hi, I’m{" "}
            <span className="text-blue-600 dark:text-blue-400">Sahil</span>{" "}
            <span className="inline-block">👋</span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            I'm a MERN stack developer (<strong>React.js</strong> &{" "}
            <strong>Node.js</strong>) with a focus on creating (and occasionally
            designing) exceptional digital experiences that are fast,
            accessible, visually appealing, and responsive. Even though I have
            been creating web applications for over 7 years, I still love it as
            if it was something new.
          </p>

          {/* Location and availability */}
          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <MapPin size={16} />
              <span>Surat,Gujarat, India</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle size={16} className="text-green-500" />
              <span>Available for new projects</span>
            </div>
          </div>
          </div>

        {/* Profile Image */}
        <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center">
          <img
            src={profileImg}
            alt="Profile"
            className=" w-64 h-68 rounded-lg  object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;

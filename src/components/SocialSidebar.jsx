import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

function SocialSidebar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="fixed right-4 top-1/3 z-50 flex flex-col gap-4 p-2 rounded-xl shadow-lg bg-white dark:bg-gray-900">
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:scale-110 transition dark:text-green-400"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:scale-110 transition dark:text-blue-400"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 hover:scale-110 transition dark:text-sky-400"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:scale-110 transition dark:text-blue-500"
        >
          <FaLinkedinIn size={24} />
        </a>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed right-4 bottom-4 border border-blue-500 dark:text-white hover:bg-slate-500  p-3 rounded-full shadow-xl  transition-all"
        title="Back to Top"
      >
        <FaArrowUp size={24} />
      </button>
    </>
  );
}

export default SocialSidebar;

import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    // Theme setup
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }

    // Intersection Observer setup
    const sections = ['profile', 'about', 'skills', 'work', 'services', 'contact'];
    let observers = [];

    const options = {
      root: null,
      rootMargin: '0px 0px -50% 0px',
      threshold: 0.2
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    sections.forEach(section => {
      const target = document.getElementById(section);
      if (target) {
        const observer = new IntersectionObserver(handleIntersection, options);
        observer.observe(target);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 w-full text-black dark:text-white py-4 px-6 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <h2 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
          &lt;/Portfolio&gt;
        </h2>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8 items-center font-medium text-lg">
            {['profile', 'about', 'skills', 'work', 'services', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`relative inline-block transition duration-300 
                    ${activeSection === item ? 'text-blue-600 dark:text-blue-400' : 'text-black dark:text-white'}
                    hover:text-blue-600 dark:hover:text-blue-400
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                    after:bg-blue-600 dark:after:bg-blue-400
                    after:transition-all after:duration-300 ${activeSection === item ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
            <li onClick={toggleDarkMode} className="cursor-pointer">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </li>
          </ul>
        </nav>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="transition duration-300">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={toggleMenu} className="transition-transform duration-300 transform">
            {menuOpen ? (
              <X size={24} className="rotate-90 transition duration-300" />
            ) : (
              <Menu size={24} className="rotate-0 transition duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mt-4 px-4">
          <ul className="flex flex-col space-y-4 text-sm font-medium">
            {['profile', 'about', 'skills', 'work', 'services', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={toggleMenu}
                  className={`block py-2 transition duration-300 
                    ${activeSection === item ? 'text-blue-600 dark:text-blue-400' : 'text-black dark:text-white'}
                    hover:text-blue-600 dark:hover:text-blue-400`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

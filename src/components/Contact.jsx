import React, { useState } from "react";
import {
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaFacebook,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import sendMessage from "../apis/contact/sendMessage";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const result = await sendMessage(formData);

    if (result.success) {
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-center p-4"
    >
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl w-full max-w-6xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="bg-black text-white w-full md:w-1/3 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="mb-8 text-sm">Say something to start a live chat!</p>
            <div className="space-y-6 text-sm">
              <div className="flex items-center space-x-3">
                <FaPhone />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope />
                <span>chaudharisahil652@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1" />
                <span>Surat,Gujarat,India</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6 mt-8 text-xl">
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:text-[#1DA1F2] transition-colors cursor-pointer" />
            </a>
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-[#E1306C] transition-colors cursor-pointer" />
            </a>
            <a
              href="https://facebook.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:text-[#1877F2] transition-colors cursor-pointer" />
            </a>
            <a
              href="https://linkedin.com/in/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-[#0077B5] transition-colors cursor-pointer" />
            </a>
            <a
              href="https://github.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-gray-400 transition-colors cursor-pointer" />
            </a>
            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="hover:text-[#25D366] transition-colors cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3 p-8 bg-white dark:bg-gray-800">
          <h1 className="text-3xl font-bold mb-2">Contact Me</h1>
          <p className="text-gray-500 dark:text-gray-300 mb-6">
            Have questions or want to work together? Send me a message!
          </p>

          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">
              Message sent successfully! You should receive a confirmation email
              shortly.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded">
              Failed to send message. Please try again later or email me
              directly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Your first name"
                  className="w-full border-b border-gray-300 dark:border-gray-600 bg-transparent outline-none py-2"
                  required
                />
              </div>
              <div>
                <label className="text-sm">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Your last name"
                  className="w-full border-b border-gray-300 dark:border-gray-600 bg-transparent outline-none py-2"
                  required
                />
              </div>
              <div>
                <label className="text-sm">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full border-b border-gray-300 dark:border-gray-600 bg-transparent outline-none py-2"
                  required
                />
              </div>
              <div>
                <label className="text-sm">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 1234567890"
                  className="w-full border-b border-gray-300 dark:border-gray-600 bg-transparent outline-none py-2"
                />
              </div>
            </div>

            <div>
              <label className="text-sm">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="5"
                className="w-full border-b border-gray-300 dark:border-gray-600 bg-transparent outline-none py-2 resize-none"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

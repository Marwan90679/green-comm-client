import React from 'react';
import {
  FaLeaf,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';
import { toast } from 'react-toastify';

const Contact = () => {
    const contactToast=(e)=>{
        e.preventDefault();
        toast.success('Succeed')
    }
  return (
    <div className="max-w-4xl mx-auto p-6 md:my-8 bg-white dark:bg-gray-900 rounded-lg shadow-md text-gray-800 dark:text-gray-100 transition-all duration-300">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-700 dark:text-green-300 flex items-center justify-center gap-2">
          Contact Green Commandos
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Reach out to our eco-warriors for any inquiries or collaborations
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-green-50 dark:bg-green-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-4">
            Send us a message
          </h2>
          <form onSubmit={contactToast} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-green-500 focus:ring-green-500 p-2"
                placeholder="Jakir Hanif"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-green-500 focus:ring-green-500 p-2"
                placeholder="palis@lop.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject
              </label>
              <select
                id="subject"
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-green-500 focus:ring-green-500 p-2"
              >
                <option>General Inquiry</option>
                <option>Partnership Opportunity</option>
                <option>Volunteer Application</option>
                <option>Report an Issue</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-green-500 focus:ring-green-500 p-2"
                placeholder="How can we help you grow greener?"
              ></textarea>
            </div>

            <button
        
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 flex items-center justify-center"
            >
              <FaEnvelope className="mr-2" /> Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          {[
            {
              icon: <FaMapMarkerAlt className="h-5 w-5" />,
              title: 'Our Headquarters',
              text: '123 Greenway Blvd, Eco City, EC 12345',
            },
            {
              icon: <FaEnvelope className="h-5 w-5" />,
              title: 'Email Us',
              text: 'greencommandos@fakeemail.com',
            },
            {
              icon: <FaPhone className="h-5 w-5" />,
              title: 'Call Us',
              text: ['+1 (555) 123-4567 (Office)', '+1 (555) 987-6543 (Support)'],
            },
            {
              icon: <FaClock className="h-5 w-5" />,
              title: 'Working Hours',
              text: [
                'Monday - Friday: 9:00 AM - 5:00 PM',
                'Saturday: 10:00 AM - 2:00 PM',
                'Sunday: Closed',
              ],
            },
          ].map(({ icon, title, text }, index) => (
            <div className="flex items-start" key={index}>
              <div className="flex-shrink-0 bg-green-100 dark:bg-green-700 p-3 rounded-full text-green-700 dark:text-white">
                {icon}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">{title}</h3>
                {Array.isArray(text) ? (
                  text.map((t, i) => (
                    <p className="text-gray-600 dark:text-gray-300" key={i}>
                      {t}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-600 dark:text-gray-300">{text}</p>
                )}
              </div>
            </div>
          ))}

          {/* Social Links (optional icons) */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-2">Follow Us</h3>
            <div className="flex space-x-4 text-green-600 dark:text-green-300">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f text-xl" />
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter text-xl" />
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

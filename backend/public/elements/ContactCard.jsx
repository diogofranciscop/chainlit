import React from 'react';

// Instead of using react-icons, let's use simple HTML/CSS for icons
const ContactCard = ({
  name,
  role,
  email,
  phone,
  location,
  linkedin,
  github
}) => {
  return (
    <div
      className="relative bg-white rounded-lg shadow-lg p-6 max-w-xs 
        sm:max-w-md mx-auto transform hover:scale-105 transition-transform 
        duration-300 ease-in-out"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold text-gray-800 mb-1">{props.name}</h2>
        <p className="text-gray-500 mb-4">{props.role}</p>
      </div>

      <div className="text-gray-700">
        <p className="flex items-center mb-2">
          <span className="text-blue-500 mr-2">✉️</span> {props.email}
        </p>
        <p className="flex items-center mb-2">
          <span className="text-blue-500 mr-2">📞</span> {props.phone}
        </p>
        <p className="flex items-center mb-2">
          <span className="text-blue-500 mr-2">📍</span> {props.location}
        </p>
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <a
          href={props.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 mr-4 hover:text-blue-700"
        >
          LinkedIn
        </a>
        <a
          href={props.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ContactCard;

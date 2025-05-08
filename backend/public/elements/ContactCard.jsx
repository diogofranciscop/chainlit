import React from 'react';

// Instead of using react-icons, let's use simple HTML/CSS for icons
const ContactCard = ({ name, role, email, phone }) => {
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
          <a className="text-blue-500 mr-2" href={`mailto:${props.email}`}>
            ✉️
          </a>{' '}
          {props.email}
        </p>
        <p className="flex items-center mb-2">
          <span className="text-blue-500 mr-2">📞</span> {props.phone}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;

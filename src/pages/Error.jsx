import React from 'react';
import { Link } from 'react-router-dom'; // Remove this if not using react-router

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-4">
      <h1 className="text-[100px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 drop-shadow-lg">
        404
      </h1>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="text-center max-w-md text-gray-300 mb-8">
        Sorry, the page you’re looking for doesn’t exist or has been moved. But no worries, you can always go back.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition transform duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error;

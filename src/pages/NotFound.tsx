import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 py-10 max-w-7xl mx-auto h-screen text-center">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-800">
        404
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600 mt-2">
        Page Not Found
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-4">
        Sorry, the page you&apos;re looking for does not exist or has been
        moved.
      </p>
      <Link to="/">
        <div className="text-sm sm:text-base mt-4 sm:mt-6 px-4 py-2 bg-gradient-to-t from-gray-800 hover:from-gray-800 to-gray-600 hover:to-gray-500 text-white rounded-md transition duration-200">
          Go to Homepage
        </div>
      </Link>
    </div>
  );
};

export default NotFound;

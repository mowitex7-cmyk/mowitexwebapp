import { Link } from "react-router";
export const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
    <h1 className="text-9xl font-bold text-gray-200">404</h1>
    <h2 className="text-2xl font-semibold text-gray-900 mt-4">
      Page Not Found
    </h2>
    <p className="text-gray-500 mt-2 max-w-md">
      The page you are looking for doesn't exist or has been moved.
    </p>
    <Link
      to="/"
      className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
    >
      Go back home
    </Link>
  </div>
);

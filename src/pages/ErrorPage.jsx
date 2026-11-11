import { useRouteError, isRouteErrorResponse, Link } from "react-router";
export const ErrorPage = () => {
  const error = useRouteError();
  let message = "Unknown error";
  if (isRouteErrorResponse(error)) {
    message = `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    message = error.message;
  } else if (typeof error == "string") {
    message = error;
  }
  console.error("Route Error:", error);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-4 font-sans">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-red-600 dark:text-red-500">
          Oops!
        </h1>
        <p className="text-xl mb-4 font-medium">Something went wrong.</p>
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-8 border border-red-100 dark:border-red-800">
          <p className="text-sm text-red-800 dark:text-red-200 font-mono break-all">
            {message}
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

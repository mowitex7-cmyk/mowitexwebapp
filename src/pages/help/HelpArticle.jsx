import {
  House,
  ChevronRight,
  FileText,
  CircleCheck,
  CircleHelp,
  ArrowLeft,
} from "lucide-react";
import { useParams, Link } from "react-router";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { helpArticles, getTopicTitle } from "../../data/helpArticles";
const resolutionSteps = [
  "Log into your Mowitex account using your registered email and password.",
  "Navigate to the main dashboard and locate the specific feature you're looking for.",
  "Follow the on-screen prompts to complete your action securely.",
  "If you encounter any issues, try refreshing the page or clearing your cache.",
  "Confirm your changes and review the confirmation screen.",
];
export const HelpArticle = () => {
  const { topic: topic, articleId: articleId } = useParams();
  const currentArticle = helpArticles.find(
    (helpArticle) =>
      helpArticle.id === articleId && helpArticle.topicId === topic,
  );
  const topicTitle = getTopicTitle(topic);
  return currentArticle ? (
    <div className="min-h-screen bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white font-sans transition-colors duration-300 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 lg:pt-32 pb-24 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8 flex-wrap"
            aria-label="Breadcrumb"
          >
            <Link
              to="/help"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <House className="w-4 h-4" />
              Help Center
            </Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <Link
              to={`/help/${topic}`}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {topicTitle}
            </Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <span className="text-slate-900 dark:text-slate-200 font-medium truncate max-w-[200px] sm:max-w-xs">
              {currentArticle.title}
            </span>
          </nav>
          <article className="bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-xl shrink-0">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                  {currentArticle.title}
                </h1>
                <p className="text-slate-600 dark:text-slate-400 mt-3 text-lg">
                  {currentArticle.description}
                </p>
              </div>
            </div>
            <div className="mt-10 border-t border-slate-200 dark:border-slate-700/50 pt-10">
              <h2 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">
                Step-by-Step Resolution
              </h2>
              <div className="space-y-6">
                {resolutionSteps.map((resolutionStep, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                        {index + 1}
                      </div>
                      {index !== resolutionSteps.length - 1 && (
                        <div className="w-0.5 h-full bg-blue-100 dark:bg-slate-700 mt-2 min-h-[2rem]" />
                      )}
                    </div>
                    <div className="pt-1 pb-6">
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {resolutionStep}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-900/30 rounded-xl p-5 flex gap-4">
                <CircleCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
                  <strong>Tip:</strong> Keep your app updated to the latest
                  version to ensure you have access to all new features and
                  security improvements.
                </p>
              </div>
            </div>
          </article>
          <div className="mt-12 p-8 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-3xl text-center flex flex-col items-center shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
              Still need help?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
              If this article didn't solve your issue, our support team is ready
              to help you directly.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors shadow-sm text-lg"
            >
              Sign Up for Support
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  ) : (
    <div className="min-h-screen bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white font-sans transition-colors duration-300 flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-24 pb-24">
        <div className="text-center">
          <CircleHelp className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
            Article Not Found
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/help"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Help Center
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

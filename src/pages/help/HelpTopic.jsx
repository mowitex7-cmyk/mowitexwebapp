import { ChevronRight, ArrowLeft, FileText } from "lucide-react";
import { useParams, Link } from "react-router";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { getTopicTitle, helpArticles } from "../../data/helpArticles";
export const HelpTopic = () => {
  const { topic: topic } = useParams();
  const topicTitle = getTopicTitle(topic);
  const articles = helpArticles.filter(
    (helpArticle) => helpArticle.topicId === topic,
  );
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white font-sans transition-colors duration-300 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 lg:pt-32 pb-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8 flex-wrap">
            <Link
              to="/help"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Help Center
            </Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <span className="text-slate-900 dark:text-slate-200 font-medium">
              {topicTitle}
            </span>
          </div>
          <Link
            to="/help"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Topics
          </Link>
          <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 sm:p-12 shadow-sm">
            <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
              {topicTitle}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8">
              Explore frequently asked questions and guides about{" "}
              {topicTitle.toLowerCase()}.
            </p>
            <div className="space-y-4">
              {articles.length > 0 ? (
                articles.map((item) => (
                  <Link
                    key={item.id}
                    to={`/help/${topic}/${item.id}`}
                    className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 rounded-xl hover:border-blue-200 dark:hover:border-blue-900/50 transition-colors cursor-pointer group flex items-start gap-4 shadow-sm w-full text-left"
                  >
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg mt-0.5 shrink-0">
                      <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="p-8 text-center text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700/50">
                  No articles available for this topic yet. Please check back
                  later.
                </div>
              )}
            </div>
          </div>
          <div className="mt-12 p-8 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-2xl text-center flex flex-col items-center shadow-sm">
            <p className="text-slate-900 dark:text-white font-semibold text-lg mb-2">
              Can't find what you're looking for?
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md">
              Our support team is ready to help you with any questions you might
              have.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors shadow-sm"
            >
              Sign Up for Support
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

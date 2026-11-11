import { useState, useRef, useEffect, useMemo } from "react";
import { Search, FileText, ArrowRight } from "lucide-react";
import { useNavigate, Link } from "react-router";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { helpTopics, helpArticles } from "../../data/helpArticles";
export const HelpCenter = () => {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const filteredTopics = useMemo(() => {
    if (!query.trim()) return helpTopics;
    const term = query.toLowerCase();
    return helpTopics.filter((helpTopic) =>
      helpTopic.title.toLowerCase().includes(term),
    );
  }, [query]);
  const matchingArticles = useMemo(() => {
    if (!query.trim()) return [];
    const term = query.toLowerCase();
    return helpArticles
      .filter(
        (helpArticle) =>
          helpArticle.title.toLowerCase().includes(term) ||
          helpArticle.description.toLowerCase().includes(term),
      )
      .slice(0, 5);
  }, [query]);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white font-sans transition-colors duration-300 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 pb-24 relative overflow-hidden">
        <div className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 py-20 sm:py-28 lg:py-32 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
            Mowitex Help Center
          </h1>
          <div
            className="w-full max-w-2xl relative flex items-center shadow-lg rounded"
            ref={searchRef}
          >
            <input
              type="text"
              placeholder="Search for articles, topics, or keywords..."
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setShowResults(true);
              }}
              onFocus={() => setShowResults(true)}
              className="w-full py-4 px-6 pr-12 rounded bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all border-none"
            />
            <Search className="w-5 h-5 text-slate-400 absolute right-4 pointer-events-none" />
            {showResults && query.trim() !== "" && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden z-50">
                {matchingArticles.length > 0 ? (
                  <ul className="py-2">
                    {matchingArticles.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => {
                            setQuery("");
                            setShowResults(false);
                            navigate(`/help/${item.topicId}/${item.id}`);
                          }}
                          className="w-full text-left px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-start gap-3 transition-colors"
                        >
                          <FileText className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                          <div className="flex flex-col">
                            <span className="text-slate-900 dark:text-slate-200 font-medium text-sm">
                              {item.title}
                            </span>
                            <span className="text-slate-500 dark:text-slate-400 text-xs line-clamp-1 mt-0.5">
                              {item.description}
                            </span>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-6 text-center text-slate-500 dark:text-slate-400 text-sm">
                    No articles found matching "{query}"
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            Topics
          </h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 w-full">
            {filteredTopics.length > 0 ? (
              filteredTopics.map((item) => (
                <Link
                  key={item.id}
                  to={`/help/${item.id}`}
                  className={`w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-2rem)] bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl p-8 sm:p-10 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md ${item.borderHover} transition-all group`}
                >
                  <div
                    className={`w-20 h-20 rounded-full ${item.bg} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}
                  >
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3
                    className={`text-slate-600 dark:text-slate-300 font-medium ${item.textHover} transition-colors`}
                  >
                    {item.title}
                  </h3>
                </Link>
              ))
            ) : (
              <div className="w-full py-12 text-center text-slate-500 dark:text-slate-400">
                No topics found. Try adjusting your search.
              </div>
            )}
          </div>
          <div className="mt-16 sm:mt-24 p-8 sm:p-12 w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-3xl text-center flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              Still need help?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl">
              Can't find the answers you're looking for? Sign up to contact our
              support team directly.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors"
            >
              Sign Up for Support
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

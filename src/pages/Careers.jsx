import {
  PenTool,
  CodeXml,
  Settings,
  Users,
  ClipboardList,
  GraduationCap,
  CircleCheck,
} from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import abstractSecurityGraphicImg from "../assets/517af251aea9c33322c2b0b98dac1f08c16deedf.png";
import careersHeroSectionImg from "../assets/5c4b21ac34ae390b8509b760a98c147448b05892.png";
const departments = [
  {
    title: "Design",
    count: 4,
    icon: PenTool,
    iconBg:
      "bg-gradient-to-br from-indigo-100 to-purple-200 dark:from-indigo-900/40 dark:to-purple-900/40",
  },
  {
    title: "Engineering",
    count: 8,
    icon: CodeXml,
    iconBg:
      "bg-gradient-to-br from-rose-100 to-pink-200 dark:from-rose-900/40 dark:to-pink-900/40",
    isActive: true,
  },
  {
    title: "Operations",
    count: 2,
    icon: Settings,
    iconBg:
      "bg-gradient-to-br from-cyan-100 to-blue-200 dark:from-cyan-900/40 dark:to-blue-900/40",
  },
  {
    title: "People",
    count: 6,
    icon: Users,
    iconBg:
      "bg-gradient-to-br from-teal-100 to-emerald-200 dark:from-teal-900/40 dark:to-emerald-900/40",
  },
  {
    title: "Sales",
    count: 7,
    icon: ClipboardList,
    iconBg:
      "bg-gradient-to-br from-slate-200 to-indigo-100 dark:from-slate-700/40 dark:to-indigo-900/40",
  },
  {
    title: "University",
    count: 8,
    icon: GraduationCap,
    iconBg:
      "bg-gradient-to-br from-orange-100 to-amber-200 dark:from-orange-900/40 dark:to-amber-900/40",
  },
];
export const Careers = () => (
  <div className="min-h-screen bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white font-sans transition-colors duration-300 flex flex-col">
    <Navbar />
    <main className="flex-grow pt-24 lg:pt-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 lg:mb-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0032A0] dark:text-blue-400 max-w-lg text-center md:text-left leading-tight">
              Empower your DREAMS with endless possibilities. Take an assured
              step to real success.
            </h1>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={careersHeroSectionImg}
              alt="Careers Hero Section"
              className="w-full h-auto object-cover rounded-sm shadow-sm"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-50/50 dark:bg-transparent py-16 sm:py-24 border-t border-slate-100 dark:border-slate-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#1E293B] dark:text-white mb-12">
            Open positions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {departments.map((department) => (
              <div
                key={department.title}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-none border border-slate-100 dark:border-slate-700/50 flex flex-col items-center transition-transform hover:-translate-y-1 duration-300"
              >
                <div className="flex items-center gap-4 w-full justify-center mb-8">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${department.iconBg}`}
                  >
                    <department.icon className="w-6 h-6 text-slate-700 dark:text-slate-200" />
                  </div>
                  <span className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                    {department.title}
                  </span>
                </div>
                <Link
                  to="/signup"
                  className={`w-full py-3 px-4 rounded-xl text-sm font-medium text-center transition-colors ${department.isActive ? "bg-[#1E293B] text-white hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 shadow-md" : "bg-transparent border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50"}`}
                >
                  {department.count} open positions
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            We are proud to be an equal opportunity employer that values
            diversity. We do not discriminate on the basis of race, religion,
            color, national origin, gender, sexual orientation, age, marital
            status, veteran status, or disability status.
          </p>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-[#0B1120] py-16 sm:py-24 border-t border-slate-100 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
            <div className="w-full md:w-1/2">
              <img
                src={abstractSecurityGraphicImg}
                alt="Security and fraud protection shield"
                className="w-full h-auto object-cover rounded-2xl shadow-sm"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Protecting you against fraud is our priority
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
                Enjoy a highly secured cross-border transaction experience with
                the Mowitex app, giving you a peace of mind knowing that your
                money is safe and secure always.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Account authentication",
                  "Information privacy",
                  "Risk management",
                  "Continuous tracking",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CircleCheck className="w-6 h-6 text-blue-500 shrink-0" />
                    <span className="text-slate-800 dark:text-slate-200 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-8 rounded-full transition-colors shadow-sm"
              >
                Join Mowitex
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-[#0032A0] text-white py-12 sm:py-16 flex flex-col items-center justify-center relative overflow-hidden"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 3vw), 0 100%)",
          paddingBottom: "calc(3rem + 3vw)",
        }}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide z-10 text-center px-4 mb-6">
          CHOOSE YOUR CAREER AND JOIN OUR TEAM
        </h2>
        <Link
          to="/signup"
          className="z-10 bg-white text-[#0032A0] hover:bg-blue-50 font-semibold py-3 px-8 rounded-full transition-colors shadow-sm"
        >
          Apply Now
        </Link>
      </div>
    </main>
    <Footer />
  </div>
);

import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { HeroSlider } from "../components/HeroSlider";
import { AppShowcase } from "../components/home/AppShowcase";
import { CardsShowcase } from "../components/home/CardsShowcase";
import { Difference } from "../components/home/Difference";
import { VirtualAccounts } from "../components/home/VirtualAccounts";
import { VirtualCards } from "../components/home/VirtualCards";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { Navbar } from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import happyPersonHoldingASmartphoneShowingBankingAppInterfaceImg from "../assets/1509b23e4e66e052a3efedc0c52798668fdb6d46.png";
export const Home = () => {
  const { session: session } = useAuth();
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] text-slate-900 dark:text-white font-sans selection:bg-blue-500/30 transition-colors duration-300">
      <Navbar />
      <main className="pt-20 lg:pt-32 pb-16 lg:pb-0 overflow-hidden min-h-screen flex flex-col justify-center relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-200/50 dark:bg-blue-900/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-indigo-200/50 dark:bg-purple-900/20 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            <div className="w-full lg:w-1/2 max-w-2xl text-center lg:text-left pt-10 lg:pt-0">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-slate-900 dark:text-white text-left">
                The Digital Banking You Need.
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Receive, send, exchange, and manage multiple currencies in one
                app. Open a foreign bank account from your phone for free
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                {session ? (
                  <Link
                    to="/dashboard"
                    className="w-full sm:w-auto bg-[#2962FF] hover:bg-[#1e4bd1] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-blue-500/20 dark:shadow-blue-900/20 hover:scale-105 active:scale-95"
                  >
                    Go to Dashboard
                  </Link>
                ) : (
                  <Link
                    to="/signup"
                    className="w-full sm:w-auto bg-[#2962FF] hover:bg-[#1e4bd1] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-blue-500/20 dark:shadow-blue-900/20 hover:scale-105 active:scale-95"
                  >
                    Create an account
                  </Link>
                )}
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
              <div className="relative z-10 max-w-[500px] w-full">
                <img
                  src={
                    happyPersonHoldingASmartphoneShowingBankingAppInterfaceImg
                  }
                  alt="Happy person holding a smartphone showing banking app interface"
                  className="w-full h-auto object-contain drop-shadow-2xl rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <VirtualCards />
      <VirtualAccounts />
      <CardsShowcase />
      <HeroSlider />
      <AppShowcase />
      <Difference />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

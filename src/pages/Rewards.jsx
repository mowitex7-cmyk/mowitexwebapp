import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { AppStoreButton } from "../components/StoreButtons";
import referralNetworkImg from "../assets/22b34f2d04240703b8c2c696229ecd73165ea088.png";
import happyPersonUsingMowitexImg from "../assets/6fe0147efb97921180dc6016f57a60222fdf279b.png";
import payoutStructureRingWith4LevelsImg from "../assets/81851fb27c00211c3386b831d41667fc02a71705.png";
export const Rewards = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white font-sans selection:bg-indigo-500/30 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-gray-400 font-medium mb-4 block text-sm tracking-wide"
                >
                  Rewards
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight text-slate-900 dark:text-white leading-[1.1]"
                >
                  Earn while <br />
                  you spend
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0"
                >
                  Turn your everyday transactions into rewards, automatically.
                  Keep $100 in your USD wallet, use your account actively, and
                  watch your rewards grow monthly. No sign-ups needed, no extra
                  steps required with Mowitex.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap gap-4 justify-center lg:justify-start"
                >
                  <button
                    onClick={() => navigate("/signup")}
                    className="bg-[#5B4DFF] hover:bg-[#4a3df0] text-white font-semibold py-3.5 px-8 rounded-lg transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-1"
                  >
                    Create an account
                  </button>
                  <AppStoreButton className="hover:-translate-y-1 px-6 text-base" />
                </motion.div>
              </div>
              <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="relative z-10 w-full max-w-[600px] flex justify-center lg:justify-end"
                >
                  <img
                    src={happyPersonUsingMowitexImg}
                    alt="Happy person using Mowitex"
                    className="w-full h-auto object-contain drop-shadow-xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white py-24 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="w-full lg:w-1/2">
                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold mb-6 leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                  Refer your friends <br className="hidden lg:block" />
                  and earn up to 50% <br className="hidden lg:block" />
                  commission
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 leading-relaxed max-w-lg">
                  With our Referral Program, you earn up to 50% commission* on
                  the trading activity of those you refer, across 4 levels!
                </p>
                <button
                  onClick={() => navigate("/signup")}
                  className="bg-[#0055FF] hover:bg-[#0044cc] text-white font-semibold py-3.5 px-8 rounded-lg text-base transition-colors"
                >
                  Refer Friends
                </button>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <motion.img
                  src={referralNetworkImg}
                  alt="Referral Network"
                  className="w-full max-w-[650px] object-contain"
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ duration: 6, repeat: 1 / 0, ease: "easeInOut" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-black text-white py-24 w-full border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Our payout structure
            </h2>
            <p className="text-gray-300 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
              All you have to do is refer your friends and followers. Then, not
              only will you earn from them, you'll also earn from any people
              they refer.
            </p>
            <div className="relative w-full max-w-[800px] mx-auto">
              <img
                src={payoutStructureRingWith4LevelsImg}
                alt="Payout Structure Ring with 4 Levels"
                className="w-full h-auto object-contain mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

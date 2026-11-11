import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import mowitexCardImg from "../../assets/87a20862e879ad406f134f6f146af05fd18482f7.png";
const recentTransactions = [
  {
    name: "Netflix",
    amount: "- $6.25",
    date: "19 Jan, 2025",
    status: "Success",
    icon: "N",
  },
  {
    name: "AmazonPrime.com",
    amount: "- $4.00",
    date: "18 Jan, 2025",
    status: "Success",
    icon: "A",
  },
];
export const CardsShowcase = () => (
  <section className="relative py-24 overflow-hidden bg-[#0B1120]">
    <div className="absolute inset-0 z-0">
      <img
        src={
          "https://images.unsplash.com/photo-1762086931964-373bceb5a690?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYmx1cnJlZCUyMGNhZmUlMjBiYWNrZ3JvdW5kJTIwbmlnaHR8ZW58MXx8fHwxNzcxNzU5MDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        }
        alt="Background"
        className="w-full h-full object-cover opacity-20 blur-sm"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/90 to-transparent" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="w-full lg:w-1/2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Cards for every occasion
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Work, shop, travel - you decide. Our virtual and physical cards
              give you the power with transparent pricing and global acceptance.
              Whether it's Google, Canva, Zoom, AWS, Amazon, eBay etc. We've got
              you.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              to="/cards"
              className="inline-flex items-center gap-2 text-[#E2F0FD] font-semibold hover:text-white transition-colors group"
            >
              Learn more
              <span className="bg-[#E2F0FD] text-[#0B1120] rounded-full p-1 group-hover:bg-white transition-colors">
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px] aspect-[4/3] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute left-0 top-[80%] z-20 w-64 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-medium text-slate-300">
                  Recent transactions
                </span>
                <span className="text-xs text-blue-400 cursor-pointer hover:text-blue-300">
                  See all
                </span>
              </div>
              <div className="space-y-3">
                {recentTransactions.map((recentTransaction, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${recentTransaction.name.includes("Netflix") ? "bg-red-600 text-white" : "bg-blue-500 text-white"}`}
                      >
                        {recentTransaction.icon}
                      </div>
                      <div>
                        <div className="text-xs font-medium text-white">
                          {recentTransaction.name}
                        </div>
                        <div className="text-[10px] text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded inline-block mt-0.5">
                          {recentTransaction.status}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-medium text-white">
                        {recentTransaction.amount}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {recentTransaction.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0, rotate: -10 }}
              whileInView={{ x: 0, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              className="w-full max-w-[500px] z-10 relative"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: 1 / 0, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src={mowitexCardImg}
                  alt="Mowitex Card"
                  className="w-[135%] max-w-none -ml-[17.5%] h-auto drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-20 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

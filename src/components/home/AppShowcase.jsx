import { motion } from "motion/react";
import mowitexAppInterfaceOnPlatformImg from "../../assets/e0f27d540c69f9001fdf23635c37c3b072729d2e.png";
export const AppShowcase = () => (
  <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0B1120]">
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight"
          >
            Your money, <br className="hidden lg:block" />
            everywhere you are.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            Withdraw funds to bank accounts and mobile money in over 70
            countries, seamlessly connecting with PayPal, Payoneer, Wise,
            Mastercard, Revolut and many more.
          </motion.p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="relative w-full max-w-[500px]"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: 1 / 0, ease: "easeInOut" }}
              className="relative z-10"
            >
              <img
                src={mowitexAppInterfaceOnPlatformImg}
                alt="Mowitex App Interface on Platform"
                className="w-[135%] max-w-none -ml-[17.5%] h-auto drop-shadow-2xl"
              />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

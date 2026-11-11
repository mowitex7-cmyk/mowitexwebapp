import { motion } from "motion/react";
import usdEurVirtualAccountsInterfaceImg from "../../assets/a8b11da6871c5eac28458e58a223188371bf5d3e.png";
export const VirtualAccounts = () => (
  <section className="py-20 bg-slate-50 dark:bg-[#0B1120]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#EEF2FF] dark:bg-[#1e293b] rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 md:gap-20 overflow-hidden"
      >
        <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B1120] dark:text-white mb-6">
            {"USD & EUR virtual accounts"}
          </h2>
          Get local-account convenience for global business. Receive payments
          effortlessly via ACH (US) and SEPA (Europe) using your own dedicated
          IBAN. Hold and manage balances in USD and EUR, then instantly pay out
          across Africa — all with lower fees.
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={usdEurVirtualAccountsInterfaceImg}
              alt={"USD & EUR Virtual Accounts Interface"}
              className="w-full max-w-sm h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

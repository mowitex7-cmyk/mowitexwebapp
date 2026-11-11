import { Globe, Send, CreditCard, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
const features = [
  {
    icon: Globe,
    title: "Hold & exchange multiple currencies at fair rates",
    description:
      "Access real mid-market rates with no hidden fees. Hold USD, NGN, GBP, EUR and more.",
  },
  {
    icon: Send,
    title: "Send instantly to friends, mobile money or banks",
    description:
      "Transfer money in seconds. No fees when sending to other Mowitex users.",
  },
  {
    icon: CreditCard,
    title: "Create virtual USD cards for online shopping",
    description:
      "Shop globally with virtual cards. Get better exchange rates and save on international purchases.",
  },
  {
    icon: ShieldCheck,
    title: "Bank-grade security with biometrics & 2FA",
    description:
      "Your money is protected with military-grade encryption, biometric authentication, and two-factor security.",
  },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
export const WhyChooseUs = () => (
  <section className="py-24 bg-slate-50 dark:bg-[#0B1120] relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 dark:bg-orange-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4"
        >
          Why Choose US
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-orange-500 mx-auto rounded-full"
        />
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="group relative p-8 rounded-3xl bg-white dark:bg-[#111827] border border-orange-100 dark:border-orange-500/30 shadow-lg hover:shadow-orange-500/20 dark:hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-all duration-300 flex flex-col items-center text-center h-full"
          >
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-orange-500/50 transition-colors duration-300 pointer-events-none" />
            <div className="w-16 h-16 rounded-2xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-orange-600 dark:text-orange-500">
              <feature.icon className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              {feature.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

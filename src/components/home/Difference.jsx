import { CircleCheck } from "lucide-react";
import { motion } from "motion/react";
import mowitexAppInterfaceImg from "../../assets/50d3bc44d7d6d88b6a2e01238ccdbfec78e3972b.png";
const differencePoints = [
  "Sending and receiving money across the globe",
  "Creating and funding virtual cards",
  "Bill payments",
  "Airtime and Data top-up",
  "Gift cards",
  "Tuition payments",
];
export const Difference = () => (
  <section className="py-24 bg-white dark:bg-[#0B1120] overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="w-full lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 uppercase tracking-wide"
          >
            The difference is clear
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
          >
            Global payment solutions for individuals and businesses — made
            simple, secure, and scalable. include:
          </motion.p>
          <ul className="space-y-4 mb-10">
            {differencePoints.map((differencePoint, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-4 text-slate-700 dark:text-slate-200"
              >
                <CircleCheck className="w-6 h-6 text-blue-600 dark:text-blue-500 flex-shrink-0" />
                <span className="text-lg">{differencePoint}</span>
              </motion.li>
            ))}
          </ul>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-slate-500 dark:text-slate-400 text-base leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-6"
          >
            Our team of experts works tirelessly to provide cutting-edge payment
            solutions to individuals and businesses worldwide, and we are proud
            to serve customers in multiple countries and regions.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl -z-10" />
            <img
              src={mowitexAppInterfaceImg}
              alt="Mowitex App Interface"
              className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

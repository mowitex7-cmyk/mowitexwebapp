import {
  ShieldCheck,
  Users,
  Star,
  Handshake,
  Globe,
  PiggyBank,
  CreditCard,
  Wallet,
  Gift,
  Smartphone,
  Receipt,
  GraduationCap,
  Sparkles,
  Eye,
} from "lucide-react";
import { motion } from "motion/react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import mowitexGlobalPresenceImg from "../assets/052fa0a418f412a3e5590975a2b0d602fc11119c.png";
const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We serve our customers with fairness and transparency. We settle all contracts by the book and speak plainly and truthfully.",
  },
  {
    icon: Users,
    title: "Customer focus",
    description:
      "We put the customer first and strive to build products that deliver the best customer experience.",
  },
  {
    icon: Star,
    title: "Competence",
    description:
      "We value colleagues with the ability to use good judgement and an aptitude to learn and grow.",
  },
  {
    icon: Handshake,
    title: "Teamwork",
    description:
      "We value team players that collaborate freely across departments with humility and ambition.",
  },
];
const ValuesSection = () => (
  <section className="py-24 bg-slate-50 dark:bg-[#0B1120]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        <div className="w-full lg:w-1/3">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight"
          >
            Our values are the fabric of our culture
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-red-600 mt-6 rounded-full"
          />
        </div>
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-[#111827] p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center group hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-900/10 flex items-center justify-center text-red-600 dark:text-red-500 mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
const GlobalReachSection = () => (
  <section className="py-20 bg-white dark:bg-[#0B1120] relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 order-2 lg:order-1"
        >
          <h2 className="font-bold mb-8 text-slate-900 dark:text-white text-[32px]">
            Global Reach, No Restrictions
          </h2>
          <div className="space-y-6 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              Mowitex is a leading fintech company with a global presence, duly
              registered and operating in the United States, United Kingdom, and
              Nigeria.
            </p>
            <p>
              We empower individuals, businesses, and remote workers to manage
              their finances with flexibility and convenience. Our platform
              enables seamless access to funds, effortless spending, receiving
              payments, earning income, and conducting any global
              transaction—exactly as you prefer.
            </p>
            <p>
              At the core of our offering is our virtual card service, which
              provides unrestricted access for worldwide use with no limits and
              no unnecessary restrictions. These virtual cards are issued by
              Mowitex Technology Partners, an authorized Mastercard issuer,
              ensuring secure, reliable, and globally accepted payment
              capabilities wherever Mastercard is welcomed.
            </p>
            <p>
              With Mowitex, experience borderless financial freedom backed by
              trusted payment infrastructure and regulatory compliance across
              key markets.
            </p>
            <p className="font-semibold text-slate-900 dark:text-white">
              Join us in redefining how you interact with your money—securely,
              efficiently, and on your terms.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
        >
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl scale-75 animate-pulse" />
            <motion.img
              src={mowitexGlobalPresenceImg}
              alt="Mowitex Global Presence"
              className="w-full h-full object-contain relative z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: 1 / 0, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
const services = [
  {
    title: "Global Money Transfers",
    description:
      "Fast, reliable, and cost-effective cross-border payments to family, friends, or business partners worldwide.",
    icon: Globe,
    color: "text-blue-500",
    bg: "bg-blue-500/10 dark:bg-blue-500/20",
  },
  {
    title: "Secure Savings Options",
    description:
      "Including our innovative Vault feature for dedicated, high-value saving in major currencies such as Pounds (GBP), Dollars (USD), and Naira (NGN).",
    icon: PiggyBank,
    color: "text-green-500",
    bg: "bg-green-500/10 dark:bg-green-500/20",
  },
  {
    title: "Physical and Virtual Cards",
    description:
      "Spend confidently with both physical debit cards and instantly-issued virtual cards for online and contactless payments.",
    icon: CreditCard,
    color: "text-purple-500",
    bg: "bg-purple-500/10 dark:bg-purple-500/20",
  },
  {
    title: "Multi-Currency Wallet",
    description:
      "Hold, manage, and convert balances effortlessly in multiple currencies, including NGN, USD, GBP, EUR, and more.",
    icon: Wallet,
    color: "text-orange-500",
    bg: "bg-orange-500/10 dark:bg-orange-500/20",
  },
  {
    title: "Gift Cards",
    description:
      "Purchase and send digital gift cards for popular brands and retailers.",
    icon: Gift,
    color: "text-pink-500",
    bg: "bg-pink-500/10 dark:bg-pink-500/20",
  },
  {
    title: "Airtime and Data Top-Up",
    description:
      "Recharge mobile phones instantly for yourself or others, across supported networks.",
    icon: Smartphone,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10 dark:bg-cyan-500/20",
  },
  {
    title: "Bill Payments",
    description:
      "Conveniently pay utilities, subscriptions, cable, and other recurring bills in one place.",
    icon: Receipt,
    color: "text-red-500",
    bg: "bg-red-500/10 dark:bg-red-500/20",
  },
  {
    title: "Tuition and Educational Payments",
    description:
      "Securely fund school fees, courses, and educational expenses locally or internationally.",
    icon: GraduationCap,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10 dark:bg-indigo-500/20",
  },
  {
    title: "Lifestyle Services",
    description:
      "Access a range of everyday conveniences designed to simplify and enhance your financial life.",
    icon: Sparkles,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10 dark:bg-yellow-500/20",
  },
];
const ServicesSection = () => (
  <section className="py-20 bg-slate-50 dark:bg-[#0B1120] relative overflow-hidden">
    <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-30 dark:opacity-20">
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
        >
          Our core services include a comprehensive suite of financial tools
          designed for your freedom.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 group"
          >
            <div
              className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
            >
              <service.icon className={`w-7 h-7 ${service.color}`} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
const MissionSection = () => (
  <section className="py-24 bg-slate-900 dark:bg-black relative overflow-hidden">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px]" />
    </div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="inline-block text-blue-500 font-semibold tracking-wider text-sm uppercase mb-4"
      >
        Our Mission
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8"
      >
        We exist to unlock financial independence for all.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto"
      >
        Enabling remote workers, individuals, and businesses to manage, move,
        and grow their money freely and confidently from anywhere in the world.
      </motion.p>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-12 rounded-full"
      />
    </div>
  </section>
);
const VisionSection = () => (
  <section className="py-24 bg-white dark:bg-[#0F172A] relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px]" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/3 flex justify-center lg:justify-end"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center shadow-2xl shadow-blue-500/10 dark:shadow-blue-500/20 border border-white/50 dark:border-slate-700">
            <Eye
              className="w-20 h-20 md:w-24 md:h-24 text-blue-600 dark:text-blue-400 opacity-80"
              strokeWidth={1.5}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: 1 / 0, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-blue-300 dark:border-slate-600"
            />
            <div className="absolute inset-4 rounded-full border border-blue-200 dark:border-slate-700 opacity-50" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-2/3 text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Our Vision
          </h2>
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            <p className="font-medium text-xl text-slate-900 dark:text-white">
              A world where everyone can fully participate in and thrive within
              the global economy.
            </p>
            <p>
              We are committed to democratizing finance — making seamless,
              secure, and borderless financial services accessible to
              individuals and businesses everywhere, regardless of location or
              background.
            </p>
            <p>
              Through innovative payment solutions, we empower people to send,
              receive, spend, save, and invest with ease, unlocking economic
              opportunities for all in today's digital world.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
export const About = () => (
  <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] text-slate-900 dark:text-white font-sans selection:bg-blue-500/30 transition-colors duration-300">
    <Navbar />
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
        >
          About Mowitex
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
        >
          Building the financial infrastructure for the internet. We help
          businesses and individuals move money globally, instantly, and
          securely.
        </motion.p>
      </div>
    </section>
    <GlobalReachSection />
    <ServicesSection />
    <MissionSection />
    <VisionSection />
    <ValuesSection />
    <Footer />
  </div>
);

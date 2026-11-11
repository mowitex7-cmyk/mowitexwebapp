import {
  Snowflake,
  CreditCard,
  Bell,
  LayoutGrid,
  Zap,
  ShoppingBag,
  Shield,
  Lock,
  ShieldCheck,
  Download,
  Check,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import handHoldingDollarCardImg from "../assets/47497bd9e569402836e10f864c3d793be3473cae.png";
import abstractSecurityGraphicImg from "../assets/57eb206ae666fac2ef8276f48d8dae652c4a1886.png";
const cardControls = [
  { Icon: Snowflake, text: "Freeze and unfreeze your card instantly." },
  { Icon: CreditCard, text: "Generate digital cards for extra peace of mind." },
  { Icon: Bell, text: "Get notifications for every transaction." },
];
const useCases = [
  {
    Icon: LayoutGrid,
    title: "Advertising",
    tint: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    items: [
      "Facebook Ads",
      "Google Ads",
      "TikTok Ads",
      "Instagram Ads",
      "Twitter / X Ads",
    ],
  },
  {
    Icon: Zap,
    title: "Cloud & Apps",
    tint: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    items: ["AWS", "Google Cloud", "DigitalOcean", "Heroku", "Microsoft Azure"],
  },
  {
    Icon: ShoppingBag,
    title: "Services",
    tint: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400",
    items: ["Netflix", "Spotify", "Apple Music", "Zoom", "Canva"],
  },
];
const features = [
  {
    Icon: Shield,
    title: "Compliant Transactions",
    desc: "Backed by local and international financial regulations.",
  },
  {
    Icon: Lock,
    title: "Two-Factor Authentication",
    desc: "Added layers of protection for every account.",
  },
  {
    Icon: ShieldCheck,
    title: "Anti-Fraud Measures",
    desc: "Proactive monitoring to secure your money.",
  },
];
export const VirtualCardsPage = () => (
  <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] text-slate-900 dark:text-white font-sans transition-colors duration-300">
    <Navbar />
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        >
          Virtual Cards for Every Need
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 dark:text-slate-300 mb-8"
        >
          Create unlimited virtual cards for your business expenses,
          subscriptions, and ad campaigns. Control spending with custom limits
          and real-time tracking.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/signup"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all hover:scale-105"
          >
            Get Started
          </Link>
          <Link
            to="/dashboard"
            className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-semibold transition-all"
          >
            View Dashboard
          </Link>
        </motion.div>
      </div>
    </section>
    <section className="py-20 bg-white dark:bg-[#0B1120] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="z-10"
          >
            <span className="text-slate-500 dark:text-slate-400 font-medium mb-4 block uppercase tracking-wider text-sm">
              Cards
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white leading-tight tracking-tight">
              Dollar cards for
              <br />
              everyday use
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed">
              Get physical and virtual USD cards for online and offline
              transactions with transparent and competitive fees.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="px-8 py-4 bg-[#5B4DFF] hover:bg-[#4a3df5] text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25 text-lg"
              >
                Request a card
              </Link>
              <Link
                to="/signup"
                className="px-8 py-4 bg-[#E0E0FF] dark:bg-slate-800 hover:bg-[#d0d0f0] dark:hover:bg-slate-700 text-[#5B4DFF] dark:text-white rounded-xl font-bold transition-all flex items-center gap-3 text-lg"
              >
                <Download className="w-5 h-5" />
                Download app
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <img
              src={handHoldingDollarCardImg}
              alt="Hand holding dollar card"
              className="w-full h-auto object-cover rounded-3xl transform hover:scale-[1.02] transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-slate-100 dark:bg-[#0F172A]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight text-slate-900 dark:text-white"
          >
            Rest Easy. Your Money's Safe
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardControls.map(({ Icon: Icon, text: text }, index) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 h-full flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-6 text-slate-900 dark:text-white">
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-20 bg-white dark:bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pay for ads, apps, and services
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Our cards are accepted globally. seamless payments for your
            marketing campaigns, cloud infrastructure, and SaaS subscriptions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map(
            ({ Icon: Icon, title: title, tint: tint, items: items }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${tint}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-slate-600 dark:text-slate-300"
                    >
                      <Check className="w-5 h-5 text-green-500" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
    <section className="py-24 bg-[#4338ca] dark:bg-[#312E81] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Security you can rely on
            </h2>
            <p className="text-lg text-indigo-100 mb-12 max-w-lg leading-relaxed">
              International transfers made easy. Whether you're sending to
              Africa, the US, Europe, or the UK, we've got you covered.
            </p>
            <div className="relative z-10">
              <img
                src={abstractSecurityGraphicImg}
                alt="Abstract security graphic"
                className="w-full h-auto object-contain max-w-md transform -translate-x-4 md:-translate-x-0"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            {features.map(({ Icon: Icon, title: title, desc: desc }) => (
              <div key={title} className="group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-indigo-100 mb-6">{desc}</p>
                <div className="h-px bg-white/20 w-full" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

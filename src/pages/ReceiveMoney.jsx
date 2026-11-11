import { Shield, Lock, ShieldCheck, ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import paymentMethodsInterfaceImg from "../assets/2cf12aed0d687a214400a1e8af9cbaf71337671e.png";
import abstractSecurityGraphicImg from "../assets/517af251aea9c33322c2b0b98dac1f08c16deedf.png";
import satelliteShowingGlobalConnectivityImg from "../assets/7f43100fbca81aa67e4b47c898fee52955a0abcf.png";
import simplePaymentLinkInterfaceImg from "../assets/a8b80983e0bc2613fe6addd119e2e26adf0af355.png";
import advancedPaymentControlInterfaceImg from "../assets/db61bb854b31f724bc02d139931e84a7bb977bd6.png";
import img3dChainAndNotificationShowingSuccessfulDepositImg from "../assets/e6cfc9de26d3ea0cf2aa327cc09f6c615bb25a50.png";
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
export const ReceiveMoney = () => (
  <div className="min-h-screen bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white font-sans selection:bg-blue-500/30 transition-colors duration-300">
    <Navbar />
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700/50">
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                We've made transactions flexible
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Accept Payment <br />
              Via Links
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
              Create payment links for your business and get paid across
              different countries. Simple, secure, and instant.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-lg hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Get started
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[80px] -z-10 pointer-events-none" />
              <img
                src={img3dChainAndNotificationShowingSuccessfulDepositImg}
                alt="3D Chain and Notification showing successful deposit"
                className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden bg-green-900 aspect-square flex items-center justify-center p-8">
              <img
                src={satelliteShowingGlobalConnectivityImg}
                alt="Satellite showing global connectivity"
                className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 rounded-full text-sm font-medium mb-6">
              Network
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
              Receive global payments quickly and reliably
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Seamlessly connect to our global payment network and empower your
              customers to get paid from wherever in the world they need – all
              from within your own products.
            </p>
            <div className="space-y-6">
              {[
                "Reachable worldwide from 40+ source currencies",
                "Move money at the mid-market FX rate",
                "Offer 100-minute median payment speed",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-gray-900 dark:text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
    <section className="bg-white dark:bg-[#0B1120] py-24 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 tracking-wide leading-tight text-slate-900 dark:text-white">
            No bulky information,
            <br />
            just a single link
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Save your payers the stress, all they need is a link to initiate
            payment.
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 rounded-3xl -z-10" />
          <img
            src={simplePaymentLinkInterfaceImg}
            alt="Simple payment link interface"
            className="w-full h-auto object-contain shadow-2xl rounded-2xl border border-gray-100 dark:border-gray-800"
          />
        </div>
      </div>
    </section>
    <section className="py-24 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Security you can rely on
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-lg leading-relaxed">
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
          </div>
          <div className="space-y-12">
            {features.map(({ Icon: Icon, title: title, desc: desc }) => (
              <div key={title} className="group">
                <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mb-4 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors">
                  <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{desc}</p>
                <div className="h-px bg-gray-200 dark:bg-gray-800 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white dark:bg-[#0B1120] py-24 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl opacity-50 rounded-full" />
              <img
                src={paymentMethodsInterfaceImg}
                alt="Payment methods interface"
                className="relative w-full h-auto object-contain z-10 drop-shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-8 tracking-wide leading-tight text-slate-900 dark:text-white">
              Choose how you
              <br />
              want to get paid
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
              Create unlimited payment links for your business and get paid
              instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white dark:bg-[#0B1120] py-32 text-slate-900 dark:text-white border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 tracking-wide max-w-4xl mx-auto leading-tight text-slate-900 dark:text-white">
            A more advanced way to
            <br />
            control how to receive money
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Create unlimited payment links for your business and get paid
            instantly. Set custom amounts, currencies, and payment methods.
          </p>
        </div>
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
          <img
            src={advancedPaymentControlInterfaceImg}
            alt="Advanced payment control interface"
            className="relative w-full h-auto object-contain z-10 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

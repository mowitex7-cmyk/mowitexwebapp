import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { AppStoreButton } from "../components/StoreButtons";
import friendsSharingReferralLinkImg from "../assets/8eb02bdb487134be31a66e852cee1ae172dfe732.png";
const imageOne =
  "https://images.unsplash.com/photo-1503896853388-c4704a20de6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const imageTwo =
  "https://images.unsplash.com/photo-1592668025016-6b7d4897ae5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const imageThree =
  "https://images.unsplash.com/photo-1614917752523-3e61c00e5e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const steps = [
  {
    n: 1,
    title: "Get your link",
    text: "Log in to the Mowitex app, tap the reward button in the top right of the dashboard to copy your referral link.",
    img: imageOne,
    curve: "left-0 w-[120%] -translate-x-4",
  },
  {
    n: 2,
    title: "Share your link",
    text: "Share your code. Get up to $4 when your friends use your code in line with the referral requirements listed below.",
    img: imageTwo,
    curve: "right-0 w-[120%] translate-x-4",
  },
  {
    n: 3,
    title: "Get paid",
    text: "Go to your account, tap Rewards, then Claim Reward to send it to your USD wallet. Your friend also gets $2.",
    img: imageThree,
    curve: "left-1/2 w-[140%] -translate-x-1/2",
  },
];
const faqs = [
  {
    question: "How does the Referral Bonus work?",
    answer:
      "When you invite a friend to Mowitex using your unique link, they get $2 when they sign up. Once they complete the referral requirements, you earn $4. It's that simple!",
  },
  {
    question: "What are Mowitex's referral criteria?",
    answer:
      "To qualify, your friend must sign up, verify their identity, and complete their first transaction of at least $10. Terms and conditions apply.",
  },
  {
    question: "How can I track your referrals on Mowitex?",
    answer:
      "You can track the status of your referrals directly in the Rewards section of your Mowitex app dashboard. You'll see who signed up and who has completed the requirements.",
  },
  {
    question: "Conditions that disqualify you from a Mowitex referral bonus",
    answer:
      "Self-referrals, creating multiple accounts, or using fraudulent methods to generate referrals will result in disqualification and potential account suspension.",
  },
  {
    question: "How to claim your Mowitex referral bonus?",
    answer:
      "Once earned, your bonus is credited to your Rewards balance. You can withdraw it instantly to your main Mowitex wallet.",
  },
];
export const Referral = () => (
  <div className="min-h-screen bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white font-sans selection:bg-blue-500/30 transition-colors duration-300 flex flex-col">
    <Navbar />
    <main className="flex-grow pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2">
            <span className="text-gray-500 dark:text-gray-400 font-medium mb-4 block text-sm tracking-wide uppercase">
              Referrals
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Share Mowitex,
              <br />
              Earn $4
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-lg">
              Good things are meant to be shared. Invite friends to Mowitex and
              earn $4 for every successful referral, while they get $2. Start
              sharing and earning today.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#5B4DFF] hover:bg-[#4a3df0] text-white font-semibold py-3.5 px-8 rounded-lg transition-colors shadow-lg shadow-indigo-500/20 text-sm">
                Get your referral link
              </button>
              <AppStoreButton />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative rounded-[2rem] overflow-hidden aspect-square md:aspect-[4/3] bg-gray-100 dark:bg-gray-800 shadow-2xl group">
              <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/5 transition-colors duration-500" />
              <img
                src={friendsSharingReferralLinkImg}
                alt="Friends sharing referral link"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            How it works
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.n}
              className="bg-white dark:bg-[#1e293b] rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="p-8 pb-4 flex-grow z-10 relative">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm tracking-wider uppercase mb-3 block">
                  Step {step.n}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
                  {step.text}
                </p>
              </div>
              <div className="relative h-64 mt-4 overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30">
                <div
                  className={`absolute -top-12 ${step.curve} h-24 bg-white dark:bg-[#1e293b] rounded-[50%] z-10 transform`}
                />
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 bg-white dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
            <div className="w-full md:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white sticky top-24">
                Frequently asked questions
              </h2>
            </div>
            <div className="w-full md:w-2/3">
              <AccordionPrimitive.Root
                type="single"
                collapsible={true}
                className="space-y-4"
              >
                {faqs.map((faq, index) => (
                  <AccordionPrimitive.Item
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-gray-200 dark:border-gray-800 last:border-0 pb-4"
                  >
                    <AccordionPrimitive.Header>
                      <AccordionPrimitive.Trigger className="flex w-full items-center justify-between py-4 text-left group">
                        <span className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors pr-8">
                          {faq.question}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors">
                          <Plus className="w-5 h-5 text-indigo-600 dark:text-indigo-400 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                        </div>
                      </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionPrimitive.Content className="overflow-hidden">
                      <div className="pb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </AccordionPrimitive.Content>
                  </AccordionPrimitive.Item>
                ))}
              </AccordionPrimitive.Root>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

import { useState } from "react";
import { Plus, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import questionsIllustrationImg from "../assets/fad640c19cf83ae0491ad53fd30076918c1c8f17.png";
const faqSections = [
  {
    title: "General FAQS",
    subtitle: "Everything you need to know about Mowitex",
    faqs: [
      {
        question: "What do I need to get started with Mowitex?",
        answer:
          "To get started with Mowitex, you need to download the app, create an account with your email address or phone number, verify your identity, and add funds to your wallet. It's quick and easy!",
      },
      {
        question: "How does Mowitex prevent unauthorized access to my account?",
        answer:
          "Mowitex uses advanced security measures including two-factor authentication, biometric login, encryption, and real-time fraud monitoring to protect your account from unauthorized access.",
      },
      {
        question: "How can I track expenses on the app?",
        answer:
          "You can track all your expenses through the Transactions page in your dashboard. The app automatically categorizes your spending and provides detailed insights through the Analytics section.",
      },
      {
        question: "How do I fund my wallet?",
        answer:
          "You can fund your Mowitex wallet through bank transfer, debit card, or by receiving money from other Mowitex users. Simply go to your wallet and select 'Add Funds' to choose your preferred method.",
      },
      {
        question: "Is there a transaction limit on the app?",
        answer:
          "Transaction limits vary based on your account verification level. Fully verified accounts have higher limits. You can view your specific limits in the app settings or contact support for more information.",
      },
    ],
  },
  {
    title: "Send Money FAQS",
    subtitle: "Everything you need to know about sending money with Mowitex",
    faqs: [
      {
        question: "What countries can I send money to?",
        answer:
          "Mowitex supports money transfers to over 150+ countries worldwide. You can send money to major destinations across Europe, Asia, Africa, Americas, and Oceania. Check our Send Money page for the complete list of supported countries.",
      },
      {
        question: "Are there any associated fees with international transfers?",
        answer:
          "Mowitex offers competitive and transparent fees for international transfers. Fees vary depending on the destination country, transfer amount, and payment method. You'll always see the exact fee before confirming your transfer.",
      },
      {
        question: "How long does it take for money to reach the recipient?",
        answer:
          "Transfer times vary by destination and payment method. Most transfers arrive within minutes to a few hours. Some destinations may take 1-3 business days. You can track your transfer status in real-time through the app.",
      },
      {
        question:
          "Is there a minimum or maximum limit for sending money internationally?",
        answer:
          "Minimum transfer amounts start from as low as $1. Maximum limits depend on your account verification level and destination country. Fully verified accounts have higher sending limits. Check your account for specific limits.",
      },
      {
        question: "What transfer methods can I use to send money?",
        answer:
          "You can send money using bank transfer, debit card, credit card, or from your Mowitex wallet balance. Different methods may have varying fees and processing times. Choose the method that works best for you.",
      },
    ],
  },
  {
    title: "Build Credit FAQS",
    subtitle: "Everything you need to know about building credit with Mowitex",
    faqs: [
      {
        question: "How can I get started?",
        answer:
          "Getting started with Build Credit is simple. Open the Mowitex app, navigate to the Build Credit section, complete a quick application, and start making on-time payments. Your payment history will be reported to credit bureaus to help build your credit score.",
      },
      {
        question: "Which countries can I send money to using Mowitex?",
        answer:
          "With Mowitex, you can send money to over 150+ countries worldwide. Our Build Credit feature works independently of money transfers, but you can combine both services for maximum benefit. Check the Send Money section for the complete country list.",
      },
      {
        question: "How does Mowitex calculate my credit score?",
        answer:
          "Mowitex doesn't calculate your credit score directly. Instead, we report your on-time payments and credit activity to major credit bureaus, who then use this information to update your credit score. Your payment history, credit utilization, and account age all contribute to your score.",
      },
      {
        question:
          "Are there any fees associated with the Build Credit feature?",
        answer:
          "Mowitex offers transparent pricing for the Build Credit feature. There may be a small monthly fee to maintain your credit building account. All fees are clearly displayed before you sign up, and there are no hidden charges. Check the app for current pricing.",
      },
      {
        question:
          "How long does it take to see an improvement in my credit score?",
        answer:
          "Most users start seeing improvements in their credit score within 2-3 months of consistent, on-time payments. However, the timeline can vary based on your current credit history and overall credit profile. Continue making regular payments for the best results.",
      },
    ],
  },
  {
    title: "BVN Registration FAQS",
    subtitle: "Everything you need to know about BVN registration with Mowitex",
    faqs: [
      {
        question: "How long does the registration process take?",
        answer:
          "The BVN registration process through Mowitex typically takes 5-10 minutes to complete. Once you submit your application, verification usually happens within 24-48 hours. You'll receive a notification once your BVN registration is complete.",
      },
      {
        question: "What fees are associated with the BVN registration?",
        answer:
          "Mowitex offers BVN registration at competitive rates. The fee structure is transparent and clearly displayed before you begin the registration process. There are no hidden charges, and you'll see all costs upfront in the app.",
      },
      {
        question: "Can I complete the BVN registration process online?",
        answer:
          "Yes! You can complete the entire BVN registration process online through the Mowitex app. Simply provide the required information, upload necessary documents, and submit your application. No need to visit a physical location.",
      },
      {
        question: "What is the next step after applying on the app?",
        answer:
          "After submitting your BVN registration application on the app, our team will review your documents and verify your information. You'll receive email and in-app notifications about your application status. Once approved, your BVN will be activated and ready to use.",
      },
      {
        question: "Can I apply from anywhere in the US?",
        answer:
          "Yes, you can apply for BVN registration from anywhere in the United States through the Mowitex app. The entire process is digital and location-independent, making it convenient for users across all US states and territories.",
      },
    ],
  },
];
const FaqSection = ({ title: title, subtitle: subtitle, faqs: faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-3">
              {title}
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400">
              {subtitle}
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-100 dark:bg-slate-800/50 rounded-lg overflow-hidden transition-all"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-200 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <Plus
                    className={`w-6 h-6 text-slate-600 dark:text-slate-400 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-45" : ""}`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export const FAQ = () => (
  <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] text-slate-900 dark:text-white font-sans selection:bg-blue-500/30 transition-colors duration-300">
    <Navbar />
    <main className="pt-20 relative overflow-hidden">
      <section className="relative bg-slate-900 dark:bg-black py-20 lg:py-32">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-6 flex justify-center lg:justify-start">
                <Sparkles className="w-12 h-12 text-yellow-400 fill-yellow-400 animate-pulse" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
                <span className="text-white">How can we </span>
                <span className="text-yellow-400 italic">help?</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0">
                We know you have questions for us, we have answers for you.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src={questionsIllustrationImg}
                alt="Questions illustration"
                className="w-full max-w-md lg:max-w-lg object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      {faqSections.map((faqSection) => (
        <FaqSection key={faqSection.title} {...faqSection} />
      ))}
      <section className="py-20 lg:py-32 bg-white dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-8">
            Can't find what you are looking for?
          </h2>
          <Link
            to="/help"
            className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

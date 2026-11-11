import {
  Globe,
  Settings,
  User,
  ArrowRightLeft,
  CircleDollarSign,
  Package,
  CreditCard,
  ShieldCheck,
  Briefcase,
  Coins,
} from "lucide-react";
export const helpArticles = [
  {
    id: "1",
    topicId: "general",
    title: "How do I create a Mowitex account?",
    description:
      "Step-by-step guide to signing up and verifying your identity.",
  },
  {
    id: "2",
    topicId: "general",
    title: "What countries does Mowitex support?",
    description: "List of supported countries and regions.",
  },
  {
    id: "3",
    topicId: "account-settings",
    title: "How to change my password",
    description:
      "Instructions for resetting or updating your password securely.",
  },
  {
    id: "4",
    topicId: "account-settings",
    title: "Updating my phone number",
    description:
      "Learn how to change the phone number associated with your account.",
  },
  {
    id: "5",
    topicId: "mowitex-account",
    title: "Account verification process (KYC)",
    description: "What documents are required to verify your account.",
  },
  {
    id: "6",
    topicId: "mowitex-account",
    title: "How to close my account",
    description: "Steps to permanently delete your Mowitex account and data.",
  },
  {
    id: "7",
    topicId: "transactions-and-transfers",
    title: "How long do transfers take?",
    description: "Expected processing times for different types of transfers.",
  },
  {
    id: "8",
    topicId: "transactions-and-transfers",
    title: "Why is my transfer delayed?",
    description: "Common reasons for transfer delays and how to resolve them.",
  },
  {
    id: "9",
    topicId: "pricing-and-limits",
    title: "What are the transaction fees?",
    description: "Detailed breakdown of fees for sending and receiving money.",
  },
  {
    id: "10",
    topicId: "pricing-and-limits",
    title: "How can I increase my sending limit?",
    description: "Steps to upgrade your account tier for higher limits.",
  },
  {
    id: "11",
    topicId: "security",
    title: "How to enable Two-Factor Authentication (2FA)",
    description: "Secure your account with an extra layer of protection.",
  },
  {
    id: "12",
    topicId: "security",
    title: "I suspect unauthorized activity",
    description:
      "What to do if you notice suspicious transactions on your account.",
  },
  {
    id: "13",
    topicId: "international-us-debit-card",
    title: "How to order an international debit card",
    description:
      "Requirements and steps to request your physical or virtual card.",
  },
  {
    id: "14",
    topicId: "us-only-debit-card",
    title: "Activating your US-only debit card",
    description: "How to activate your card once it arrives in the mail.",
  },
  {
    id: "15",
    topicId: "stablecoins",
    title: "What stablecoins does Mowitex support?",
    description: "Learn about USDC, USDT, and how to convert them.",
  },
  {
    id: "16",
    topicId: "stablecoins",
    title: "How to deposit stablecoins",
    description: "Guide to generating your wallet address and sending crypto.",
  },
  {
    id: "17",
    topicId: "legal",
    title: "Terms of Service",
    description: "Read our comprehensive terms and conditions.",
  },
  {
    id: "18",
    topicId: "legal",
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal data.",
  },
  {
    id: "19",
    topicId: "product-updates",
    title: "Recent app updates and features",
    description: "Check out the latest features we have added to Mowitex.",
  },
];
export const helpTopics = [
  {
    id: "general",
    title: "General",
    icon: Globe,
    bg: "bg-[#0070F3] dark:bg-[#0070F3]/90",
    borderHover: "hover:border-blue-200 dark:hover:border-blue-900/50",
    textHover: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
  },
  {
    id: "account-settings",
    title: "Account settings and personal information",
    icon: Settings,
    bg: "bg-[#FF9800] dark:bg-[#FF9800]/90",
    borderHover: "hover:border-orange-200 dark:hover:border-orange-900/50",
    textHover: "group-hover:text-orange-500 dark:group-hover:text-orange-400",
  },
  {
    id: "mowitex-account",
    title: "Mowitex account",
    icon: User,
    bg: "bg-[#20C997] dark:bg-[#20C997]/90",
    borderHover: "hover:border-teal-200 dark:hover:border-teal-900/50",
    textHover: "group-hover:text-teal-500 dark:group-hover:text-teal-400",
  },
  {
    id: "transactions-and-transfers",
    title: "Transactions and transfers",
    icon: ArrowRightLeft,
    bg: "bg-[#FF427B] dark:bg-[#FF427B]/90",
    borderHover: "hover:border-pink-200 dark:hover:border-pink-900/50",
    textHover: "group-hover:text-pink-500 dark:group-hover:text-pink-400",
  },
  {
    id: "pricing-and-limits",
    title: "Pricing and limits",
    icon: CircleDollarSign,
    bg: "bg-[#4285F4] dark:bg-[#4285F4]/90",
    borderHover: "hover:border-blue-200 dark:hover:border-blue-900/50",
    textHover: "group-hover:text-blue-500 dark:group-hover:text-blue-400",
  },
  {
    id: "product-updates",
    title: "Product updates",
    icon: Package,
    bg: "bg-[#FF6B6B] dark:bg-[#FF6B6B]/90",
    borderHover: "hover:border-rose-200 dark:hover:border-rose-900/50",
    textHover: "group-hover:text-rose-500 dark:group-hover:text-rose-400",
  },
  {
    id: "international-us-debit-card",
    title: "International US debit card",
    icon: CreditCard,
    bg: "bg-[#2563EB] dark:bg-[#2563EB]/90",
    borderHover: "hover:border-blue-200 dark:hover:border-blue-900/50",
    textHover: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
  },
  {
    id: "us-only-debit-card",
    title: "US-only debit card",
    icon: CreditCard,
    bg: "bg-[#20C997] dark:bg-[#20C997]/90",
    borderHover: "hover:border-emerald-200 dark:hover:border-emerald-900/50",
    textHover: "group-hover:text-emerald-500 dark:group-hover:text-emerald-400",
  },
  {
    id: "security",
    title: "Security",
    icon: ShieldCheck,
    bg: "bg-[#06B6D4] dark:bg-[#06B6D4]/90",
    borderHover: "hover:border-cyan-200 dark:hover:border-cyan-900/50",
    textHover: "group-hover:text-cyan-500 dark:group-hover:text-cyan-400",
  },
  {
    id: "legal",
    title: "Legal",
    icon: Briefcase,
    bg: "bg-[#FF5722] dark:bg-[#FF5722]/90",
    borderHover: "hover:border-orange-200 dark:hover:border-orange-900/50",
    textHover: "group-hover:text-orange-500 dark:group-hover:text-orange-400",
  },
  {
    id: "stablecoins",
    title: "Stablecoins",
    icon: Coins,
    bg: "bg-[#1E56A0] dark:bg-[#1E56A0]/90",
    borderHover: "hover:border-indigo-200 dark:hover:border-indigo-900/50",
    textHover: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
  },
];
export const getTopicTitle = (topicId) => {
  if (!topicId) return "Help Topic";
  const topic = helpTopics.find((helpTopic) => helpTopic.id === topicId);
  return topic
    ? topic.title
    : topicId
        .split("-")
        .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
        .join(" ");
};

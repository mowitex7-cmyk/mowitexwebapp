import { useState } from "react";
import { Gift, Zap, Globe, ArrowUpRight, FolderOpen } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import happyCreatorUsingMobilePhoneImg from "../assets/11c960c1c53b8a3c91a356c4e3e934010498532a.png";
const steps = [
  {
    n: 1,
    title: "Apply to Join",
    text: "Fill out a simple application form with your details and content creation style. We welcome creators of all types - from tech community leaders to travel content creators.",
    img: "https://images.unsplash.com/photo-1682343398449-db7a5ff33abd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    corner: "rounded-tr-[6rem]",
  },
  {
    n: 2,
    title: "Create & Share",
    text: "Post engaging content about your Mowitex experience across your social platforms. We'll provide you with exclusive product updates and guides to help you create impactful content.",
    img: "https://images.unsplash.com/photo-1600660622236-f446d098e192?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    corner: "rounded-tl-[6rem]",
  },
  {
    n: 3,
    title: "Earn Rewards",
    text: "Get $ stipends. Unlock exclusive merch, subscriptions, and premium perks based on your creator rank and posting consistency.",
    img: "https://images.unsplash.com/photo-1667996112916-813d6041a849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    corner: "rounded-tr-[6rem]",
  },
];
const contentTypes = [
  "Short-form video",
  "Long-form video",
  "Written",
  "Photo/Design",
  "Webinar/Podcast",
  "Travel & Lifestyle",
  "Community/Tech event",
  "Others (tell us more below)",
];
const perks = [
  {
    Icon: Gift,
    title: "Exclusive Perks",
    description:
      "Get access to premium workspace discounts, streaming subscriptions, and travel benefits.",
  },
  {
    Icon: Zap,
    title: "Monthly Stipends",
    description:
      "Earn steady income for your content and promotion efforts with our competitive stipend program.",
  },
  {
    Icon: Globe,
    title: "Global Network",
    description:
      "Connect with other creators and be part of our exclusive events and workshops worldwide.",
  },
];
const inputClass =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors";
const FieldError = ({ show: show, msg = "Required" }) =>
  show ? <span className="text-red-400 text-xs">{msg}</span> : null;
export const Creators = () => {
  const {
    register: register,
    handleSubmit: handleSubmit,
    formState: { errors: errors, isSubmitting: isSubmitting },
    reset: reset,
  } = useForm();
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [showTypeError, setShowTypeError] = useState(false);
  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type],
    );
    setShowTypeError(false);
  };
  const onSubmit = async () => {
    if (selectedTypes.length === 0) {
      setShowTypeError(true);
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    toast.success("Application submitted successfully!");
    reset();
    setSelectedTypes([]);
  };
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white font-sans selection:bg-blue-500/30 transition-colors duration-300">
      <Navbar />
      <main>
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <div className="w-full lg:w-1/2 space-y-8 z-10">
                <span className="inline-block text-sm font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
                  Creator Club
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                  Get paid to promote Mowitex
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
                  Turn your influence into rewards by becoming a Mowitex
                  Creator. Earn $ stipends, exclusive merch, and premium perks
                  like workspace discounts, streaming subscriptions, and travel
                  benefits.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={() => {
                      return document
                        .getElementById("application-form")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-orange-500/30"
                  >
                    Join the Club
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-orange-100 to-rose-100 dark:from-orange-900/20 dark:to-rose-900/20 rounded-full blur-3xl -z-10 opacity-60" />
                <img
                  src={happyCreatorUsingMobilePhoneImg}
                  alt="Happy creator using mobile phone"
                  className="w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-slate-50 dark:bg-[#0B1120]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900 dark:text-white tracking-tight">
              How it works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div
                  key={step.n}
                  className="bg-white dark:bg-[#1e293b] rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col h-full group"
                >
                  <div className="p-8 pb-0">
                    <span className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-3 block">
                      Step {step.n}
                    </span>
                    <h3 className="text-2xl font-bold text-[#5B4DFF] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-[15px]">
                      {step.text}
                    </p>
                  </div>
                  <div className="mt-auto pt-8 relative h-72">
                    <div
                      className={`w-full h-full overflow-hidden ${step.corner} bg-gradient-to-br from-indigo-100 to-orange-100 dark:from-indigo-900/30 dark:to-orange-900/20`}
                    >
                      <img
                        src={step.img}
                        alt={step.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="application-form"
          className="py-24 bg-[#0f1016] text-white relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px]" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="w-full lg:w-1/3">
                <div className="mb-8 relative inline-block">
                  <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full" />
                  <div className="relative w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-12 border border-white/10">
                    <FolderOpen className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold mb-6 leading-tight">
                  Join the Mowitex
                  <br />
                  Creator Program
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Welcome to the club! If you're a creator who loves telling
                  stories, sharing tips, or showing off how you use Mowitex,
                  then we want you on board.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We're building a global community, so you can apply from
                  anywhere. Fill the form for a chance to join the program, and
                  just maybe, this will be the beginning of something big.
                </p>
              </div>
              <div className="w-full lg:w-2/3">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 backdrop-blur-sm"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <input
                        {...register("firstName", { required: true })}
                        placeholder="First Name*"
                        className={inputClass}
                      />
                      <FieldError show={errors.firstName} />
                    </div>
                    <div className="space-y-2">
                      <input
                        {...register("lastName", { required: true })}
                        placeholder="Last Name*"
                        className={inputClass}
                      />
                      <FieldError show={errors.lastName} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <input
                      {...register("nickname", { required: true })}
                      placeholder="Nickname*"
                      className={inputClass}
                    />
                    <FieldError show={errors.nickname} />
                  </div>
                  <div className="space-y-2">
                    <input
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                      type="email"
                      placeholder="Email (The one used to sign up on Mowitex)*"
                      className={inputClass}
                    />
                    <FieldError
                      show={errors.email}
                      msg="Valid email required"
                    />
                  </div>
                  <div className="space-y-2">
                    <input
                      {...register("mowitexTag", { required: true })}
                      placeholder="Mowitex Tag*"
                      className={inputClass}
                    />
                    <FieldError show={errors.mowitexTag} />
                  </div>
                  <div className="space-y-2">
                    <input
                      {...register("phone")}
                      placeholder="Phone Number"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-2">
                    <select
                      {...register("country", { required: true })}
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="" className="bg-[#1e1e2e]">
                        Country of Residence*
                      </option>
                      <option value="us" className="bg-[#1e1e2e]">
                        United States
                      </option>
                      <option value="uk" className="bg-[#1e1e2e]">
                        United Kingdom
                      </option>
                      <option value="ca" className="bg-[#1e1e2e]">
                        Canada
                      </option>
                      <option value="ng" className="bg-[#1e1e2e]">
                        Nigeria
                      </option>
                      <option value="other" className="bg-[#1e1e2e]">
                        Other
                      </option>
                    </select>
                    <FieldError show={errors.country} />
                  </div>
                  <div className="space-y-4">
                    <label className="text-sm font-medium text-gray-300">
                      What type of content do you create? Pick all that apply.*
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {contentTypes.map((contentType) => (
                        <button
                          key={contentType}
                          type="button"
                          onClick={() => toggleType(contentType)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${selectedTypes.includes(contentType) ? "bg-indigo-600 border-indigo-600 text-white" : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"}`}
                        >
                          {contentType}
                        </button>
                      ))}
                    </div>
                    <FieldError
                      show={showTypeError}
                      msg="Please select at least one"
                    />
                  </div>
                  <div className="space-y-2">
                    <textarea
                      {...register("otherContent")}
                      placeholder="Enter other type of content"
                      rows={2}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <div className="space-y-2">
                    <textarea
                      {...register("socialHandles", { required: true })}
                      placeholder="Add your social handles (with links)*"
                      rows={3}
                      className={`${inputClass} resize-none`}
                    />
                    <FieldError show={errors.socialHandles} />
                  </div>
                  <div className="space-y-2">
                    <textarea
                      {...register("reason", { required: true })}
                      placeholder="Why do you want to join the Mowitex Creator Program?*"
                      rows={3}
                      className={`${inputClass} resize-none`}
                    />
                    <FieldError show={errors.reason} />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-indigo-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-slate-50 dark:bg-[#131b2e] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                Why become a Mowitex Creator?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Join a community of creators who are shaping the future of
                global finance while earning amazing rewards.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {perks.map(
                ({ Icon: Icon, title: title, description: description }) => (
                  <div
                    key={title}
                    className="bg-white dark:bg-[#1e293b] p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800"
                  >
                    <div className="w-14 h-14 bg-orange-50 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                      {title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {description}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

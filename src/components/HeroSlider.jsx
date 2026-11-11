import { Apple, Play, QrCode } from "lucide-react";
import Slider from "react-slick";
import image13c594af from "../assets/13c594af80900a55e39333050683adb116a05bf1.png";
const phoneImage =
  "https://images.unsplash.com/photo-1533234944761-2f5337579079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwJTIwaW50ZXJmYWNlJTIwcGhvbmV8ZW58MXx8fHwxNzcxNzA4MzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const walletImage =
  "https://images.unsplash.com/photo-1765226410758-9ae3d34cd791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjBkaWdpdGFsJTIwd2FsbGV0JTIwbW9iaWxlJTIwcGF5bWVudHxlbnwxfHx8fDE3NzE3MDgzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const slides = [
  {
    title: "DOWNLOAD OUR APP",
    description:
      "Experience the future of banking in your pocket. Manage your finances, send money globally, and track your expenses with ease using our secure and intuitive mobile app.",
    image: image13c594af,
    isAsset: true,
    features: ["Real-time notifications", "Biometric security", "24/7 Support"],
    bgColor: "bg-blue-50 dark:bg-blue-900/10",
  },
  {
    title: "GLOBAL BANKING",
    description:
      "Send and receive money across borders instantly. Our app supports over 50 currencies with competitive exchange rates and low fees.",
    image: phoneImage,
    isAsset: false,
    features: ["Multi-currency accounts", "Instant transfers", "Low fees"],
    bgColor: "bg-indigo-50 dark:bg-indigo-900/10",
  },
  {
    title: "SECURE & RELIABLE",
    description:
      "Your security is our top priority. With advanced encryption and fraud detection, you can bank with confidence knowing your money is safe.",
    image: walletImage,
    isAsset: false,
    features: ["End-to-end encryption", "Fraud protection", "Secure login"],
    bgColor: "bg-purple-50 dark:bg-purple-900/10",
  },
];
export const HeroSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5e3,
    arrows: false,
    pauseOnHover: true,
  };
  return (
    <div className="py-20 overflow-hidden bg-white dark:bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Slider {...sliderSettings} className="slider-custom-dots">
          {slides.map((slide, index) => (
            <div key={index} className="outline-none">
              <div
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 rounded-3xl p-8 lg:p-16 ${slide.bgColor} transition-colors duration-300`}
              >
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-none">
                  <div className="relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl -z-10" />
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className={`relative z-10 w-full max-w-[300px] lg:max-w-[380px] h-auto object-contain drop-shadow-2xl rounded-[3rem] border-8 border-white dark:border-gray-800 ${slide.isAsset ? "rotate-[-5deg]" : ""} transition-transform duration-500 hover:scale-105`}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left order-2 lg:order-none">
                  <div className="space-y-4">
                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                      {slide.title}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    {slide.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-white/5 text-blue-600 dark:text-blue-400 shadow-sm border border-gray-100 dark:border-white/10"
                      >
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                    <div className="flex flex-col gap-3 w-full sm:w-auto">
                      <button className="flex items-center gap-3 bg-[#0B1120] hover:bg-[#1a2540] dark:bg-white dark:hover:bg-gray-100 text-white dark:text-[#0B1120] px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 w-full sm:w-auto min-w-[200px]">
                        <Apple className="w-8 h-8 fill-current" />
                        <div className="text-left">
                          <div className="text-[10px] uppercase font-medium tracking-wide opacity-80">
                            Download on the
                          </div>
                          <div className="text-lg font-bold leading-none">
                            App Store
                          </div>
                        </div>
                      </button>
                      <button className="flex items-center gap-3 bg-[#0B1120] hover:bg-[#1a2540] dark:bg-white dark:hover:bg-gray-100 text-white dark:text-[#0B1120] px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 w-full sm:w-auto min-w-[200px]">
                        <Play className="w-8 h-8 fill-current" />
                        <div className="text-left">
                          <div className="text-[10px] uppercase font-medium tracking-wide opacity-80">
                            Get it on
                          </div>
                          <div className="text-lg font-bold leading-none">
                            Google Play
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="hidden sm:flex flex-col items-center p-3 bg-white dark:bg-white rounded-xl shadow-lg">
                      <QrCode
                        className="w-20 h-20 text-[#0B1120]"
                        strokeWidth={1.5}
                      />
                      <span className="text-[10px] font-bold text-[#0B1120] mt-1 tracking-wider">
                        SCAN TO GET
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <style>{`
        .slider-custom-dots .slick-dots { bottom: -40px; }
        .slider-custom-dots .slick-dots li button:before { font-size: 12px; color: #94a3b8; opacity: 0.5; }
        .slider-custom-dots .slick-dots li.slick-active button:before { color: #3b82f6; opacity: 1; }
      `}</style>
    </div>
  );
};

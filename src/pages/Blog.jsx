import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import mowitexLogoImg from "../assets/8d794ae00286f4d1ef4c228766965351d81ecb09.png";
const Paragraph = ({ children: children }) => (
  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    {children}
  </p>
);
const Heading = ({ children: children }) => (
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
    {children}
  </h2>
);
const BulletList = ({ items: items }) => (
  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);
export function Blog() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white text-center mb-6">
            Is Mowitex Legit?
          </h1>
          <div className="mb-8 rounded-2xl overflow-hidden">
            <img
              src={mowitexLogoImg}
              alt="Mowitex"
              className="w-[400px] h-[400px] mx-auto object-cover"
            />
          </div>
          <div className="max-w-none">
            <Paragraph>{`If you're considering using Mowitex to manage your finances or transfer money, one of your first questions is likely, "Is Mowitex legit?" The answer is a clear Yes! Mowitex is a licensed, secure, and trusted financial platform used by over 1 million people worldwide.`}</Paragraph>
            <Heading>
              Mowitex is Licensed and Regulated by Trusted Authorities
            </Heading>
            <Paragraph>
              Mowitex operates with full licenses and is regulated by financial
              authorities in various countries. This ensures your funds are
              secure and the platform follows strict financial guidelines.
              Mowitex is:
            </Paragraph>
            <BulletList
              items={[
                "Authorised by the Central Bank of Nigeria",
                "Registered by CAC in Nigeria as a Limited Company",
                "Registered with FinCEN in the US as a Money Service Business",
                "Licensed as Microfinance Regulatory Authority",
                "Authorised by the Personal Data Protection Office in USA",
                "Certified by the National Information Technology Authority in USA (NITA-U)",
              ]}
            />
            <Paragraph>
              These certifications ensure that Mowitex follows strict
              regulations, such as anti-money laundering (AML) and Know Your
              Customer (KYC) standards, making it a secure and trusted platform.
            </Paragraph>
            <Heading>Wide Range of Financial Services</Heading>
            <Paragraph>
              Mowitex isn't just a money transfer app—it's a comprehensive
              financial tool that offers a wide range of services, including:
            </Paragraph>
            <BulletList
              items={[
                "Multi-currency accounts where you can hold and manage various currencies, including stablecoins such as USDC and USDT, which are ideal for stable international transactions.",
                "Virtual dollar cards that allow users to make online purchases globally.",
                "Instant money transfers across borders to multiple countries.",
                "Mobile money transfers to popular services like M-Pesa and MTN Mobile Money.",
                "Bill payments and currency exchange at competitive rates.",
              ]}
            />
            <Paragraph>
              With these services, Mowitex allows users to manage their finances
              with ease and transparency.
            </Paragraph>
            <Heading>Advanced Security Measures on Mowitex</Heading>
            <Paragraph>
              Mowitex takes security seriously. The platform uses bank-level
              encryption and secure payment gateways to protect your personal
              information and funds. By following international security
              standards, including those required by its various regulatory
              bodies, you can trust that your transactions are safe.
            </Paragraph>
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
              <Paragraph>
                Liked this article? Follow us for more tips for personal finance
                and managing money internationally.
              </Paragraph>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Download our app on{" "}
                <a
                  href="#"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Google Play Store
                </a>{" "}
                |{" "}
                <a
                  href="#"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  App Store
                </a>
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Mowitex, making mobile money borderless.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

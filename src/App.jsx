import { useEffect } from "react";
import {
  Outlet,
  ScrollRestoration,
  createMemoryRouter,
  RouterProvider,
} from "react-router";
import { Toaster } from "sonner";
import { DashboardLayout } from "./components/dashboard/DashboardLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ThemeProvider } from "./components/ThemeProvider";
import { AuthProvider } from "./context/AuthContext";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Careers } from "./pages/Careers";
import { Creators } from "./pages/Creators";
import { Accounts } from "./pages/dashboard/Accounts";
import { AddMoney } from "./pages/dashboard/AddMoney";
import { Analytics } from "./pages/dashboard/Analytics";
import { Cards } from "./pages/dashboard/Cards";
import { Convert } from "./pages/dashboard/Convert";
import { Overview } from "./pages/dashboard/Overview";
import { PayBills } from "./pages/dashboard/PayBills";
import { PaymentLinks } from "./pages/dashboard/PaymentLinks";
import { Transactions } from "./pages/dashboard/Transactions";
import { Transfer } from "./pages/dashboard/Transfer";
import { ErrorPage } from "./pages/ErrorPage";
import { Exchange } from "./pages/Exchange";
import { FAQ } from "./pages/FAQ";
import { HelpArticle } from "./pages/help/HelpArticle";
import { HelpCenter } from "./pages/help/HelpCenter";
import { HelpTopic } from "./pages/help/HelpTopic";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { ReceiveMoney } from "./pages/ReceiveMoney";
import { Referral } from "./pages/Referral";
import { Rewards } from "./pages/Rewards";
import { SendMoney } from "./pages/SendMoney";
import { Signup } from "./pages/Signup";
import { VirtualCardsPage } from "./pages/VirtualCards";
import faviconImg from "./assets/84211ca9bfe815b263275c8b8f9c617263a72669.png";
const RootLayout = () => (
  <>
    <Outlet />
    <ScrollRestoration />
  </>
);
const router = createMemoryRouter([
  {
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    children: [
      { path: "/", Component: Home },
      { path: "/about", Component: About },
      { path: "/send-money", Component: SendMoney },
      { path: "/receive-money", Component: ReceiveMoney },
      { path: "/cards", Component: VirtualCardsPage },
      { path: "/exchange", Component: Exchange },
      { path: "/referral", Component: Referral },
      { path: "/rewards", Component: Rewards },
      { path: "/creators", Component: Creators },
      { path: "/blog", Component: Blog },
      { path: "/careers", Component: Careers },
      { path: "/help", Component: HelpCenter },
      { path: "/help/:topic", Component: HelpTopic },
      { path: "/help/:topic/:articleId", Component: HelpArticle },
      { path: "/faq", Component: FAQ },
      { path: "/login", Component: Login },
      { path: "/signup", Component: Signup },
      { path: "*", Component: NotFound },
      {
        path: "/dashboard",
        Component: ProtectedRoute,
        children: [
          {
            path: "",
            Component: DashboardLayout,
            children: [
              { index: true, Component: Overview },
              { path: "accounts", Component: Accounts },
              { path: "pay-bills", Component: PayBills },
              { path: "payment-links", Component: PaymentLinks },
              { path: "transactions", Component: Transactions },
              { path: "cards", Component: Cards },
              { path: "analytics", Component: Analytics },
              { path: "transfer", Component: Transfer },
              { path: "add-money", Component: AddMoney },
              { path: "convert", Component: Convert },
              { path: "*", Component: NotFound },
            ],
          },
        ],
      },
    ],
  },
]);
export function App() {
  useEffect(() => {
    document.title = "Mowitex";
    let favicon = document.querySelector("link[rel~='icon']");
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }
    favicon.href = faviconImg;
    const handleNavigate = (event) => router.navigate(event.detail);
    window.addEventListener("mx-nav", handleNavigate);
    return () => window.removeEventListener("mx-nav", handleNavigate);
  }, []);
  return (
    <ThemeProvider defaultTheme="light" storageKey="mowitex-theme-v2">
      <AuthProvider>
        <Toaster position="top-right" richColors={true} />
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}

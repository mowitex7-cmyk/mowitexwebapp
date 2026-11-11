# Mowitex Web App

React + Vite + Tailwind CSS source code for the Mowitex website and dashboard.

## Run it on your computer

You need [Node.js](https://nodejs.org) (version 20 or newer).

```bash
npm install      # first time only
npm run dev      # starts the site at http://localhost:5173
```

Leave `npm run dev` running while you edit. The browser updates as soon as you save a file.

```bash
npm run build    # creates the finished website in the dist/ folder
```

## Where each page lives

All code is in `src/`. Page text, links, and styles (Tailwind classes in `className="..."`) are written directly in these files.

| Page (route) | File |
|---|---|
| Home `/` | `src/pages/Home.jsx` (sections in `src/components/home/`, slider in `src/components/HeroSlider.jsx`) |
| About `/about` | `src/pages/About.jsx` |
| Send money `/send-money` | `src/pages/SendMoney.jsx` |
| Receive money `/receive-money` | `src/pages/ReceiveMoney.jsx` |
| Virtual cards `/cards` | `src/pages/VirtualCards.jsx` |
| Exchange `/exchange` | `src/pages/Exchange.jsx` |
| Referral `/referral` | `src/pages/Referral.jsx` |
| Rewards `/rewards` | `src/pages/Rewards.jsx` |
| Creators `/creators` | `src/pages/Creators.jsx` |
| Blog `/blog` | `src/pages/Blog.jsx` |
| Careers `/careers` | `src/pages/Careers.jsx` |
| FAQ `/faq` | `src/pages/FAQ.jsx` |
| Help center `/help` | `src/pages/help/HelpCenter.jsx`, `HelpTopic.jsx`, `HelpArticle.jsx` |
| Help articles & topics (text) | `src/data/helpArticles.js` |
| Log in / Sign up | `src/pages/Login.jsx`, `src/pages/Signup.jsx` |
| 404 page | `src/pages/NotFound.jsx` |
| Dashboard home `/dashboard` | `src/pages/dashboard/Overview.jsx` |
| Dashboard pages | `src/pages/dashboard/` (Accounts, PayBills, PaymentLinks, Transactions, Cards, Analytics, Transfer, AddMoney, Convert) |

Shared parts:

| Part | File |
|---|---|
| Top navigation bar and menus | `src/components/Navbar.jsx` |
| Footer | `src/components/Footer.jsx` |
| Dashboard sidebar / header / layout | `src/components/dashboard/` |
| List of pages (routes) | `src/App.jsx` |
| Colours, fonts, dark-mode theme | `src/index.css` |
| Images | `src/assets/` |
| Demo dashboard data (balance, transactions, cards) | `src/hooks/useData.js` |
| Demo login (stored in the browser, no real backend) | `src/lib/supabase.js` |

### Common edits

- **Change text:** open the page file, find the text, edit it, and save.
- **Change a link in the menu or footer:** edit `src/components/Navbar.jsx` or `src/components/Footer.jsx`.
- **Replace an image:** put the new file in `src/assets/` and change the matching `import ... from "../assets/..."` line at the top of the page.
- **Add a page:** create a file in `src/pages/`, then add a route for it in `src/App.jsx`.
- **Icons:** from [lucide.dev/icons](https://lucide.dev/icons). Import them by name from `"lucide-react"`.

### Notes

- Navigation uses an in-memory router (`createMemoryRouter` in `src/App.jsx`), the same as the original app, so the address bar doesn't change when you move between pages.
- Login and dashboard data are demo-only and saved in the visitor's browser (`localStorage`).

## Publish on GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.
One-time setup: open the repository's **Settings → Pages** and set **Source** to **GitHub Actions**.

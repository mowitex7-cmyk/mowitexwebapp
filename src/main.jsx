import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import ReactDOM from "react-dom/client";
import { App } from "./App";
const FALLBACK_IMAGE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect width="40" height="40" rx="8" fill="#e0e7ff"/></svg>',
  );
window.addEventListener(
  "error",
  (event) => {
    const target = event.target;
    if (
      target &&
      target.tagName === "IMG" &&
      target.src !== FALLBACK_IMAGE &&
      !target.dataset.originalUrl
    ) {
      target.src = FALLBACK_IMAGE;
    }
  },
  true,
);
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

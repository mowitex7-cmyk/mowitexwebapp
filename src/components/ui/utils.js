import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export function stripFigmaProps(props) {
  const result = {};
  for (const key in props) {
    if (!key.startsWith("_fg") && !key.startsWith("data-fg")) {
      result[key] = props[key];
    }
  }
  return result;
}

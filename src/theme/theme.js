import { createContext } from "react";

export const ThemeColors = {
  primary: "#2F0743",
  secondary: "#603674",
  third: "#CAAED6",
  light: "#F8EFFB",
  other: "#7E7383",
  deactive: "#B3A7B7",
  black: "#000000",
  white: "#FFFFFF",
  icon: "#BA8ACE",
};
export const ThemeColorContext = createContext({
    color: ThemeColors.primary,
  });
  
export default function ThemeColorWrapper(){}
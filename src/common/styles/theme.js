import { StatusBar } from "react-native";

export const THEME = {
  COLORS: {
    BACKGROUND: "#030712",
    TEXT: "#f9fafb",
    PLACEHOLDER: "#4b5563",
    SECONDARY: "#1f2937",
    TEXT_SECONDARY: "#6b7280",
    SUCCESS: "#16a34a",
    DANGER: "#dc2626",
    WHITE: "#f9fafb",
    LINK: "#2563eb",
  },
  SIZE: {
    TEXT: {
      HEADING: 32,
      BODY: 16,
      SMALL: 12
    },
    SPACE: {
      GAP: {
        SM: 5,
        MD: 10,
        LG: 20
      },
      PADDING: {
        SM: 5,
        MD: 10,
        LG: 20,
        SCREEN_TOP: StatusBar.currentHeight,
      },
    },
    ROUNDED: {
      SM: 5,
      MD: 10,
      LG: 20
    }
  }
}
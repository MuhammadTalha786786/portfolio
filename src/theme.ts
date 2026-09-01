import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Clash Display', 'Inter', -apple-system, sans-serif`,
    body: `'Inter', -apple-system, sans-serif`,
    mono: `'JetBrains Mono', monospace`,
  },
  radii: {
    xl: "16px",
    "2xl": "20px",
    "3xl": "24px",
  },
  shadows: {
    card: "0 2px 8px rgba(30, 30, 30, 0.04), 0 8px 24px rgba(30, 30, 30, 0.03)",
    "card-hover": "0 12px 40px rgba(194, 168, 120, 0.14), 0 4px 12px rgba(30, 30, 30, 0.04)",
    accent: "0 4px 20px rgba(194, 168, 120, 0.35)",
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === "dark" ? "#14100C" : "#F7F3ED",
        color: props.colorMode === "dark" ? "#F5EFE6" : "#1E1E1E",
      },
    }),
  },
});

export default theme;

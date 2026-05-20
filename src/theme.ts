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
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "#1A1410" : "#F5EFE6",
        color: props.colorMode === "dark" ? "#F5EFE6" : "#2B2B2B",
      },
    }),
  },
});

export default theme;

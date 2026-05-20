import { useColorModeValue } from "@chakra-ui/react";

/**
 * Warm earthy palette with dark mode support
 * Light: Background #F5EFE6, Surface #E8DFD1, Primary #C2A878, Secondary #8D6E63
 * Dark: Background #1A1410, Surface #2A2218, same accents with adjusted opacity
 */
export function useColors() {
  return {
    bg: useColorModeValue("#F5EFE6", "#1A1410"),
    card: useColorModeValue("#E8DFD1", "#2A2218"),
    border: useColorModeValue("rgba(194, 168, 120, 0.25)", "rgba(194, 168, 120, 0.15)"),
    borderHover: useColorModeValue("rgba(194, 168, 120, 0.6)", "rgba(194, 168, 120, 0.5)"),
    text: useColorModeValue("#2B2B2B", "#F5EFE6"),
    muted: useColorModeValue("#5F5F5F", "#B8A99A"),
    dim: useColorModeValue("#8D8D8D", "#7A6E62"),
    divider: useColorModeValue("rgba(194, 168, 120, 0.2)", "rgba(194, 168, 120, 0.12)"),
    navBg: useColorModeValue("rgba(245, 239, 230, 0.92)", "rgba(26, 20, 16, 0.92)"),
    cardShadow: useColorModeValue(
      "0 4px 20px rgba(43, 43, 43, 0.04)",
      "0 4px 20px rgba(0, 0, 0, 0.3)"
    ),
    hoverShadow: useColorModeValue(
      "0 20px 50px rgba(194, 168, 120, 0.12)",
      "0 20px 50px rgba(194, 168, 120, 0.08)"
    ),
    badgeBg: useColorModeValue("rgba(194, 168, 120, 0.1)", "rgba(194, 168, 120, 0.08)"),
    badgeBorder: useColorModeValue("rgba(194, 168, 120, 0.25)", "rgba(194, 168, 120, 0.2)"),
    badgeText: useColorModeValue("#8D6E63", "#C2A878"),
    orbOpacity: useColorModeValue(0.06, 0.04),
    accent: "#C2A878",
    accentSecondary: "#8D6E63",
  };
}

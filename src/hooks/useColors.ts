import { useColorModeValue } from "@chakra-ui/react";

/**
 * Premium warm earthy palette with refined dark mode support
 */
export function useColors() {
  const accent = "#C2A878";
  const accentSecondary = "#8D6E63";
  const accentHover = "#D4BC94";
  const success = "#22C55E";

  return {
    bg: useColorModeValue("#F7F3ED", "#14100C"),
    card: useColorModeValue("#EDE6DA", "#221C16"),
    cardElevated: useColorModeValue("#F2EBE0", "#2A231B"),
    border: useColorModeValue("rgba(194, 168, 120, 0.22)", "rgba(194, 168, 120, 0.12)"),
    borderHover: useColorModeValue("rgba(194, 168, 120, 0.55)", "rgba(194, 168, 120, 0.45)"),
    text: useColorModeValue("#1E1E1E", "#F5EFE6"),
    muted: useColorModeValue("#5A5A5A", "#B8A99A"),
    dim: useColorModeValue("#8A8A8A", "#7A6E62"),
    divider: useColorModeValue("rgba(194, 168, 120, 0.18)", "rgba(194, 168, 120, 0.1)"),
    navBg: useColorModeValue("rgba(247, 243, 237, 0.85)", "rgba(20, 16, 12, 0.85)"),
    glassBg: useColorModeValue("rgba(255, 255, 255, 0.6)", "rgba(30, 24, 18, 0.6)"),
    cardShadow: useColorModeValue(
      "0 2px 8px rgba(30, 30, 30, 0.04), 0 8px 24px rgba(30, 30, 30, 0.03)",
      "0 2px 8px rgba(0, 0, 0, 0.2), 0 8px 24px rgba(0, 0, 0, 0.15)"
    ),
    hoverShadow: useColorModeValue(
      "0 12px 40px rgba(194, 168, 120, 0.14), 0 4px 12px rgba(30, 30, 30, 0.04)",
      "0 12px 40px rgba(194, 168, 120, 0.1), 0 4px 12px rgba(0, 0, 0, 0.2)"
    ),
    badgeBg: useColorModeValue("rgba(194, 168, 120, 0.08)", "rgba(194, 168, 120, 0.06)"),
    badgeBorder: useColorModeValue("rgba(194, 168, 120, 0.22)", "rgba(194, 168, 120, 0.18)"),
    badgeText: useColorModeValue("#7A6350", "#C2A878"),
    orbOpacity: useColorModeValue(0.07, 0.05),
    accent,
    accentSecondary,
    accentHover,
    success,
    gradient: `linear-gradient(135deg, ${accent} 0%, ${accentSecondary} 100%)`,
    gradientSubtle: useColorModeValue(
      "linear-gradient(135deg, rgba(194,168,120,0.08), rgba(141,110,99,0.04))",
      "linear-gradient(135deg, rgba(194,168,120,0.06), rgba(141,110,99,0.03))"
    ),
    accentGlow: "0 4px 20px rgba(194, 168, 120, 0.35)",
    accentGlowSm: "0 2px 12px rgba(194, 168, 120, 0.25)",
    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
    transitionFast: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
  };
}

export type Colors = ReturnType<typeof useColors>;

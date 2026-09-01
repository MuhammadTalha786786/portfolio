/**
 * Midnight Blueprint color palette
 * Dark mode: deep space navy with electric blue/cyan accents
 * Light mode: clean whites with the same accent system
 */

export const colors = {
  dark: {
    bg: "#0A0E1A",
    card: "#0B2545",
    border: "rgba(20, 99, 255, 0.3)",
    borderHover: "rgba(0, 212, 255, 0.4)",
    text: "#F0F4FF",
    muted: "rgba(240, 244, 255, 0.6)",
    dim: "rgba(240, 244, 255, 0.4)",
  },
  light: {
    bg: "#F8FAFF",
    card: "#FFFFFF",
    border: "#E2E8F0",
    borderHover: "rgba(20, 99, 255, 0.4)",
    text: "#0A0E1A",
    muted: "#64748B",
    dim: "#94A3B8",
  },
  accent: {
    blue: "#1463FF",
    cyan: "#00D4FF",
    green: "#22C55E",
  },
} as const;

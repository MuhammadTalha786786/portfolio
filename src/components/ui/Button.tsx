import { Box, type BoxProps } from "@chakra-ui/react";
import { useColors } from "../../hooks/useColors";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends BoxProps {
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
}

export default function Button({ variant = "primary", href, external, children, ...props }: ButtonProps) {
  const c = useColors();

  const variants: Record<ButtonVariant, BoxProps> = {
    primary: {
      bg: c.accent,
      color: "white",
      fontWeight: 600,
      boxShadow: c.accentGlowSm,
      _hover: {
        bg: c.accentHover,
        boxShadow: c.accentGlow,
        transform: "translateY(-2px)",
      },
      _active: { transform: "translateY(0)" },
    },
    secondary: {
      bg: "transparent",
      color: c.text,
      fontWeight: 500,
      border: "1px solid",
      borderColor: c.border,
      _hover: {
        borderColor: c.accent,
        color: c.accentSecondary,
        transform: "translateY(-2px)",
        bg: "rgba(194, 168, 120, 0.04)",
      },
      _active: { transform: "translateY(0)" },
    },
    ghost: {
      bg: "transparent",
      color: c.accent,
      fontWeight: 500,
      _hover: { color: c.accentSecondary },
    },
  };

  const shared: BoxProps = {
    as: href ? "a" : "button",
    href,
    target: external ? "_blank" : undefined,
    rel: external ? "noreferrer noopener" : undefined,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    borderRadius: "xl",
    px: 7,
    py: 3.5,
    fontSize: "15px",
    textDecoration: "none",
    transition: c.transition,
    cursor: "pointer",
    ...variants[variant],
    ...props,
  };

  return <Box {...shared}>{children}</Box>;
}

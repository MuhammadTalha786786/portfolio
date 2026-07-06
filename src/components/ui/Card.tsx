import { Box, type BoxProps } from "@chakra-ui/react";
import { useColors } from "../../hooks/useColors";

interface CardProps extends BoxProps {
  elevated?: boolean;
  hover?: boolean;
}

export default function Card({ elevated, hover = true, children, ...props }: CardProps) {
  const c = useColors();

  return (
    <Box
      className={hover ? "premium-card" : undefined}
      bg={elevated ? c.cardElevated : c.card}
      border="1px solid"
      borderColor={c.border}
      borderRadius="2xl"
      boxShadow={c.cardShadow}
      transition={c.transition}
      _hover={
        hover
          ? {
              borderColor: c.borderHover,
              boxShadow: c.hoverShadow,
            }
          : undefined
      }
      {...props}
    >
      {children}
    </Box>
  );
}

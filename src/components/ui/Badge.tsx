import { Text, type TextProps } from "@chakra-ui/react";
import { useColors } from "../../hooks/useColors";

interface BadgeProps extends TextProps {
  mono?: boolean;
}

export default function Badge({ mono, children, ...props }: BadgeProps) {
  const c = useColors();

  return (
    <Text
      fontFamily={mono ? "mono" : undefined}
      fontSize="11px"
      fontWeight={600}
      color={c.badgeText}
      bg={c.badgeBg}
      border="1px solid"
      borderColor={c.badgeBorder}
      borderRadius="full"
      px={3}
      py={0.5}
      lineHeight="1.4"
      {...props}
    >
      {children}
    </Text>
  );
}

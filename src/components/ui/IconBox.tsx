import { Flex, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { useColors } from "../../hooks/useColors";

interface IconBoxProps {
  icon: IconType;
  size?: string;
  iconSize?: number;
}

export default function IconBox({ icon, size = "40px", iconSize = 4 }: IconBoxProps) {
  const c = useColors();

  return (
    <Flex
      w={size}
      h={size}
      borderRadius="xl"
      bg={c.badgeBg}
      border="1px solid"
      borderColor={c.badgeBorder}
      align="center"
      justify="center"
      flexShrink={0}
      transition={c.transitionFast}
    >
      <Icon as={icon} color={c.accent} boxSize={iconSize} />
    </Flex>
  );
}

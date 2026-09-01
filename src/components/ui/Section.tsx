import { Box, Container } from "@chakra-ui/react";
import { useColors } from "../../hooks/useColors";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  withOrb?: boolean;
}

export default function Section({ id, children, withOrb }: SectionProps) {
  const c = useColors();

  return (
    <Box id={id} py={{ base: "72px", md: "96px" }} position="relative">
      <Box className="section-divider" />
      {withOrb && (
        <Box
          position="absolute"
          top="15%"
          right="-8%"
          w="500px"
          h="500px"
          borderRadius="full"
          bg={`radial-gradient(circle, rgba(194,168,120,${c.orbOpacity}) 0%, transparent 60%)`}
          filter="blur(80px)"
          pointerEvents="none"
        />
      )}
      <Container maxW="1200px" pt={{ base: "64px", md: "80px" }}>
        {children}
      </Container>
    </Box>
  );
}

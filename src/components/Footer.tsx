import { Box, Container, Text, HStack, Flex, Icon } from "@chakra-ui/react";
import { FaHeart, FaReact, FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useColors } from "../hooks/useColors";

export default function Footer() {
  const [time, setTime] = useState(new Date());
  const c = useColors();

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Box borderTop="1px solid" borderColor={c.divider} py={{ base: 6, md: 8 }} position="relative">
      <Container maxW="1200px">
        <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" gap={5}>
          <HStack spacing={2} flexWrap="wrap" justify={{ base: "center", md: "start" }}>
            <Text fontSize="14px" color={c.muted}>
              © {new Date().getFullYear()} Muhammad Talha
            </Text>
            <Text color={c.dim} display={{ base: "none", sm: "block" }}>
              ·
            </Text>
            <HStack spacing={1.5}>
              <Text fontSize="14px" color={c.muted}>
                Built with
              </Text>
              <Icon as={FaReact} color={c.accent} boxSize={3} />
              <Text fontSize="14px" color={c.muted}>
                &
              </Text>
              <Icon as={FaHeart} color={c.accentSecondary} boxSize={3} />
            </HStack>
          </HStack>

          <HStack spacing={5}>
            <Text fontFamily="mono" fontSize="12px" color={c.dim}>
              v3.1
            </Text>
            <Text fontFamily="mono" fontSize="12px" color={c.muted}>
              {time.toLocaleTimeString("en-US", { hour12: false })} · PKT
            </Text>
            <Box
              as="button"
              onClick={scrollToTop}
              w="32px"
              h="32px"
              borderRadius="lg"
              border="1px solid"
              borderColor={c.border}
              display="flex"
              alignItems="center"
              justifyContent="center"
              color={c.muted}
              bg={c.card}
              _hover={{ color: c.accent, borderColor: c.borderHover, transform: "translateY(-2px)" }}
              transition={c.transition}
              aria-label="Back to top"
            >
              <Icon as={FaArrowUp} boxSize={3} />
            </Box>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

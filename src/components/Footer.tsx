import { Box, Container, Text, HStack, Flex, Icon } from "@chakra-ui/react";
import { FaHeart, FaReact } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useColors } from "../hooks/useColors";

export default function Footer() {
  const [time, setTime] = useState(new Date());
  const c = useColors();

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <Box borderTop="1px solid" borderColor={c.divider} py={8}>
      <Container maxW="1200px">
        <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" gap={4}>
          <HStack spacing={2}>
            <Text fontSize="14px" color={c.muted}>© {new Date().getFullYear()} Muhammad Talha</Text>
            <Text color={c.dim}>·</Text>
            <HStack spacing={1}>
              <Text fontSize="14px" color={c.muted}>Built with</Text>
              <Icon as={FaReact} color="#C2A878" boxSize={3} />
              <Text fontSize="14px" color={c.muted}>&</Text>
              <Icon as={FaHeart} color="#8D6E63" boxSize={3} />
            </HStack>
          </HStack>
          <HStack spacing={6}>
            <Text fontFamily="mono" fontSize="12px" color={c.dim}>v3.0</Text>
            <Text fontFamily="mono" fontSize="12px" color={c.muted}>{time.toLocaleTimeString("en-US", { hour12: false })} · PKT</Text>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

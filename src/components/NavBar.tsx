import { HStack, Box, Text, Container, Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useColors } from "../hooks/useColors";
import { profile } from "../constants/profile";

const MotionBox = motion(Box);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const { colorMode, toggleColorMode } = useColorMode();
  const c = useColors();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = ["hero", "about", "projects", "experience", "contact"];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <MotionBox
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      position="fixed" top={0} left={0} right={0} zIndex={9999}
      bg={scrolled ? c.navBg : "transparent"}
      backdropFilter={scrolled ? "blur(20px) saturate(180%)" : "none"}
      borderBottom={scrolled ? `1px solid ${c.border}` : "none"}
      py={scrolled ? 3 : 5}
      sx={{ transition: "all 0.4s ease" }}
    >
      <Container maxW="1200px">
        <Flex justify="space-between" align="center">
          <HStack spacing={3} cursor="pointer" onClick={() => scrollTo("hero")}>
            <Box w="34px" h="34px" borderRadius="lg" bg="#C2A878" display="flex" alignItems="center" justifyContent="center"
              boxShadow="0 4px 12px rgba(194, 168, 120, 0.3)">
              <Text fontSize="sm" fontWeight={800} color="white">MT</Text>
            </Box>
            <Text fontFamily="heading" fontSize="sm" fontWeight={600} color={c.text} display={{ base: "none", md: "block" }}>
              {profile.name}
            </Text>
          </HStack>

          <HStack spacing={1} display={{ base: "none", md: "flex" }}>
            {nav.map((item) => (
              <Box key={item.id} as="button" onClick={() => scrollTo(item.id)}
                px={4} py={2} borderRadius="lg" fontSize="13px" fontWeight={500}
                color={active === item.id ? "#C2A878" : c.muted}
                bg={active === item.id ? "rgba(194, 168, 120, 0.1)" : "transparent"}
                border="1px solid" borderColor={active === item.id ? "rgba(194, 168, 120, 0.25)" : "transparent"}
                _hover={{ color: c.text, bg: "rgba(194, 168, 120, 0.06)" }}>
                {item.label}
              </Box>
            ))}
          </HStack>

          <HStack spacing={3}>
            <IconButton
              icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              size="sm"
              borderRadius="lg"
              color={c.muted}
              _hover={{ color: "#C2A878", bg: "rgba(194, 168, 120, 0.08)" }}
              aria-label="Toggle theme"
            />
            <HStack spacing={2} display={{ base: "none", sm: "flex" }}>
              <Box className="status-dot" />
              <Text fontSize="13px" fontWeight={500} color="#22C55E">Available</Text>
            </HStack>
            <Box as="button" onClick={() => scrollTo("contact")}
              px={5} py={2} borderRadius="lg" fontSize="13px" fontWeight={600}
              bg="#C2A878" color="white"
              _hover={{ boxShadow: "0 4px 20px rgba(194, 168, 120, 0.35)", transform: "translateY(-1px)" }}
              display={{ base: "none", md: "block" }}>
              Hire Me
            </Box>
          </HStack>
        </Flex>
      </Container>
    </MotionBox>
  );
}

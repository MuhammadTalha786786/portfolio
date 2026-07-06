import { HStack, Box, Text, Container, Flex, IconButton, useColorMode, VStack } from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useColors } from "../hooks/useColors";
import { profile } from "../constants/profile";
import Button from "./ui/Button";

const MotionBox = motion(Box);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const c = useColors();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = ["hero", "about", "projects", "experience", "contact"];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const nav = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MotionBox
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={9999}
      bg={scrolled || menuOpen ? c.navBg : "transparent"}
      backdropFilter={scrolled || menuOpen ? "blur(24px) saturate(180%)" : "none"}
      borderBottom={scrolled || menuOpen ? `1px solid ${c.border}` : "none"}
      py={scrolled ? 3 : { base: 4, md: 5 }}
      sx={{ transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)" }}
    >
      <Container maxW="1200px">
        <Flex justify="space-between" align="center">
          <HStack spacing={3} cursor="pointer" onClick={() => scrollTo("hero")} role="button" aria-label="Go to top">
            <Box
              w="36px"
              h="36px"
              borderRadius="xl"
              bg={c.gradient}
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow={c.accentGlowSm}
              transition={c.transition}
              _hover={{ transform: "scale(1.05)" }}
            >
              <Text fontSize="sm" fontWeight={800} color="white" letterSpacing="-0.02em">
                MT
              </Text>
            </Box>
            <Text
              fontFamily="heading"
              fontSize="sm"
              fontWeight={600}
              color={c.text}
              display={{ base: "none", md: "block" }}
              letterSpacing="-0.01em"
            >
              {profile.name}
            </Text>
          </HStack>

          <HStack spacing={1} display={{ base: "none", md: "flex" }}>
            {nav.map((item) => (
              <Box
                key={item.id}
                as="button"
                onClick={() => scrollTo(item.id)}
                px={4}
                py={2}
                borderRadius="lg"
                fontSize="13px"
                fontWeight={active === item.id ? 600 : 500}
                color={active === item.id ? c.accent : c.muted}
                bg={active === item.id ? "rgba(194, 168, 120, 0.08)" : "transparent"}
                border="1px solid"
                borderColor={active === item.id ? "rgba(194, 168, 120, 0.2)" : "transparent"}
                position="relative"
                transition={c.transitionFast}
                _hover={{ color: c.text, bg: "rgba(194, 168, 120, 0.05)" }}
              >
                {item.label}
              </Box>
            ))}
          </HStack>

          <HStack spacing={2}>
            <IconButton
              icon={colorMode === "dark" ? <SunIcon boxSize={3.5} /> : <MoonIcon boxSize={3.5} />}
              onClick={toggleColorMode}
              variant="ghost"
              size="sm"
              borderRadius="lg"
              color={c.muted}
              _hover={{ color: c.accent, bg: "rgba(194, 168, 120, 0.08)" }}
              aria-label="Toggle theme"
            />
            <HStack spacing={2} display={{ base: "none", sm: "flex" }}>
              <Box className="status-dot" />
              <Text fontSize="12px" fontWeight={500} color={c.success} letterSpacing="0.01em">
                Available
              </Text>
            </HStack>
            <Button
              variant="primary"
              onClick={() => scrollTo("contact")}
              px={5}
              py={2}
              fontSize="13px"
              borderRadius="lg"
              display={{ base: "none", md: "inline-flex" }}
            >
              Hire Me
            </Button>
            <IconButton
              icon={menuOpen ? <CloseIcon boxSize={3} /> : <HamburgerIcon boxSize={4} />}
              onClick={() => setMenuOpen(!menuOpen)}
              variant="ghost"
              size="sm"
              borderRadius="lg"
              color={c.muted}
              display={{ base: "flex", md: "none" }}
              _hover={{ color: c.accent, bg: "rgba(194, 168, 120, 0.08)" }}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            />
          </HStack>
        </Flex>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <MotionBox
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            overflow="hidden"
            display={{ base: "block", md: "none" }}
          >
            <Container maxW="1200px" pb={6} pt={2}>
              <VStack spacing={1} align="stretch">
                {nav.map((item, i) => (
                  <MotionBox
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Box
                      as="button"
                      onClick={() => scrollTo(item.id)}
                      w="full"
                      textAlign="left"
                      px={4}
                      py={3}
                      borderRadius="xl"
                      fontSize="15px"
                      fontWeight={active === item.id ? 600 : 500}
                      color={active === item.id ? c.accent : c.text}
                      bg={active === item.id ? "rgba(194, 168, 120, 0.08)" : "transparent"}
                      border="1px solid"
                      borderColor={active === item.id ? "rgba(194, 168, 120, 0.15)" : "transparent"}
                      _hover={{ bg: "rgba(194, 168, 120, 0.05)" }}
                    >
                      {item.label}
                    </Box>
                  </MotionBox>
                ))}
                <Button variant="primary" onClick={() => scrollTo("contact")} w="full" mt={2} borderRadius="xl">
                  Hire Me
                </Button>
              </VStack>
            </Container>
          </MotionBox>
        )}
      </AnimatePresence>
    </MotionBox>
  );
}

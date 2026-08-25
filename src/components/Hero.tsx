import { Box, Heading, Container, Text, HStack, VStack, Grid, GridItem, Icon, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaReact, FaApple, FaGooglePlay, FaChevronDown } from "react-icons/fa";
import { SiTypescript, SiFirebase } from "react-icons/si";
import { useColors } from "../hooks/useColors";
import Button from "./ui/Button";
import profileImg from "./images/profile1.webp";

const M = { Box: motion(Box), Heading: motion(Heading), Text: motion(Text) };

const techIcons = [
  { icon: FaReact, label: "React Native" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: FaApple, label: "iOS" },
  { icon: FaGooglePlay, label: "Android" },
  { icon: SiFirebase, label: "Firebase" },
];

export default function Hero() {
  const [time, setTime] = useState(new Date());
  const c = useColors();

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <Box id="hero" minH="100vh" display="flex" alignItems="center" position="relative" overflow="hidden">
      <Box
        position="absolute"
        top="-20%"
        right="-12%"
        w="800px"
        h="800px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(194, 168, 120, 0.1) 0%, transparent 55%)"
        filter="blur(100px)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-25%"
        left="-18%"
        w="650px"
        h="650px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(141, 110, 99, 0.06) 0%, transparent 55%)"
        filter="blur(100px)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        top="40%"
        left="50%"
        transform="translateX(-50%)"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(194, 168, 120, 0.03) 0%, transparent 70%)"
        filter="blur(60px)"
        pointerEvents="none"
      />

      <Container maxW="1200px" pt={{ base: 28, md: 0 }} position="relative">
        <Grid templateColumns={{ base: "1fr", lg: "1.25fr 1fr" }} gap={{ base: 12, lg: 20 }} alignItems="center">
          <GridItem>
            <VStack align="start" spacing={{ base: 6, md: 8 }}>
              <M.Box
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <HStack
                  spacing={3}
                  bg={c.glassBg}
                  backdropFilter="blur(12px)"
                  border="1px solid"
                  borderColor={c.border}
                  borderRadius="full"
                  px={4}
                  py={2}
                >
                  <Box className="status-dot" />
                  <Text fontFamily="mono" fontSize="12px" fontWeight={500} color={c.muted}>
                    Available · {time.toLocaleTimeString("en-US", { hour12: false })}
                  </Text>
                </HStack>
              </M.Box>

              <M.Heading
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
                fontFamily="heading"
                fontSize={{ base: "42px", sm: "52px", md: "60px", lg: "68px" }}
                fontWeight={700}
                lineHeight="1.08"
                color={c.text}
                letterSpacing="-0.03em"
              >
                Senior Mobile
                <br />
                <Text as="span" className="gradient-text">
                  Engineer
                </Text>{" "}
                who
                <br />
                crafts{" "}
                <Text as="span" color={c.muted} fontWeight={700}>
                  experiences.
                </Text>
              </M.Heading>

              <M.Text
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
                fontSize={{ base: "15px", md: "16px" }}
                color={c.muted}
                maxW="520px"
                lineHeight="1.8"
              >
                I'm Muhammad Talha — a senior React Native engineer with 4+ years building
                high-performance cross-platform apps. From education platforms to blockchain
                ecosystems, I ship polished products that users love.
              </M.Text>

              <M.Box
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
              >
                <HStack spacing={4} flexWrap="wrap">
                  <Button onClick={() => scrollTo("projects")}>View My Work</Button>
                  <Button variant="secondary" onClick={() => scrollTo("contact")}>
                    Let's Talk
                  </Button>
                </HStack>
              </M.Box>

              <M.Box
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1, ease: [0.4, 0, 0.2, 1] }}
              >
                <HStack spacing={{ base: 4, md: 6 }} mt={2}>
                  {techIcons.map((t, i) => (
                    <VStack
                      key={i}
                      spacing={1.5}
                      opacity={0.45}
                      _hover={{ opacity: 1, transform: "translateY(-2px)" }}
                      transition={c.transitionFast}
                      cursor="default"
                    >
                      <Icon as={t.icon} color={c.accentSecondary} boxSize={4} />
                      <Text fontSize="10px" color={c.dim} fontFamily="mono" fontWeight={500}>
                        {t.label}
                      </Text>
                    </VStack>
                  ))}
                </HStack>
              </M.Box>
            </VStack>
          </GridItem>

          <GridItem display="flex" justifyContent="center" mt={{ base: 4, lg: 0 }}>
            <M.Box
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
              position="relative"
            >
              <Box position="relative">
                <Box
                  position="absolute"
                  top="-14px"
                  left="-14px"
                  right="-14px"
                  bottom="-14px"
                  borderRadius="3xl"
                  border="1px solid"
                  borderColor={c.border}
                  opacity={0.4}
                />
                <Box
                  position="absolute"
                  top="-7px"
                  left="-7px"
                  right="-7px"
                  bottom="-7px"
                  borderRadius="3xl"
                  border="1px solid"
                  borderColor={c.border}
                  opacity={0.2}
                />

                <Box
                  w={{ base: "260px", md: "300px", lg: "340px" }}
                  h={{ base: "320px", md: "370px", lg: "420px" }}
                  borderRadius="3xl"
                  overflow="hidden"
                  border="2px solid"
                  borderColor={c.border}
                  boxShadow="0 32px 80px rgba(0,0,0,0.1), 0 0 0 1px rgba(194, 168, 120, 0.06)"
                  bg={c.card}
                  position="relative"
                >
                  <Image
                    src={profileImg}
                    alt="Muhammad Talha"
                    w="full"
                    h="full"
                    objectFit="cover"
                    objectPosition="top"
                  />
                  <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    h="40%"
                    bgGradient={`linear(to-t, ${c.card}, transparent)`}
                    pointerEvents="none"
                  />
                </Box>

                <Box
                  position="absolute"
                  top="28px"
                  left="-55px"
                  className="floating-delay"
                  display={{ base: "none", lg: "block" }}
                  bg={c.glassBg}
                  backdropFilter="blur(12px)"
                  border="1px solid"
                  borderColor={c.border}
                  px={3.5}
                  py={2.5}
                  borderRadius="xl"
                  boxShadow={c.cardShadow}
                >
                  <HStack spacing={2.5}>
                    <Icon as={FaReact} color={c.accent} boxSize={3.5} />
                    <Text fontSize="12px" color={c.text} fontWeight={500}>
                      React Native
                    </Text>
                  </HStack>
                </Box>

                <Box
                  position="absolute"
                  bottom="55px"
                  right="-55px"
                  className="floating"
                  display={{ base: "none", lg: "block" }}
                  bg={c.glassBg}
                  backdropFilter="blur(12px)"
                  border="1px solid"
                  borderColor={c.border}
                  px={3.5}
                  py={2.5}
                  borderRadius="xl"
                  boxShadow={c.cardShadow}
                >
                  <HStack spacing={2.5}>
                    <Icon as={SiTypescript} color={c.accentSecondary} boxSize={3.5} />
                    <Text fontSize="12px" color={c.text} fontWeight={500}>
                      TypeScript
                    </Text>
                  </HStack>
                </Box>

                <Box
                  position="absolute"
                  bottom="155px"
                  right="-65px"
                  className="floating-delay"
                  display={{ base: "none", lg: "block" }}
                  bg="rgba(194, 168, 120, 0.06)"
                  border="1px solid rgba(194, 168, 120, 0.18)"
                  borderRadius="xl"
                  px={3.5}
                  py={2.5}
                >
                  <Text fontSize="12px" color={c.accentSecondary} fontFamily="mono" fontWeight={500}>
                    4+ years exp
                  </Text>
                </Box>
              </Box>
            </M.Box>
          </GridItem>
        </Grid>
      </Container>

      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        display={{ base: "none", md: "flex" }}
        flexDirection="column"
        alignItems="center"
        gap={2}
        cursor="pointer"
        onClick={() => scrollTo("about")}
        opacity={0.5}
        _hover={{ opacity: 0.8 }}
        transition={c.transition}
      >
        <Text fontSize="11px" color={c.dim} fontFamily="mono" letterSpacing="0.1em" textTransform="uppercase">
          Scroll
        </Text>
        <Icon as={FaChevronDown} color={c.dim} boxSize={3} className="scroll-hint" />
      </Box>
    </Box>
  );
}

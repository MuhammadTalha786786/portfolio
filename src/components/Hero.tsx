import { Box, Heading, Container, Text, HStack, VStack, Grid, GridItem, Icon, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaReact, FaApple, FaGooglePlay } from "react-icons/fa";
import { SiTypescript, SiFirebase } from "react-icons/si";
import { useColors } from "../hooks/useColors";
import profileImg from "./images/profile.png";

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
      {/* Background orbs */}
      <Box position="absolute" top="-15%" right="-10%" w="700px" h="700px" borderRadius="full"
        bg="radial-gradient(circle, rgba(194, 168, 120, 0.08) 0%, transparent 60%)"
        filter="blur(80px)" pointerEvents="none" />
      <Box position="absolute" bottom="-20%" left="-15%" w="600px" h="600px" borderRadius="full"
        bg="radial-gradient(circle, rgba(141, 110, 99, 0.05) 0%, transparent 60%)"
        filter="blur(80px)" pointerEvents="none" />

      <Container maxW="1200px" pt={{ base: 28, md: 0 }}>
        <Grid templateColumns={{ base: "1fr", lg: "1.3fr 1fr" }} gap={{ base: 10, lg: 16 }} alignItems="center">
          {/* Left: Content */}
          <GridItem>
            <VStack align="start" spacing={8}>
              {/* Status badge */}
              <M.Box initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <HStack spacing={3} bg={c.card} border="1px solid" borderColor={c.border} borderRadius="full" px={4} py={2}
                  boxShadow="0 2px 8px rgba(0,0,0,0.03)">
                  <Box className="status-dot" />
                  <Text fontFamily="mono" fontSize="13px" fontWeight={500} color={c.muted}>
                    Available · {time.toLocaleTimeString("en-US", { hour12: false })}
                  </Text>
                </HStack>
              </M.Box>

              {/* Heading */}
              <M.Heading initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
                fontFamily="heading" fontSize={{ base: "40px", sm: "48px", md: "56px", lg: "72px" }}
                fontWeight={700} lineHeight="1.05" color={c.text} letterSpacing="-1px">
                Senior Mobile
                <br />
                <Text as="span" className="gradient-text">Engineer</Text> who
                <br />
                crafts <Text as="span" color={c.muted} fontWeight={700}>experiences.</Text>
              </M.Heading>

              {/* Description */}
              <M.Text initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}
                fontSize="16px" color={c.muted} maxW="520px" lineHeight="1.8">
                I'm Muhammad Talha — a senior React Native engineer with 4+ years building
                high-performance cross-platform apps. From education platforms to blockchain
                ecosystems, I ship polished products that users love.
              </M.Text>

              {/* CTAs */}
              <M.Box initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }}>
                <HStack spacing={4} flexWrap="wrap">
                  <Box as="button" onClick={() => scrollTo("projects")}
                    bg="#C2A878" color="white" fontWeight={600} borderRadius="xl" px={7} py={3.5} fontSize="15px"
                    _hover={{ boxShadow: "0 8px 30px rgba(194, 168, 120, 0.35)", transform: "translateY(-2px)" }}
                    boxShadow="0 4px 15px rgba(194, 168, 120, 0.2)" transition="all 0.3s">
                    View My Work
                  </Box>
                  <Box as="button" onClick={() => scrollTo("contact")}
                    bg="transparent" color={c.text} fontWeight={500} border="1px solid" borderColor={c.border}
                    borderRadius="xl" px={7} py={3.5} fontSize="15px"
                    _hover={{ borderColor: "#C2A878", color: "#8D6E63", transform: "translateY(-2px)" }}
                    transition="all 0.3s">
                    Let's Talk
                  </Box>
                </HStack>
              </M.Box>

              {/* Tech icons */}
              <M.Box initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.2 }}>
                <HStack spacing={6} mt={2}>
                  {techIcons.map((t, i) => (
                    <VStack key={i} spacing={1} opacity={0.5} _hover={{ opacity: 1 }} transition="all 0.2s">
                      <Icon as={t.icon} color="#8D6E63" boxSize={4} />
                      <Text fontSize="11px" color={c.dim} fontFamily="mono" fontWeight={500}>{t.label}</Text>
                    </VStack>
                  ))}
                </HStack>
              </M.Box>
            </VStack>
          </GridItem>

          {/* Right: Profile image */}
          <GridItem display="flex" justifyContent="center" mt={{ base: 4, lg: 0 }}>
            <M.Box initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.8 }}
              position="relative">
              {/* Profile photo with decorative elements */}
              <Box position="relative">
                {/* Decorative ring */}
                <Box
                  position="absolute"
                  top="-12px"
                  left="-12px"
                  right="-12px"
                  bottom="-12px"
                  borderRadius="2xl"
                  border="2px solid"
                  borderColor={c.border}
                  opacity={0.5}
                />

                {/* Main image */}
                <Box
                  w={{ base: "260px", md: "300px", lg: "340px" }}
                  h={{ base: "320px", md: "370px", lg: "420px" }}
                  borderRadius="2xl"
                  overflow="hidden"
                  border="3px solid"
                  borderColor={c.border}
                  boxShadow="0 30px 80px rgba(0,0,0,0.08), 0 0 0 1px rgba(194, 168, 120, 0.08)"
                  bg={c.card}
                >
                  <Image
                    src={profileImg}
                    alt="Muhammad Talha"
                    w="full"
                    h="full"
                    objectFit="cover"
                    objectPosition="top"
                  />
                </Box>

                {/* Floating accent badges */}
                <Box position="absolute" top="30px" left="-50px" className="floating-delay" display={{ base: "none", lg: "block" }}
                  bg={c.card} border="1px solid" borderColor={c.border} px={3} py={2} borderRadius="lg" boxShadow={c.cardShadow}>
                  <HStack spacing={2}>
                    <Icon as={FaReact} color="#C2A878" boxSize={3} />
                    <Text fontSize="12px" color={c.text} fontWeight={500}>React Native</Text>
                  </HStack>
                </Box>

                <Box position="absolute" bottom="60px" right="-50px" className="floating" display={{ base: "none", lg: "block" }}
                  bg={c.card} border="1px solid" borderColor={c.border} px={3} py={2} borderRadius="lg" boxShadow={c.cardShadow}>
                  <HStack spacing={2}>
                    <Icon as={SiTypescript} color="#8D6E63" boxSize={3} />
                    <Text fontSize="12px" color={c.text} fontWeight={500}>TypeScript</Text>
                  </HStack>
                </Box>

                <Box position="absolute" bottom="160px" right="-60px" className="floating-delay" display={{ base: "none", lg: "block" }}
                  bg="rgba(194, 168, 120, 0.06)" border="1px solid rgba(194, 168, 120, 0.2)" borderRadius="lg" px={3} py={2}>
                  <Text fontSize="12px" color="#8D6E63" fontFamily="mono" fontWeight={500}>4+ years exp</Text>
                </Box>
              </Box>
            </M.Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

import { Stack, Text, Container, Box, Heading, SimpleGrid, HStack, VStack, Icon, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaMobileAlt, FaReact, FaGithub, FaMapMarkerAlt, FaRocket, FaCode, FaCogs, FaShieldAlt, FaApple, FaGooglePlay } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiRedux, SiFirebase } from "react-icons/si";
import { useColors } from "../hooks/useColors";

const M = motion(Box);

const categories = [
  { title: "Mobile Development", icon: FaMobileAlt, skills: ["React Native", "Cross-Platform", "Native Modules", "iOS & Android", "Performance", "Architecture"] },
  { title: "Frontend & State", icon: FaReact, skills: ["React JS", "TypeScript", "Redux Toolkit", "Context API", "Hook Form", "Responsive UI"] },
  { title: "APIs & Integration", icon: FaCogs, skills: ["RESTful APIs", "Firebase", "Push Notifications", "Social Auth", "Maps & Geo", "Real-time Sync"] },
  { title: "DevOps & Shipping", icon: FaRocket, skills: ["App Store Deploy", "Play Store Publish", "CI/CD", "Git Workflows", "Code Review", "Agile/Scrum"] },
];

const stack = [
  { name: "React Native", icon: FaReact }, { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript }, { name: "Redux", icon: SiRedux },
  { name: "Firebase", icon: SiFirebase }, { name: "iOS", icon: FaApple },
  { name: "Android", icon: FaGooglePlay }, { name: "Git", icon: FaGithub },
  { name: "Maps", icon: FaMapMarkerAlt }, { name: "Native Modules", icon: FaCode },
  { name: "Auth", icon: FaShieldAlt }, { name: "CI/CD", icon: FaRocket },
];

const stats = [
  { value: "4+", label: "Years Experience" }, { value: "7+", label: "Apps Shipped" },
  { value: "2", label: "Platforms" }, { value: "5+", label: "Store Deploys" },
];

export default function About() {
  const c = useColors();

  return (
    <Box id="about" py="80px" position="relative">
      <Box h="1px" bg={c.divider} />
      <Container maxW="1200px" pt="80px">
        <Stack spacing={20}>
          <M initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Text fontSize="13px" fontWeight={500} letterSpacing="0.1em" textTransform="uppercase" color="#C2A878" mb={4}>About Me</Text>
            <Heading fontFamily="heading" fontSize={{ base: "28px", md: "36px" }} fontWeight={700} color={c.text} letterSpacing="-1px" maxW="700px">
              Building apps that feel <Text as="span" className="gradient-text">native everywhere.</Text>
            </Heading>
            <Text fontSize="16px" color={c.muted} mt={5} maxW="600px" lineHeight="1.8">
              4+ years shipping production-ready mobile apps with clean architecture, pixel-perfect UI, and exceptional cross-platform performance.
            </Text>
          </M>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            {categories.map((cat, i) => (
              <M key={cat.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Box bg={c.card} border="1px solid" borderColor={c.border} borderRadius="xl" p="24px" h="full"
                  boxShadow={c.cardShadow}
                  _hover={{ borderColor: c.borderHover, transform: "translateY(-4px)", boxShadow: c.hoverShadow }}
                  transition="all 0.4s ease">
                  <HStack spacing={3} mb={5}>
                    <Flex w="40px" h="40px" borderRadius="xl" bg="rgba(194,168,120,0.1)" border="1px solid rgba(194,168,120,0.2)" align="center" justify="center">
                      <Icon as={cat.icon} color="#C2A878" boxSize={4} />
                    </Flex>
                    <Heading fontFamily="heading" fontSize="15px" fontWeight={600} color={c.text}>{cat.title}</Heading>
                  </HStack>
                  <VStack align="start" spacing={2.5}>
                    {cat.skills.map((s) => (
                      <HStack key={s} spacing={3}>
                        <Box w="5px" h="5px" borderRadius="full" bg="#8D6E63" opacity={0.6} flexShrink={0} />
                        <Text fontSize="14px" color={c.muted}>{s}</Text>
                      </HStack>
                    ))}
                  </VStack>
                </Box>
              </M>
            ))}
          </SimpleGrid>

          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
            {stats.map((s) => (
              <Box key={s.label} textAlign="center" p="24px" borderRadius="xl" bg={c.card} border="1px solid" borderColor={c.border}
                boxShadow={c.cardShadow} _hover={{ borderColor: c.borderHover }} transition="all 0.3s">
                <Text fontSize={{ base: "28px", md: "36px" }} fontWeight={700} fontFamily="heading" className="gradient-text" letterSpacing="-1px">{s.value}</Text>
                <Text fontSize="13px" color={c.muted} mt={1} fontWeight={500}>{s.label}</Text>
              </Box>
            ))}
          </SimpleGrid>

          <Box>
            <Text fontSize="13px" fontWeight={500} letterSpacing="0.1em" textTransform="uppercase" color="#C2A878" mb={5}>Tech Stack</Text>
            <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} spacing={3}>
              {stack.map((t) => (
                <HStack key={t.name} spacing={2} p={3} borderRadius="xl" bg={c.card} border="1px solid" borderColor={c.border}
                  boxShadow="0 1px 3px rgba(0,0,0,0.02)"
                  _hover={{ borderColor: c.borderHover, boxShadow: "0 4px 15px rgba(194,168,120,0.08)" }} transition="all 0.3s" cursor="default">
                  <Icon as={t.icon} color="#C2A878" boxSize={4} />
                  <Text fontSize="13px" fontWeight={500} color={c.text}>{t.name}</Text>
                </HStack>
              ))}
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

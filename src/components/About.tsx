import { Stack, Text, Box, Heading, SimpleGrid, HStack, VStack, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaReact,
  FaGithub,
  FaMapMarkerAlt,
  FaRocket,
  FaCode,
  FaCogs,
  FaShieldAlt,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import { SiTypescript, SiJavascript, SiRedux, SiFirebase } from "react-icons/si";
import { useColors } from "../hooks/useColors";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";
import IconBox from "./ui/IconBox";

const M = motion(Box);

const categories = [
  {
    title: "Mobile Development",
    icon: FaMobileAlt,
    skills: ["React Native", "Cross-Platform", "Native Modules", "iOS & Android", "Performance", "Architecture"],
  },
  {
    title: "Frontend & State",
    icon: FaReact,
    skills: ["React JS", "TypeScript", "Redux Toolkit", "Context API", "Hook Form", "Responsive UI"],
  },
  {
    title: "APIs & Integration",
    icon: FaCogs,
    skills: ["RESTful APIs", "Firebase", "Push Notifications", "Social Auth", "Maps & Geo", "Real-time Sync"],
  },
  {
    title: "DevOps & Shipping",
    icon: FaRocket,
    skills: ["App Store Deploy", "Play Store Publish", "CI/CD", "Git Workflows", "Code Review", "Agile/Scrum"],
  },
];

const stack = [
  { name: "React Native", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Redux", icon: SiRedux },
  { name: "Firebase", icon: SiFirebase },
  { name: "iOS", icon: FaApple },
  { name: "Android", icon: FaGooglePlay },
  { name: "Git", icon: FaGithub },
  { name: "Maps", icon: FaMapMarkerAlt },
  { name: "Native Modules", icon: FaCode },
  { name: "Auth", icon: FaShieldAlt },
  { name: "CI/CD", icon: FaRocket },
];

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "7+", label: "Apps Shipped" },
  { value: "2", label: "Platforms" },
  { value: "5+", label: "Store Deploys" },
];

export default function About() {
  const c = useColors();

  return (
    <Section id="about">
      <Stack spacing={{ base: 16, md: 20 }}>
        <SectionHeader
          label="About Me"
          title={
            <>
              Building apps that feel <Text as="span" className="gradient-text">native everywhere.</Text>
            </>
          }
          description="4+ years shipping production-ready mobile apps with clean architecture, pixel-perfect UI, and exceptional cross-platform performance."
        />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          {categories.map((cat, i) => (
            <M
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
            >
              <Card borderRadius="xl" p="28px" h="full">
                <HStack spacing={3.5} mb={5}>
                  <IconBox icon={cat.icon} />
                  <Heading fontFamily="heading" fontSize="16px" fontWeight={600} color={c.text} letterSpacing="-0.01em">
                    {cat.title}
                  </Heading>
                </HStack>
                <VStack align="start" spacing={2.5}>
                  {cat.skills.map((s) => (
                    <HStack key={s} spacing={3}>
                      <Box w="4px" h="4px" borderRadius="full" bg={c.accentSecondary} opacity={0.7} flexShrink={0} />
                      <Text fontSize="14px" color={c.muted} lineHeight="1.5">
                        {s}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </Card>
            </M>
          ))}
        </SimpleGrid>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
          {stats.map((s, i) => (
            <M
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Card borderRadius="xl" p="28px" textAlign="center" hover>
                <Text
                  fontSize={{ base: "32px", md: "40px" }}
                  fontWeight={700}
                  fontFamily="heading"
                  className="gradient-text"
                  letterSpacing="-0.03em"
                  lineHeight="1"
                >
                  {s.value}
                </Text>
                <Text fontSize="13px" color={c.muted} mt={2} fontWeight={500}>
                  {s.label}
                </Text>
              </Card>
            </M>
          ))}
        </SimpleGrid>

        <Box>
          <Text
            fontSize="12px"
            fontWeight={600}
            letterSpacing="0.12em"
            textTransform="uppercase"
            color={c.accent}
            mb={6}
            fontFamily="mono"
          >
            Tech Stack
          </Text>
          <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} spacing={3}>
            {stack.map((t, i) => (
              <M
                key={t.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
              >
                <HStack
                  spacing={2.5}
                  p={3.5}
                  borderRadius="xl"
                  bg={c.card}
                  border="1px solid"
                  borderColor={c.border}
                  boxShadow="0 1px 2px rgba(0,0,0,0.02)"
                  _hover={{
                    borderColor: c.borderHover,
                    boxShadow: "0 4px 16px rgba(194,168,120,0.08)",
                    transform: "translateY(-2px)",
                  }}
                  transition={c.transition}
                  cursor="default"
                >
                  <Icon as={t.icon} color={c.accent} boxSize={4} />
                  <Text fontSize="13px" fontWeight={500} color={c.text}>
                    {t.name}
                  </Text>
                </HStack>
              </M>
            ))}
          </SimpleGrid>
        </Box>
      </Stack>
    </Section>
  );
}

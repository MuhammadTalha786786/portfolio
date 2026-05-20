import { Stack, Text, Container, Box, Heading, HStack, VStack, Icon, SimpleGrid, Flex } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useColors } from "../hooks/useColors";
import { profile } from "../constants/profile";

const M = motion(Box);

const links = [
  { icon: FaEnvelope, label: "EMAIL", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FaLinkedin, label: "LINKEDIN", value: "muhammad-talha", href: profile.linkedin },
  { icon: FaGithub, label: "GITHUB", value: "MuhammadTalha786786", href: profile.github },
  { icon: FaPhone, label: "PHONE", value: profile.phone, href: `tel:${profile.phone}` },
];

export default function Contact() {
  const c = useColors();

  return (
    <Box id="contact" py="80px" position="relative">
      <Box h="1px" bg={c.divider} />
      <Container maxW="1200px" pt="80px">
        <Stack spacing={16}>
          <M initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} textAlign="center">
            <Text fontSize="13px" fontWeight={500} letterSpacing="0.1em" textTransform="uppercase" color="#C2A878" mb={4}>Contact</Text>
            <Heading fontFamily="heading" fontSize={{ base: "28px", md: "36px" }} fontWeight={700} color={c.text} letterSpacing="-1px">
              Have a project <Text as="span" className="gradient-text">worth building?</Text>
            </Heading>
            <Text fontSize="16px" color={c.muted} mt={5} maxW="500px" mx="auto" lineHeight="1.7">
              I'm open to senior mobile engineering roles, freelance projects, and exciting collaborations.
            </Text>

            <HStack spacing={4} justify="center" mt={8} flexWrap="wrap">
              <Box as="a" href={`mailto:${profile.email}`}
                bg="#C2A878" color="white" fontWeight={600} borderRadius="xl" px={7} py={3.5} fontSize="15px"
                display="inline-flex" alignItems="center" gap={2} textDecoration="none"
                _hover={{ boxShadow: "0 8px 30px rgba(194, 168, 120, 0.35)", transform: "translateY(-2px)" }}
                boxShadow="0 4px 15px rgba(194, 168, 120, 0.2)" transition="all 0.3s">
                Start a Conversation <Icon as={FaArrowRight} boxSize={3} />
              </Box>
              <Box as="a" href={profile.linkedin} target="_blank" rel="noreferrer noopener"
                bg="transparent" color={c.text} fontWeight={500} border="1px solid" borderColor={c.border}
                borderRadius="xl" px={7} py={3.5} fontSize="15px" textDecoration="none"
                _hover={{ borderColor: "#C2A878", color: "#8D6E63", transform: "translateY(-2px)" }} transition="all 0.3s">
                View LinkedIn
              </Box>
            </HStack>
          </M>

          <M initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4}>
              {links.map((link) => (
                <Box key={link.label} as="a" href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer noopener"
                  bg={c.card} border="1px solid" borderColor={c.border} borderRadius="xl" p="24px" textDecoration="none" display="block"
                  boxShadow={c.cardShadow}
                  _hover={{ borderColor: c.borderHover, transform: "translateY(-4px)", boxShadow: c.hoverShadow }} transition="all 0.4s ease">
                  <VStack align="start" spacing={3}>
                    <Flex w="38px" h="38px" borderRadius="lg" bg="rgba(194,168,120,0.1)" border="1px solid rgba(194,168,120,0.2)" align="center" justify="center">
                      <Icon as={link.icon} color="#C2A878" boxSize={4} />
                    </Flex>
                    <Text fontSize="11px" fontWeight={500} color={c.dim} letterSpacing="0.1em" textTransform="uppercase">{link.label}</Text>
                    <Text fontSize="14px" color={c.text} fontWeight={500} wordBreak="break-all">{link.value}</Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </M>
        </Stack>
      </Container>
    </Box>
  );
}

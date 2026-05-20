import { Stack, Text, Container, Box, HStack, Heading, VStack, Image, List, ListItem, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useColors } from "../hooks/useColors";
import { experience } from "../utils/data";

const M = motion(Box);

export default function Experience() {
  const c = useColors();

  return (
    <Box id="experience" py="80px" position="relative">
      <Box h="1px" bg={c.divider} />
      <Container maxW="1200px" pt="80px">
        <Stack spacing={16}>
          <M initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Text fontSize="13px" fontWeight={500} letterSpacing="0.1em" textTransform="uppercase" color="#C2A878" mb={4}>Experience</Text>
            <Heading fontFamily="heading" fontSize={{ base: "28px", md: "36px" }} fontWeight={700} color={c.text} letterSpacing="-1px" maxW="600px">
              Where I've <Text as="span" className="gradient-text">made impact.</Text>
            </Heading>
          </M>

          <VStack spacing={0} align="stretch" position="relative">
            <Box position="absolute" left={{ base: "16px", md: "20px" }} top="0" bottom="0" w="2px"
              bg="linear-gradient(180deg, #C2A878, #8D6E63, transparent)" display={{ base: "none", md: "block" }} />

            {experience.map((exp, i) => (
              <M key={exp.company} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }} pl={{ base: 0, md: 16 }} pb={10} position="relative">
                <Flex display={{ base: "none", md: "flex" }} position="absolute" left="12px" top="28px"
                  w="18px" h="18px" borderRadius="full" bg={c.bg} border="2px solid #C2A878"
                  align="center" justify="center" zIndex={1} boxShadow="0 0 12px rgba(194,168,120,0.3)">
                  <Box w="6px" h="6px" borderRadius="full" bg="#8D6E63" />
                </Flex>

                <Box bg={c.card} border="1px solid" borderColor={c.border} borderRadius="xl" p={{ base: "24px", md: "32px" }}
                  boxShadow={c.cardShadow}
                  _hover={{ borderColor: c.borderHover, transform: "translateY(-4px)", boxShadow: c.hoverShadow }} transition="all 0.4s ease">
                  <Flex direction={{ base: "column", sm: "row" }} justify="space-between" align={{ base: "start", sm: "center" }} gap={4} mb={5}>
                    <HStack spacing={4}>
                      <Box w="48px" h="48px" borderRadius="xl" overflow="hidden" bg={c.badgeBg} border="1px solid" borderColor={c.badgeBorder} p={1.5} flexShrink={0}>
                        <Image src={exp.image} alt={exp.company} w="full" h="full" objectFit="contain" borderRadius="lg" />
                      </Box>
                      <VStack align="start" spacing={0.5}>
                        <Heading fontFamily="heading" fontSize={{ base: "16px", md: "18px" }} fontWeight={700} color={c.text} letterSpacing="-0.5px">{exp.company}</Heading>
                        <Text fontSize="14px" color="#C2A878" fontWeight={500}>{exp.position}</Text>
                      </VStack>
                    </HStack>
                    <Text fontFamily="mono" fontSize="12px" fontWeight={500} color={c.dim} bg={c.badgeBg} border="1px solid" borderColor={c.badgeBorder} borderRadius="full" px={3} py={1} flexShrink={0}>{exp.duration}</Text>
                  </Flex>

                  <List spacing={3} mb={5}>
                    {exp.listItems.map((item, j) => (
                      <ListItem key={j} fontSize="14px" color={c.muted} lineHeight="1.7" pl={5} position="relative"
                        _before={{ content: '""', position: "absolute", left: "6px", top: "10px", w: "5px", h: "5px", borderRadius: "full", bg: "rgba(194,168,120,0.5)" }}>
                        {item}
                      </ListItem>
                    ))}
                  </List>

                  <HStack spacing={2} flexWrap="wrap" gap={1.5}>
                    {exp.badges.map((b) => (
                      <Text key={b.name} fontFamily="mono" fontSize="11px" fontWeight={500} color={c.badgeText} bg={c.badgeBg} border="1px solid" borderColor={c.badgeBorder} borderRadius="md" px={2.5} py={0.5}>{b.name}</Text>
                    ))}
                  </HStack>
                </Box>
              </M>
            ))}
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}

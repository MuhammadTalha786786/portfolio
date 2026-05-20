import { Stack, Text, Container, Box, HStack, Heading, Image, VStack, Icon, Flex, SimpleGrid, Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import { useColors } from "../hooks/useColors";
import { projects } from "../utils/data";
import type { Project } from "../types";

const M = motion(Box);

export default function Projects() {
  const c = useColors();

  return (
    <Box id="projects" py="80px" position="relative">
      <Box h="1px" bg={c.divider} />

      {/* Subtle background orb */}
      <Box position="absolute" top="15%" right="-8%" w="500px" h="500px" borderRadius="full"
        bg={`radial-gradient(circle, rgba(194,168,120,${c.orbOpacity}) 0%, transparent 60%)`}
        filter="blur(80px)" pointerEvents="none" />

      <Container maxW="1200px" pt="80px">
        <Stack spacing={16}>
          {/* Header */}
          <M initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Text fontSize="13px" fontWeight={500} letterSpacing="0.1em" textTransform="uppercase" color="#C2A878" mb={4}>
              Selected Work
            </Text>
            <Heading fontFamily="heading" fontSize={{ base: "28px", md: "36px" }} fontWeight={700} color={c.text} letterSpacing="-1px" maxW="700px">
              Apps I've shipped to <Text as="span" className="gradient-text">production.</Text>
            </Heading>
            <Text fontSize="16px" color={c.muted} mt={4} maxW="550px" lineHeight="1.7">
              Cross-platform mobile apps across education, e-commerce, blockchain, and IoT — built with care and used by real people.
            </Text>
          </M>

          {/* Featured project — large showcase */}
          <M initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <FeaturedShowcase project={projects[0]} c={c} />
          </M>

          {/* Secondary featured projects */}
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={6}>
            {projects.slice(1, 3).map((p, i) => (
              <M key={p.name} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <SecondaryCard project={p} index={i + 2} c={c} />
              </M>
            ))}
          </Grid>

          {/* More projects — compact grid */}
          {projects.length > 3 && (
            <Box>
              <Text fontSize="13px" fontWeight={500} letterSpacing="0.1em" textTransform="uppercase" color="#C2A878" mb={6}>
                More Projects
              </Text>
              <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={4}>
                {projects.slice(3).map((p, i) => (
                  <M key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}>
                    <CompactCard project={p} c={c} />
                  </M>
                ))}
              </SimpleGrid>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
}

/** Large hero-style showcase for the top project */
function FeaturedShowcase({ project: p, c }: { project: Project; c: ReturnType<typeof useColors> }) {
  const hasScreenshots = p.screenshots && p.screenshots.length > 0;
  const storeLink = p.buttons[0]?.href !== "#" ? p.buttons[0] : null;

  return (
    <Box bg={c.card} border="1px solid" borderColor={c.border} borderRadius="2xl" overflow="hidden"
      boxShadow={c.cardShadow}
      _hover={{ borderColor: c.borderHover, boxShadow: c.hoverShadow }}
      transition="all 0.4s ease">
      {/* Screenshots area — full width */}
      <Box
        h={{ base: "280px", md: "380px" }}
        bg={`linear-gradient(135deg, rgba(194,168,120,0.06), rgba(141,110,99,0.03))`}
        position="relative"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={{ base: 4, md: 8 }}
        py={6}
      >
        {hasScreenshots ? (
          <HStack spacing={{ base: 3, md: 5 }} h="full" align="center" justify="center"
            overflowX="auto"
            sx={{
              "&::-webkit-scrollbar": { height: "4px" },
              "&::-webkit-scrollbar-thumb": { background: c.border, borderRadius: "full" },
            }}>
            {p.screenshots!.map((src, i) => (
              <PhoneMockup key={i} src={src} alt={`${p.name} ${i + 1}`} c={c} />
            ))}
          </HStack>
        ) : (
          <Image src={p.image} alt={p.name} maxH="80%" objectFit="contain" borderRadius="xl" />
        )}
      </Box>

      {/* Content */}
      <Box p={{ base: 6, md: 8 }}>
        <Flex direction={{ base: "column", md: "row" }} justify="space-between" align={{ base: "start", md: "center" }} gap={4} mb={4}>
          <VStack align="start" spacing={1}>
            <HStack spacing={3}>
              <Text fontFamily="mono" fontSize="12px" fontWeight={500} color="#C2A878">01</Text>
              {p.tags.map((tag) => (
                <Text key={tag} fontSize="11px" fontWeight={600} color={c.badgeText} bg={c.badgeBg} border="1px solid" borderColor={c.badgeBorder} borderRadius="full" px={3} py={0.5}>{tag}</Text>
              ))}
            </HStack>
            <Heading fontFamily="heading" fontSize={{ base: "22px", md: "28px" }} fontWeight={700} color={c.text} letterSpacing="-0.5px">{p.name}</Heading>
          </VStack>

          {storeLink && (
            <Box as="a" href={storeLink.href} target="_blank" rel="noreferrer noopener"
              bg="#C2A878" color="white" fontWeight={600} borderRadius="lg" px={5} py={2.5} fontSize="13px"
              display="inline-flex" alignItems="center" gap={2} textDecoration="none" flexShrink={0}
              _hover={{ boxShadow: "0 4px 20px rgba(194,168,120,0.3)", transform: "translateY(-1px)" }}
              transition="all 0.3s">
              <Icon as={storeLink.text.includes("Play") ? FaGooglePlay : FaAppStoreIos} boxSize={3} />
              {storeLink.text}
            </Box>
          )}
        </Flex>

        <Text fontSize="15px" color={c.muted} lineHeight="1.8" maxW="700px" mb={5}>
          {p.description}
        </Text>

        <HStack spacing={2} flexWrap="wrap" gap={2}>
          {p.badges.map((b) => (
            <Text key={b.text} fontFamily="mono" fontSize="11px" fontWeight={500} color={c.badgeText}
              bg={c.badgeBg} border="1px solid" borderColor={c.badgeBorder} borderRadius="full" px={3} py={1}>
              {b.text}
            </Text>
          ))}
        </HStack>
      </Box>
    </Box>
  );
}

/** Medium card with side-by-side layout */
function SecondaryCard({ project: p, index, c }: { project: Project; index: number; c: ReturnType<typeof useColors> }) {
  const hasScreenshots = p.screenshots && p.screenshots.length > 0;
  const storeLink = p.buttons[0]?.href !== "#" ? p.buttons[0] : null;

  return (
    <Box bg={c.card} border="1px solid" borderColor={c.border} borderRadius="2xl" overflow="hidden" h="full"
      boxShadow={c.cardShadow}
      _hover={{ borderColor: c.borderHover, transform: "translateY(-4px)", boxShadow: c.hoverShadow }}
      transition="all 0.4s ease">
      {/* Screenshot area */}
      <Box h="220px" bg="linear-gradient(135deg, rgba(194,168,120,0.05), rgba(141,110,99,0.02))"
        display="flex" alignItems="center" justifyContent="center" px={4} py={4} overflow="hidden">
        {hasScreenshots ? (
          <HStack spacing={3} h="full" align="center" overflowX="auto"
            sx={{ "&::-webkit-scrollbar": { display: "none" } }}>
            {p.screenshots!.slice(0, 3).map((src, i) => (
              <PhoneMockup key={i} src={src} alt={`${p.name} ${i + 1}`} c={c} small />
            ))}
          </HStack>
        ) : (
          <Image src={p.image} alt={p.name} maxH="80%" objectFit="contain" borderRadius="lg" />
        )}
      </Box>

      {/* Content */}
      <Box p={6}>
        <HStack spacing={2} mb={2}>
          <Text fontFamily="mono" fontSize="12px" fontWeight={500} color="#C2A878">0{index}</Text>
          {p.tags.map((tag) => (
            <Text key={tag} fontSize="10px" fontWeight={600} color={c.badgeText} bg={c.badgeBg} border="1px solid" borderColor={c.badgeBorder} borderRadius="full" px={2.5} py={0.5}>{tag}</Text>
          ))}
        </HStack>

        <Heading fontFamily="heading" fontSize="18px" fontWeight={700} color={c.text} letterSpacing="-0.5px" mb={2}>{p.name}</Heading>
        <Text fontSize="13px" color={c.muted} lineHeight="1.7" noOfLines={3} mb={4}>{p.description}</Text>

        <HStack spacing={2} flexWrap="wrap" gap={1.5} mb={4}>
          {p.badges.slice(0, 4).map((b) => (
            <Text key={b.text} fontFamily="mono" fontSize="10px" fontWeight={500} color={c.badgeText}
              bg={c.badgeBg} border="1px solid" borderColor={c.badgeBorder} borderRadius="full" px={2.5} py={0.5}>
              {b.text}
            </Text>
          ))}
        </HStack>

        {storeLink && (
          <Box as="a" href={storeLink.href} target="_blank" rel="noreferrer noopener"
            display="inline-flex" alignItems="center" gap={2} fontSize="13px" color="#C2A878" fontWeight={500}
            _hover={{ color: "#8D6E63" }} textDecoration="none">
            <Icon as={FaExternalLinkAlt} boxSize={3} />{storeLink.text}
          </Box>
        )}
      </Box>
    </Box>
  );
}

/** Compact card for remaining projects */
function CompactCard({ project: p, c }: { project: Project; c: ReturnType<typeof useColors> }) {
  return (
    <Box bg={c.card} border="1px solid" borderColor={c.border} borderRadius="xl" p={5} h="full"
      boxShadow={c.cardShadow}
      _hover={{ borderColor: c.borderHover, transform: "translateY(-3px)", boxShadow: c.hoverShadow }}
      transition="all 0.4s ease">
      <VStack align="start" spacing={3} h="full">
        {/* Icon / image */}
        <Box w="40px" h="40px" borderRadius="lg" overflow="hidden" bg={c.badgeBg} border="1px solid" borderColor={c.badgeBorder}
          display="flex" alignItems="center" justifyContent="center" flexShrink={0}>
          <Image src={p.image} alt={p.name} w="full" h="full" objectFit="cover" borderRadius="md" />
        </Box>

        <VStack align="start" spacing={1.5} flex={1}>
          <HStack spacing={2}>
            {p.tags.map((tag) => (
              <Text key={tag} fontSize="9px" fontWeight={600} color={c.badgeText} bg={c.badgeBg} border="1px solid" borderColor={c.badgeBorder} borderRadius="full" px={2} py={0.5}>{tag}</Text>
            ))}
          </HStack>
          <Heading fontFamily="heading" fontSize="15px" fontWeight={600} color={c.text} letterSpacing="-0.3px">{p.name}</Heading>
          <Text fontSize="12px" color={c.muted} lineHeight="1.6" noOfLines={2}>{p.description}</Text>
        </VStack>

        <HStack spacing={1.5} flexWrap="wrap">
          {p.badges.slice(0, 2).map((b) => (
            <Text key={b.text} fontFamily="mono" fontSize="9px" fontWeight={500} color={c.dim}
              bg={c.badgeBg} borderRadius="md" px={2} py={0.5}>
              {b.text}
            </Text>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
}

/** Phone mockup wrapper for screenshots */
function PhoneMockup({ src, alt, c, small }: { src: string; alt: string; c: ReturnType<typeof useColors>; small?: boolean }) {
  const h = small ? "90%" : "92%";
  return (
    <Box
      h={h}
      flexShrink={0}
      bg={c.bg}
      border="3px solid"
      borderColor={c.border}
      borderRadius="24px"
      p="4px"
      boxShadow="0 8px 30px rgba(0,0,0,0.08)"
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.02)" }}
    >
      <Box borderRadius="20px" overflow="hidden" h="full">
        <Image src={src} alt={alt} h="full" w="auto" objectFit="contain" />
      </Box>
    </Box>
  );
}

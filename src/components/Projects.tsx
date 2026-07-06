import { Stack, Text, Box, HStack, Heading, Image, VStack, Icon, Flex, SimpleGrid, Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import { useColors, type Colors } from "../hooks/useColors";
import { projects } from "../utils/data";
import type { Project } from "../types";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

const M = motion(Box);

export default function Projects() {
  const c = useColors();

  return (
    <Section id="projects" withOrb>
      <Stack spacing={{ base: 14, md: 16 }}>
        <SectionHeader
          label="Selected Work"
          title={
            <>
              Apps I've shipped to <Text as="span" className="gradient-text">production.</Text>
            </>
          }
          description="Cross-platform mobile apps across education, e-commerce, blockchain, and IoT — built with care and used by real people."
        />

        <M
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <FeaturedShowcase project={projects[0]} c={c} />
        </M>

        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={6}>
          {projects.slice(1, 3).map((p, i) => (
            <M
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <SecondaryCard project={p} index={i + 2} c={c} />
            </M>
          ))}
        </Grid>

        {projects.length > 3 && (
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
              More Projects
            </Text>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={4}>
              {projects.slice(3).map((p, i) => (
                <M
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <CompactCard project={p} c={c} />
                </M>
              ))}
            </SimpleGrid>
          </Box>
        )}
      </Stack>
    </Section>
  );
}

function FeaturedShowcase({ project: p, c }: { project: Project; c: Colors }) {
  const hasScreenshots = p.screenshots && p.screenshots.length > 0;
  const storeLink = p.buttons[0]?.href !== "#" ? p.buttons[0] : null;

  return (
    <Card overflow="hidden" borderRadius="3xl" p={0}>
      <Box
        h={{ base: "280px", md: "380px" }}
        bg={c.gradientSubtle}
        position="relative"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={{ base: 4, md: 8 }}
        py={6}
      >
        {hasScreenshots ? (
          <HStack
            spacing={{ base: 3, md: 5 }}
            h="full"
            align="center"
            justify="center"
            overflowX="auto"
            sx={{
              "&::-webkit-scrollbar": { height: "3px" },
              "&::-webkit-scrollbar-thumb": { background: c.border, borderRadius: "full" },
            }}
          >
            {p.screenshots!.map((src, i) => (
              <PhoneMockup key={i} src={src} alt={`${p.name} ${i + 1}`} c={c} />
            ))}
          </HStack>
        ) : (
          <Image src={p.image} alt={p.name} maxH="80%" objectFit="contain" borderRadius="xl" />
        )}
      </Box>

      <Box p={{ base: 6, md: 8 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "start", md: "center" }}
          gap={4}
          mb={5}
        >
          <VStack align="start" spacing={2}>
            <HStack spacing={3}>
              <Text fontFamily="mono" fontSize="12px" fontWeight={500} color={c.accent}>
                01
              </Text>
              {p.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </HStack>
            <Heading
              fontFamily="heading"
              fontSize={{ base: "24px", md: "30px" }}
              fontWeight={700}
              color={c.text}
              letterSpacing="-0.02em"
            >
              {p.name}
            </Heading>
          </VStack>

          {storeLink && (
            <Button
              variant="primary"
              href={storeLink.href}
              external
              px={5}
              py={2.5}
              fontSize="13px"
              borderRadius="lg"
              flexShrink={0}
            >
              <Icon as={storeLink.text.includes("Play") ? FaGooglePlay : FaAppStoreIos} boxSize={3} />
              {storeLink.text}
            </Button>
          )}
        </Flex>

        <Text fontSize="15px" color={c.muted} lineHeight="1.8" maxW="700px" mb={5}>
          {p.description}
        </Text>

        <HStack spacing={2} flexWrap="wrap" gap={2}>
          {p.badges.map((b) => (
            <Badge key={b.text} mono>
              {b.text}
            </Badge>
          ))}
        </HStack>
      </Box>
    </Card>
  );
}

function SecondaryCard({ project: p, index, c }: { project: Project; index: number; c: Colors }) {
  const hasScreenshots = p.screenshots && p.screenshots.length > 0;
  const storeLink = p.buttons[0]?.href !== "#" ? p.buttons[0] : null;

  return (
    <Card overflow="hidden" h="full" borderRadius="2xl" p={0}>
      <Box
        h="220px"
        bg={c.gradientSubtle}
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={4}
        py={4}
        overflow="hidden"
      >
        {hasScreenshots ? (
          <HStack spacing={3} h="full" align="center" overflowX="auto" sx={{ "&::-webkit-scrollbar": { display: "none" } }}>
            {p.screenshots!.slice(0, 3).map((src, i) => (
              <PhoneMockup key={i} src={src} alt={`${p.name} ${i + 1}`} c={c} small />
            ))}
          </HStack>
        ) : (
          <Image src={p.image} alt={p.name} maxH="80%" objectFit="contain" borderRadius="lg" />
        )}
      </Box>

      <Box p={6}>
        <HStack spacing={2} mb={3}>
          <Text fontFamily="mono" fontSize="12px" fontWeight={500} color={c.accent}>
            0{index}
          </Text>
          {p.tags.map((tag) => (
            <Badge key={tag} fontSize="10px" px={2.5}>
              {tag}
            </Badge>
          ))}
        </HStack>

        <Heading
          fontFamily="heading"
          fontSize="19px"
          fontWeight={700}
          color={c.text}
          letterSpacing="-0.02em"
          mb={2}
        >
          {p.name}
        </Heading>
        <Text fontSize="13px" color={c.muted} lineHeight="1.7" noOfLines={3} mb={4}>
          {p.description}
        </Text>

        <HStack spacing={2} flexWrap="wrap" gap={1.5} mb={4}>
          {p.badges.slice(0, 4).map((b) => (
            <Badge key={b.text} mono fontSize="10px" px={2.5}>
              {b.text}
            </Badge>
          ))}
        </HStack>

        {storeLink && (
          <Box
            as="a"
            href={storeLink.href}
            target="_blank"
            rel="noreferrer noopener"
            display="inline-flex"
            alignItems="center"
            gap={2}
            fontSize="13px"
            color={c.accent}
            fontWeight={500}
            _hover={{ color: c.accentSecondary, gap: 3 }}
            textDecoration="none"
            transition={c.transition}
          >
            <Icon as={FaExternalLinkAlt} boxSize={3} />
            {storeLink.text}
          </Box>
        )}
      </Box>
    </Card>
  );
}

function CompactCard({ project: p, c }: { project: Project; c: Colors }) {
  return (
    <Card borderRadius="xl" p={5} h="full" elevated>
      <VStack align="start" spacing={3} h="full">
        <Box
          w="44px"
          h="44px"
          borderRadius="xl"
          overflow="hidden"
          bg={c.badgeBg}
          border="1px solid"
          borderColor={c.badgeBorder}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexShrink={0}
        >
          <Image src={p.image} alt={p.name} w="full" h="full" objectFit="cover" borderRadius="lg" />
        </Box>

        <VStack align="start" spacing={1.5} flex={1}>
          <HStack spacing={2}>
            {p.tags.map((tag) => (
              <Badge key={tag} fontSize="9px" px={2}>
                {tag}
              </Badge>
            ))}
          </HStack>
          <Heading fontFamily="heading" fontSize="15px" fontWeight={600} color={c.text} letterSpacing="-0.01em">
            {p.name}
          </Heading>
          <Text fontSize="12px" color={c.muted} lineHeight="1.6" noOfLines={2}>
            {p.description}
          </Text>
        </VStack>

        <HStack spacing={1.5} flexWrap="wrap">
          {p.badges.slice(0, 2).map((b) => (
            <Text
              key={b.text}
              fontFamily="mono"
              fontSize="9px"
              fontWeight={500}
              color={c.dim}
              bg={c.badgeBg}
              borderRadius="md"
              px={2}
              py={0.5}
            >
              {b.text}
            </Text>
          ))}
        </HStack>
      </VStack>
    </Card>
  );
}

function PhoneMockup({ src, alt, c, small }: { src: string; alt: string; c: Colors; small?: boolean }) {
  const h = small ? "90%" : "92%";
  return (
    <Box
      h={h}
      flexShrink={0}
      bg={c.bg}
      border="2px solid"
      borderColor={c.border}
      borderRadius="28px"
      p="5px"
      boxShadow="0 8px 32px rgba(0,0,0,0.08)"
      transition={c.transition}
      _hover={{ transform: "scale(1.03) translateY(-2px)", boxShadow: c.hoverShadow }}
    >
      <Box borderRadius="22px" overflow="hidden" h="full">
        <Image src={src} alt={alt} h="full" w="auto" objectFit="contain" />
      </Box>
    </Box>
  );
}

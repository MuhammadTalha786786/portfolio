import { Stack, Text, Box, HStack, Heading, VStack, Image, List, ListItem, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useColors } from "../hooks/useColors";
import { experience } from "../utils/data";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";
import Badge from "./ui/Badge";

const M = motion(Box);

export default function Experience() {
  const c = useColors();

  return (
    <Section id="experience">
      <Stack spacing={{ base: 14, md: 16 }}>
        <SectionHeader
          label="Experience"
          title={
            <>
              Where I've <Text as="span" className="gradient-text">made impact.</Text>
            </>
          }
        />

        <VStack spacing={0} align="stretch" position="relative">
          <Box
            position="absolute"
            left={{ base: "16px", md: "20px" }}
            top="0"
            bottom="0"
            w="2px"
            bg={c.gradient}
            opacity={0.4}
            display={{ base: "none", md: "block" }}
          />

          {experience.map((exp, i) => (
            <M
              key={exp.company}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
              pl={{ base: 0, md: 16 }}
              pb={10}
              position="relative"
            >
              <Flex
                display={{ base: "none", md: "flex" }}
                position="absolute"
                left="12px"
                top="32px"
                w="18px"
                h="18px"
                borderRadius="full"
                bg={c.bg}
                border="2px solid"
                borderColor={c.accent}
                align="center"
                justify="center"
                zIndex={1}
                boxShadow="0 0 16px rgba(194,168,120,0.25)"
              >
                <Box w="6px" h="6px" borderRadius="full" bg={c.accentSecondary} />
              </Flex>

              <Card borderRadius="2xl" p={{ base: "24px", md: "32px" }}>
                <Flex
                  direction={{ base: "column", sm: "row" }}
                  justify="space-between"
                  align={{ base: "start", sm: "center" }}
                  gap={4}
                  mb={5}
                >
                  <HStack spacing={4}>
                    <Box
                      w="52px"
                      h="52px"
                      borderRadius="xl"
                      overflow="hidden"
                      bg={c.badgeBg}
                      border="1px solid"
                      borderColor={c.badgeBorder}
                      p={1.5}
                      flexShrink={0}
                    >
                      <Image src={exp.image} alt={exp.company} w="full" h="full" objectFit="contain" borderRadius="lg" />
                    </Box>
                    <VStack align="start" spacing={0.5}>
                      <Heading
                        fontFamily="heading"
                        fontSize={{ base: "17px", md: "19px" }}
                        fontWeight={700}
                        color={c.text}
                        letterSpacing="-0.02em"
                      >
                        {exp.company}
                      </Heading>
                      <Text fontSize="14px" color={c.accent} fontWeight={500}>
                        {exp.position}
                      </Text>
                    </VStack>
                  </HStack>
                  <Badge mono fontSize="12px" px={3} py={1} flexShrink={0}>
                    {exp.duration}
                  </Badge>
                </Flex>

                <List spacing={3} mb={5}>
                  {exp.listItems.map((item, j) => (
                    <ListItem
                      key={j}
                      fontSize="14px"
                      color={c.muted}
                      lineHeight="1.75"
                      pl={5}
                      position="relative"
                      _before={{
                        content: '""',
                        position: "absolute",
                        left: "6px",
                        top: "10px",
                        w: "4px",
                        h: "4px",
                        borderRadius: "full",
                        bg: "rgba(194, 168, 120, 0.5)",
                      }}
                    >
                      {item}
                    </ListItem>
                  ))}
                </List>

                <HStack spacing={2} flexWrap="wrap" gap={1.5}>
                  {exp.badges.map((b) => (
                    <Badge key={b.name} mono fontSize="11px" borderRadius="md" px={2.5}>
                      {b.name}
                    </Badge>
                  ))}
                </HStack>
              </Card>
            </M>
          ))}
        </VStack>
      </Stack>
    </Section>
  );
}

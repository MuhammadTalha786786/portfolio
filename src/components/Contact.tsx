import { Stack, Text, Box, HStack, VStack, Icon, SimpleGrid } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useColors } from "../hooks/useColors";
import { profile } from "../constants/profile";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";
import Button from "./ui/Button";
import IconBox from "./ui/IconBox";

const M = motion(Box);

// Card doesn't expose a polymorphic `as="a"` prop union in its TS types,
// so we type the anchor-specific props here and spread them with a cast.
// This keeps full type safety everywhere else in the file.
type CardLinkProps = {
  as: "a";
  href: string;
  target?: string;
  rel?: string;
};

const links = [
  { icon: FaEnvelope, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FaLinkedin, label: "LinkedIn", value: "muhammad-talha", href: profile.linkedin },
  { icon: FaGithub, label: "GitHub", value: "MuhammadTalha786786", href: profile.github },
  { icon: FaPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
];

export default function Contact() {
  const c = useColors();

  return (
    <Section id="contact">
      <Stack spacing={{ base: 14, md: 16 }}>
        <Box textAlign="center">
          <SectionHeader
            label="Contact"
            title={
              <>
                Have a project <Text as="span" className="gradient-text">worth building?</Text>
              </>
            }
            description="I'm open to senior mobile engineering roles, freelance projects, and exciting collaborations."
            align="center"
          />

          <M
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <HStack spacing={4} justify="center" mt={8} flexWrap="wrap">
              <Button href={`mailto:${profile.email}`}>
                Start a Conversation <Icon as={FaArrowRight} boxSize={3} />
              </Button>
              <Button variant="secondary" href={profile.linkedin} external>
                View LinkedIn
              </Button>
            </HStack>
          </M>
        </Box>

        <M
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4}>
            {links.map((link, i) => {
              const cardLinkProps: CardLinkProps = {
                as: "a",
                href: link.href,
                target: link.href.startsWith("http") ? "_blank" : undefined,
                rel: "noreferrer noopener",
              };

              return (
                <M
                  key={link.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <Card
                    {...(cardLinkProps as any)}
                    borderRadius="xl"
                    p="28px"
                    textDecoration="none"
                    display="block"
                  >
                    <VStack align="start" spacing={3.5}>
                      <IconBox icon={link.icon} size="42px" />
                      <Text
                        fontSize="11px"
                        fontWeight={600}
                        color={c.dim}
                        letterSpacing="0.1em"
                        textTransform="uppercase"
                        fontFamily="mono"
                      >
                        {link.label}
                      </Text>
                      <Text fontSize="14px" color={c.text} fontWeight={500} wordBreak="break-all" lineHeight="1.5">
                        {link.value}
                      </Text>
                    </VStack>
                  </Card>
                </M>
              );
            })}
          </SimpleGrid>
        </M>
      </Stack>
    </Section>
  );
}
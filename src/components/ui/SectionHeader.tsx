import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useColors } from "../../hooks/useColors";

const MotionBox = motion(Box);

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  maxW?: string;
}

export default function SectionHeader({ label, title, description, align = "left", maxW = "700px" }: SectionHeaderProps) {
  const c = useColors();

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <VStack align={align === "center" ? "center" : "start"} spacing={0}>
        <Text
          fontSize="12px"
          fontWeight={600}
          letterSpacing="0.12em"
          textTransform="uppercase"
          color={c.accent}
          mb={4}
          fontFamily="mono"
        >
          {label}
        </Text>
        <Heading
          fontFamily="heading"
          fontSize={{ base: "30px", md: "40px" }}
          fontWeight={700}
          color={c.text}
          letterSpacing="-0.03em"
          lineHeight="1.15"
          maxW={maxW}
          textAlign={align}
        >
          {title}
        </Heading>
        {description && (
          <Text
            fontSize={{ base: "15px", md: "16px" }}
            color={c.muted}
            mt={5}
            maxW={align === "center" ? "520px" : "600px"}
            lineHeight="1.75"
            textAlign={align}
          >
            {description}
          </Text>
        )}
      </VStack>
    </MotionBox>
  );
}

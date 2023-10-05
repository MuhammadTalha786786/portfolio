import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import './ResponsiveStyle.css'


export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        align="center"
        id='smallText'
      >
        <Text className='fontFamily'   id='smallText'>© 2023 MT. All rights reserved</Text>
      </Container>
    </Box>
  );
}

import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Heading,
  Center,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import './ResponsiveStyle.css'


export default function Contact({ color }) {
        let profile = {
          "siteName": "",
          "headerName": "Hi, my name is Muhammad Talha.",
          "headerRole": "I'm a software engineer.",
          "headerDesc": "I'm a software engineer  having 2 years of expeience  in React Native and React Js, developed web and cross platform Apps",
          "about": "Write your \"About\" section here.",
          "contact": "+923156028415",
          "linkedin": "https://www.linkedin.com/in/muhammad-talha-b16520185/",
          "github": "https://github.com/MuhammadTalha786786",
          "email": "mtalha25800@gmail.com",
          "logo": "MT"
        }
        const linkedin = () => {
          window.open(`${profile.linkedin}`, "_blank", "noreferrer,noopener");
        };
        const github = () => {
          window.open(`${profile.github}`, "_blank", "noreferrer,noopener");
        };
        const email = () => {
          window.open(`mailto:${profile.email}`, "_blank", "noreferrer,noopener");
        };
  return (
    <>
      <Container maxW={"3xl"} id="contact">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}  className='fontFamily'>
                04
              </Text>
              <Text fontWeight={800} className='fontFamily'   >Contact</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"}  id='headerText' className='fontFamily' >Let's stay in touch!</Heading>
            <Text color={"gray.600"} fontSize={"xl"} px={4}   id='smallText'  className='fontFamily'>
              {profile.contact}
            </Text>
            <Text color={`${color}.500`} fontWeight={600} fontSize={"lg"} px={4}   id='smallText'  className='fontFamily'>
             mtalha25800@gmail.com
            </Text>
            <Center>
              <HStack pt={4} spacing={4}>
                <FaLinkedin onClick={linkedin} size={28} />
                <FaGithub onClick={github} size={28} />
                <FaEnvelope onClick={email} size={28} />
              </HStack>
            </Center>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}


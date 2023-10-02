import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  ButtonGroup,
  IconButton,
  VStack
} from "@chakra-ui/react";
import {skills} from '.././utils/Utils'
import './ResponsiveStyle.css'

export default function About({ color }) {


  return (
    <>
      <Container   maxW='3xl' id="about" >
        <Stack
          
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}  id='skillHeader'>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                01
              </Text>
              <Text fontWeight={800}>Skill</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Container >

          {/* <ButtonGroup style={{backroundColor:"green"}}  variant="ghost"  > */}
          <HStack   id="skills" >
            { 
              skills.map((x) => (
                <div style={{ paddingHorizontal: 10 , }}>

                  <x.name size="70" />

                </div>
              ))
            }
            </HStack>

          {/* </ButtonGroup> */}
          </Container>


        </Stack>
      </Container>
    </>
  );
}


import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Image,
  Heading,
  SimpleGrid,
  Badge,
  Link,
  Center,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import { useState } from "react";
import {projects} from '.././utils/Utils'
import './ResponsiveStyle.css'

// 
export default function Projects({ color }) {

  const others = [
    {
      "name": "Smart Brain",
      "description": "Smart Brain is detect faces in the images developed using React JS, clarifai AI",
      "tags": [
        "Smart Brain"
      ],
      "badges": [
        {
          "text": "",
          "colorScheme": ""
        }
      ],
      "buttons": [
        {
          "text": "Smart Brain",
          "href": "https://muhammadtalha786786.github.io/Smart_Brain/"
        }
      ]
    },
    {
      "name": "Quote Machine",
      "description": "Quote Machine generate random quote developed in React JS ",
      "tags": [
        "Quote Machine"
      ],
      "badges": [
        {
          "text": "",
          "colorScheme": ""
        }
      ],
      "buttons": [
        {
          "text": "Quote Machine",
          "href": "https://muhammadtalha786786.github.io/quote-machine/"
        }
      ]
    },
    {
      "name": "RoboFriends",
      "description": "RoboFriends is a Static React Application showing data of Robots , Search specific robot. ",
      "tags": [
        "RoboFriends"
      ],
      "badges": [
        {
          "text": "",
          "colorScheme": ""
        }
      ],
      "buttons": [
        {
          "text": "RoboFriends",
          "href": "https://muhammadtalha786786.github.io/Robots/"
        }
      ]
    }
  ];
  const options = [
    {
      value: "Smart Brain"
    },
    {
      value: "Quote Machine"
    },
    {
      value: "RoboFriends"
    }
  ];
  const [selected, setSelected] = useState("All");

  const handleSelected = (value) => {
    setSelected(value);
  };

  return (
    <>
      <Container maxW={"3xl"} id="projects">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                03
              </Text>
              <Text fontWeight={800}>Projects</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack px={4} spacing={4}>
            {projects.map((project) => (
              <Fade bottom>
                <Card
                  key={project.name}
                  direction={{
                    base: "column",
                  }}
                  overflow="hidden"
                >
                  <Image objectFit="cover" src={project.image} />

                  <Stack>
                    <CardBody align="left">
                      <Heading size="md" id='smallText' className='fontFamily'>{project.name}</Heading>

                      <Text py={2}  id='smallText'  className='fontFamily'>{project.description}</Text>

                      {/* <HStack py={2}>
                        {project.buttons.map((button) => (
                          <a key={button.text} href={button.href}>
                            <Button color={`${color}.400`}>
                              {button.text}
                            </Button>
                          </a>
                        ))}
                      </HStack> */}
                      {/* <HStack pt={4} spacing={2}>
                        {project.badges.map((badge) => (
                          <Badge
                            key={badge.text}
                            colorScheme={badge.colorScheme}
                          >
                            {badge.text}
                          </Badge>
                        ))}
                      </HStack> */}
                    </CardBody>
                  </Stack>
                </Card>
              </Fade>
            ))}
          </Stack>
          <Text color={"gray.600"} fontSize={"xl"} px={4} id='headerText'  >
            Other Projects
          </Text>
          <Center px={4}>
            <ButtonGroup variant="outline">
              <Button
                id='experienceButton'
                colorScheme={selected === "All" ? `${color}` : "gray"}
                onClick={() => handleSelected("All")}
              >
                All
              </Button>
              {options.map((option) => (
                <Button
                  id='experienceButton'

                  colorScheme={selected === option.value ? `${color}` : "gray"}
                  onClick={() => handleSelected(option.value)}
                >
                  {option.value}
                </Button>
              ))}
            </ButtonGroup>
          </Center>
          <SimpleGrid columns={[1, 2, 3]} px={4} spacing={4}>
            {others
              .filter((other) => {
                if (selected === "All") {
                  return true;
                } else {
                  return other.tags.includes(selected);
                }
              })
              .map((other) => (
                <Fade bottom>
                  <Card key={other.name}>
                    <Stack>
                      <CardBody align="left" h={[null, "40vh"]}>
                        <Heading size="sm" id='smallText'  >{other.name}</Heading>

                        <Text fontSize="sm" py={2} id='smallText'>
                          {other.description}
                        </Text>

                        <HStack spacing={2}>
                          {other.buttons.map((button) => (
                            <Link
                              key={button.text}
                              href={button.href}
                              color={`${color}.400`}
                              id='smallText'
                            >
                              {button.text}
                            </Link>
                          ))}
                        </HStack>
                        <HStack flexWrap="wrap" pt={4} spacing={2}>
                          {other.badges.map((badge) => (
                            <Badge
                              my={2}
                              key={badge.text}
                              colorScheme={badge.colorScheme}
                            >
                              {badge.text}
                            </Badge>
                          ))}
                        </HStack>
                      </CardBody>
                    </Stack>
                  </Card>
                </Fade>
              ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
}

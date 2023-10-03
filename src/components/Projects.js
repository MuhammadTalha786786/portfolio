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
import funoonee from './images/Funoonee.jpg'
import worklics from './images/worklics.jpg'
import onboard from './images/onboarding.jpg'
import delivery from './images/delivery.jpg'
import './ResponsiveStyle.css'

// 
export default function Projects({ color }) {
  const projects = [
    {
      "name": "Consumer App",
      "description": "24Seven is an online grocery shopping platform with more than 1000 registered store partners in the market.Consumer App ( Apni Dukan ) is like ecommerce app in which users can shop online, browse product catalogs,create wish lists, add items to a cart, and complete purchases. It also provides payment processing, shipping, and order management capabilities.",
      "image": "https://res.cloudinary.com/crunchbase-production/image/upload/hqboeqwziq5brmtbkz6c",
      "tags": [
        "Category 1"
      ],
      "badges": [
        {
          "text": "Badge",
          "colorScheme": "blue"
        }
      ],
      "buttons": [
        {
          "text": "Link",
          "href": "https://example.com"
        }
      ]
    },
    {
      "name": "OnBoarding App",
      "description": "OnBoarding is basically used to onboard the shop retailers who are registered with 24Seven. Associates add the required data of shops and shop owners which can approve or reject by the Cluster Manager.",
      "image": onboard,
      "tags": [
        "Category 2"
      ],
      "badges": [
        {
          "text": "Badge",
          "colorScheme": "blue"
        }
      ],
      "buttons": [
        {
          "text": "Link",
          "href": "https://example.com"
        }
      ]
    },
    {
      "name": "Delivery App",
      "description": "The delivery app is used for delivering orders of the shop retailers from the  warehouse. The rider automatically moves to the optimized route of the",
      "image": delivery,
      "tags": [
        "Category 3"
      ],
      "badges": [
        {
          "text": "Badge",
          "colorScheme": "blue"
        }
      ],
      "buttons": [
        {
          "text": "Link",
          "href": "https://example.com"
        }
      ]
    },
    {
      "name": "Funoonee",
      "description": "Funoonee is an online market for hiring handymen based in Riyadh. My core responsibilities were the development of both mobile and web application using react-native and react js for both platforms respectively. Maintain and Deployed on the App Store.",
      "image": funoonee,
      "tags": [
        "Category 3"
      ],
      "badges": [
        {
          "text": "Badge",
          "colorScheme": "blue"
        }
      ],
      "buttons": [
        {
          "text": "Link",
          "href": "https://example.com"
        }
      ]
    },
    {
      "name": "Worklics",
      "description": `An attendance app built using the React-native framework and nodeJS and PostgreSQL being the backend and database respectively. The app consists of separate individual modules with facial recognition being the core of all.
      The app is currently being used by the DCC Construction Company Internally.
      Microsoft Azure cognitive services for face detection. Google-maps Api for
      location. Redux persists for global state management. implement push
      Notiﬁcation using Firebase. Deploy app on App Store and Play store.`,
      "image": worklics,
      "tags": [
        "Category 3"
      ],
      "badges": [
        {
          "text": "Badge",
          "colorScheme": "blue"
        }
      ],
      "buttons": [
        {
          "text": "Link",
          "href": "https://example.com"
        }
      ]
    }


  ];
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
                      <Heading size="md">{project.name}</Heading>

                      <Text py={2}>{project.description}</Text>

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
          <Text color={"gray.600"} fontSize={"xl"} px={4}>
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
                        <Heading size="sm">{other.name}</Heading>

                        <Text fontSize="sm" py={2}>
                          {other.description}
                        </Text>

                        <HStack spacing={2}>
                          {other.buttons.map((button) => (
                            <Link
                              key={button.text}
                              href={button.href}
                              color={`${color}.400`}
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

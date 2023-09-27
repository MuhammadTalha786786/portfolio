import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Badge,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Fade } from "react-reveal";
import { useState, useEffect } from "react";
import logo from './images/logo.png'
import codeninja from './images/codeninja.jpeg'


export default function Experience({ color }) {
  const experience = [
  
    {
        "image": codeninja,
        "company": "CodeNinja Consulting",
        "position": "Software Engineer",
        "duration": "Feb'22- Continue",
        "badges": [
            {
                "name": "",
                "colorScheme": "blue"
            }
        ],
        "listItems": [
            "Developed and maintained React Native components, screens, and features for the mobile app",
            "Collaborated with other developers to implement new features in a way that is consistent with existing code-base conventions",
            "Developed front-end user interface using React Native and JavaScript forx iOS and Android mobile applications.",
            "Integrate Rest API's With the Application",
            "Maintain code for Both Android and IOS",
            "Deployed Apps on Both PlayStore and AppStore"
        ],
        "tags": "CodeNinja Consulting"
    },
    {
      "image": logo,
      "company": "Bitmesh Technologies",
      "position": "Software Engineer",
      "duration": "Sep'21 - Jan'22",
      "badges": [
          {
              "name": "",
              "colorScheme": "blue"
          }
      ],
      "listItems": [
          "As a React developer, worked on both mobile and web, designing and integrating apis, collaborating with the team and gather requirements",
        
      ],
      "tags": "Bitmesh Technologies"
  },
 
];
  const options = [
    
    {
        value: "CodeNinja Consulting"
    },

    {
      value: "Bitmesh Technologies"
  },
    
];
const [selected, setSelected] = useState("");


  useEffect(() => {
    if (options.length > 0) {
      setSelected(options[0].value);
    }
  }, []);
  
  const handleSelected = (value) => {
    setSelected(value);
  };


  return (
    <>
      <Container maxW={"3xl"} id="experience">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Experience</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Center px={4}>
            <ButtonGroup variant="outline">
              {options.map((option) => (
                <Button
                  colorScheme={selected === option.value ? `${color}` : "gray"}
                  onClick={() => handleSelected(option.value)}
                >
                  {option.value}
                </Button>
              ))}
            </ButtonGroup>
          </Center>
          <Stack px={2} spacing={4}>
            {experience
              .filter((exp) => exp.tags.includes(selected))
              .map((exp) => (
                <Fade bottom>
                  <Card key={exp.company} size="sm">
                    <CardHeader>
                      <Flex justifyContent="space-between">
                        <HStack>
                          <Image src={exp.image} h={50} />
                          <Box px={2} align="left">
                            <Text fontWeight={600}>{exp.company}</Text>
                            <Text>{exp.position}</Text>
                          </Box>
                        </HStack>
                        <Text px={2} fontWeight={300}>
                          {exp.duration}
                        </Text>
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <Flex>
                        <List align="left" spacing={2}>
                          {exp.listItems.map((item, index) => (
                            <ListItem key={index}>
                              <ListIcon
                                boxSize={6}
                                as={ChevronRightIcon}
                                color={`${color}.500`}
                              />
                              {item}
                            </ListItem>
                          ))}
                        </List>
                      </Flex>
                    </CardBody>
                    <CardFooter>
                      <HStack spacing={2}>
                        {exp.badges.map((badge) => (
                          <Badge
                            key={badge.name}
                            colorScheme={badge.colorScheme}
                          >
                            {badge.name}
                          </Badge>
                        ))}
                      </HStack>
                    </CardFooter>
                  </Card>
                </Fade>
              ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

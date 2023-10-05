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
import './ResponsiveStyle.css'
import {options,experience} from '.././utils/Utils'



export default function Experience({ color }) {

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
              <Text className='fontFamily'  color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text  className='fontFamily' fontWeight={800}>Experience</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Center px={4}>
            <ButtonGroup variant="outline"  >
              {options.map((option) => (
                <Button
                className='fontFamily'
                id='experienceButton'
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
                          <Image src={exp.image} h={50}   id='experienceImage' />
                          <Box px={2} align="left">
                            <Text fontWeight={600} className='fontFamily'   id='smallText'>{exp.company}</Text>
                            <Text className='fontFamily' id='smallText'>{exp.position}</Text>
                          </Box>
                        </HStack>
                        <Text className='fontFamily' px={2} fontWeight={300}  id='xSmall'>
                          {exp.duration}
                        </Text>
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <Flex>
                        <List align="left" spacing={2}>
                          {exp.listItems.map((item, index) => (
                            <ListItem key={index} className='fontFamily' id='smallText'>
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

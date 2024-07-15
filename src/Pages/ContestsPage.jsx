import React from "react";
import { Box, Flex, Text, Heading, UnorderedList, ListItem, Button, Icon, Center } from "@chakra-ui/react";
import { FiBookmark, FiCheckCircle, FiClock, FiStar } from "react-icons/fi";

const ContestsPage = () => {
    return (
        <Center h="100vh">
            <Box p="0" bg="pink.40" width="100%" maxWidth="800px">
                {/* Detail Quiz Section */}
                <Box p="2rem" bg="pink.100" borderRadius="md" textAlign="center" mb="10px">
                    <Text fontSize="sm" fontWeight="bold" color="gray.700" mb="0.5rem">Detail Quiz</Text>
                    <Heading as="h2" size="lg" mb="0.5rem">Let's test your knowledge</Heading>
                    <Text fontSize="lg" color="gray.700">GET 100 Points🪙</Text>
                </Box>

                {/* Explanation Section */}
                <Box bg="white" p="2rem" boxShadow="md" borderRadius="20%" mt="0" textAlign="center">
                    <Text fontWeight="bold" fontSize="lg" mb="1rem">Brief explanation about this quiz</Text>
                    <Flex alignItems="center" mb="1rem">
                        <Icon as={FiBookmark} boxSize={6} />
                        <Text ml="0.5rem">5 Questions</Text>
                    </Flex>
                    <Flex alignItems="center" mb="1rem">
                        <Icon as={FiClock} boxSize={6} />
                        <Text ml="0.5rem">2 min</Text>
                    </Flex>
                    <Flex alignItems="center" mb="1rem">
                        <Icon as={FiStar} boxSize={6} />
                        <Text ml="0.5rem">Win 100 coins</Text>
                    </Flex>
                    <Text fontWeight="bold" mb="1rem" fontSize="lg" >
                        Please read the text below carefully so you can understand it:
                    </Text>
                    <UnorderedList mb="1rem" listStyleType="none">
                        <ListItem>
                            <Flex alignItems="center">
                                <Icon as={FiCheckCircle} boxSize={4} />
                                <Text ml="0.5rem">20 points awarded for a correct answer and no marks for an incorrect answer.</Text>
                            </Flex>
                        </ListItem>
                        <ListItem>
                            <Flex alignItems="center">
                                <Icon as={FiCheckCircle} boxSize={4} />
                                <Text ml="0.5rem">Tap on options to select the correct answer.</Text>
                            </Flex>
                        </ListItem>
                        <ListItem>
                            <Flex alignItems="center">
                                <Icon as={FiCheckCircle} boxSize={4} />
                                <Text ml="0.5rem">Tap on the bookmark icon to save interesting questions.</Text>
                            </Flex>
                        </ListItem>
                        <ListItem>
                            <Flex alignItems="center">
                                <Icon as={FiCheckCircle} boxSize={4} />
                                <Text ml="0.5rem">Click submit if you are sure you want to complete all the quizzes.</Text>
                            </Flex>
                        </ListItem>
                    </UnorderedList>
                </Box>

                {/* Continue Button */}
                <Box textAlign="center" p="1rem" mt="1rem">
                    <Button bg="pink.100" _hover={{ bg: "pink.300" }} size="lg">
                        Continue
                    </Button>
                </Box>
            </Box>
        </Center>
    );
};

export default ContestsPage;

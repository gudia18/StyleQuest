import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Heading, UnorderedList, ListItem, Button, Icon, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiBookmark, FiCheckCircle, FiClock, FiStar, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const ContestsPage = () => {
    // Mock leaderboard data (replace with actual data fetching logic)
    const [leaderboard, setLeaderboard] = useState([
        { user: "Alice", points: 500 },
        { user: "Bob", points: 450 },
        { user: "Charlie", points: 400 },
        { user: "David", points: 350 },
        { user: "Emma", points: 300 },
    ]);

    const [showLeaderboard, setShowLeaderboard] = useState(false);

    useEffect(() => {
        // You can fetch leaderboard data here from an API
        // Example:
        // fetchLeaderboardData().then(data => setLeaderboard(data));
    }, []);

    const toggleLeaderboard = () => {
        setShowLeaderboard(!showLeaderboard);
    };

    return (
        <Center h="100vh">
            <Box p="0" bg="pink.40" width="100%" maxWidth="800px" position="relative">
                {/* Leaderboard Section Toggle */}
                <Box position="absolute" top="1rem" right="1rem" zIndex="2">
                    <Heading as="h3" size="md" mb="1rem" textAlign="center" color="pink.700" cursor="pointer" onClick={toggleLeaderboard}>
                        Leaderboard
                        {showLeaderboard ? <Icon as={FiChevronUp} ml="0.5rem" /> : <Icon as={FiChevronDown} ml="0.5rem" />}
                    </Heading>
                </Box>

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
                    <Text fontWeight="bold" mb="1rem" fontSize="lg">
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
                <Link to="/quiz" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                    <Box textAlign="center" p="1rem" mt="1rem">
                        <Button bg="pink.100" _hover={{ bg: "pink.300" }} size="lg">
                            Continue
                        </Button>
                    </Box>
                </Link>
            </Box>

            {/* Leaderboard Content Section */}
            {showLeaderboard && (
                <Box position="absolute" top="4rem" right="1rem" zIndex="3" bg="white" p="1rem" boxShadow="md" borderRadius="md">
                    <Heading as="h3" size="md" mb="0.5rem" color="gray.700">Leaderboard</Heading>
                    {leaderboard.map((entry, index) => (
                        <Flex key={index} justifyContent="space-between" alignItems="center" mb="0.5rem">
                            <Text>{entry.user}</Text>
                            <Text fontWeight="bold">{entry.points} points</Text>
                        </Flex>
                    ))}
                </Box>
            )}
        </Center>
    );
};

export default ContestsPage;

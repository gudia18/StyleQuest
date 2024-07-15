import React from "react";
import { Box, Flex, Text, Heading, Button, Icon, Center } from "@chakra-ui/react";
import { FiClock, FiPercent, FiShoppingCart, FiTwitter, FiInstagram, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const SpendRushPage = () => {
    // Example countdown timer for demonstration
    const countdownTime = new Date();
    countdownTime.setDate(countdownTime.getDate() + 50); // Set countdown to 50 days from today

    // Mock data for discounted items
    const discountedItems = [
        { id: 1, name: "T-Shirt", price: 20, pointsRequired: 50 },
        { id: 2, name: "Shirt", price: 30, pointsRequired: 80 },
        { id: 3, name: "Dress", price: 50, pointsRequired: 100 },
        { id: 4, name: "Footwear", price: 40, pointsRequired: 70 }
    ];

    return (
        <Box bg="pink.200" minHeight="100vh" overflow="hidden">
            <Navbar />
            <Center py="4rem">
                <Box p="2rem" bg="pink.300" borderRadius="xl" width="90%" maxWidth="800px" boxShadow="lg">
                    {/* Title Section */}
                    <Box textAlign="center" mb="2rem">
                        <Text fontSize="2xl" fontWeight="bold" color="gray.700">Spend Rush</Text>
                        <Heading as="h2" size="xl" mb="1rem">Organize Flash Sales & Bundle Deals</Heading>
                        <Text fontSize="lg" color="gray.700" mb="1rem">Earn more points to redeem exclusive discounts!</Text>
                        {/* Countdown Timer */}
                        <Box bg="white" p="1rem" borderRadius="md" boxShadow="md">
                            <Flex alignItems="center">
                                <Icon as={FiClock} boxSize={6} color="pink.500" />
                                <Text ml="1rem" fontSize="lg">Countdown to Spend Rush:</Text>
                            </Flex>
                            {/* Replace with your own countdown timer component */}
                            <CountdownTimer countdownTime={countdownTime} />
                        </Box>
                    </Box>

                    {/* Points Redemption Section */}
                    <Box bg="white" p="2rem" boxShadow="md" borderRadius="xl" mb="2rem" textAlign="center">
                        <Heading as="h3" size="lg" mb="1rem">Redeem Points for Discounts</Heading>
                        <Flex alignItems="center" mb="1rem">
                            <Icon as={FiPercent} boxSize={6} color="pink.500" />
                            <Text ml="0.5rem">Use points to unlock additional discounts on flash sales</Text>
                        </Flex>
                        <Flex alignItems="center" mb="1rem">
                            <Icon as={FiShoppingCart} boxSize={6} color="pink.500" />
                            <Text ml="0.5rem">Redeem points for bundle deals at reduced prices</Text>
                        </Flex>
                    </Box>

                    {/* Call to Action */}
                    <Box bg="pink.300" p="2rem" borderRadius="xl" textAlign="center">
                        <Text fontSize="lg" color="gray.700" mb="1rem">Start earning points now to unlock these exclusive deals!</Text>
                        {/* Replace with a Link to navigate to your discounted items page */}
                        <Link to="/discounted-items">
                            <Button bg="pink.500" _hover={{ bg: "pink.600" }} size="lg">Shop Now</Button>
                        </Link>
                    </Box>

                    {/* Social Media Icons */}
                    <Flex justify="center" mt="2rem">
                        <Icon as={FiTwitter} boxSize={8} color="pink.500" cursor="pointer" mx="0.5rem" />
                        <Icon as={FiInstagram} boxSize={8} color="pink.500" cursor="pointer" mx="0.5rem" />
                    </Flex>
                </Box>
            </Center>
            <Footer />
        </Box>
    );
};

export default SpendRushPage;

// Countdown Timer Component
const CountdownTimer = ({ countdownTime }) => {
    const calculateTimeLeft = () => {
        let difference = countdownTime.getTime() - new Date().getTime();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <Box key={interval} mr="1rem">
                <Text fontSize="2xl" fontWeight="bold">{timeLeft[interval]}</Text>
                <Text>{interval}</Text>
            </Box>
        );
    });

    return (
        <Flex>{timerComponents.length ? timerComponents : <Text>Time's up!</Text>}</Flex>
    );
};

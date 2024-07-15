import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Heading, Button, Center } from "@chakra-ui/react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const DiscountedItemsPage = () => {
    const [discountedItems, setDiscountedItems] = useState([]);

    useEffect(() => {
        // Replace with actual API call to fetch discounted items
        fetchDiscountedItems();
    }, []);

    const fetchDiscountedItems = () => {
        // Example API endpoint to fetch discounted items
        // Replace with your actual API endpoint
        fetch("https://api.example.com/discounted-items")
            .then(response => response.json())
            .then(data => setDiscountedItems(data))
            .catch(error => console.error("Error fetching discounted items:", error));
    };

    const handleBuyNow = (item) => {
        // Handle the buy now action, such as adding to cart or checkout process
        console.log("Buying item:", item);
        // Implement your buy now logic here
    };

    return (
        <Box bg="pink.200" minHeight="100vh" overflow="hidden">
            <Navbar />
            <Center py="4rem">
                <Box p="2rem" bg="pink.300" borderRadius="xl" width="90%" maxWidth="800px" boxShadow="lg">
                    <Heading as="h2" textAlign="center" mb="2rem">Discounted Items</Heading>
                    <Flex flexWrap="wrap" justifyContent="center">
                        {discountedItems.map(item => (
                            <Box key={item.id} p="1rem" m="1rem" bg="white" borderRadius="lg" boxShadow="md" width="300px">
                                <Heading as="h3" size="md" mb="1rem">{item.name}</Heading>
                                <Text fontSize="lg" mb="1rem">{item.description}</Text>
                                <Text fontSize="xl" fontWeight="bold" mb="1rem">${item.price}</Text>
                                <Button bg="pink.500" _hover={{ bg: "pink.600" }} size="md" onClick={() => handleBuyNow(item)}>Buy Now</Button>
                            </Box>
                        ))}
                        {discountedItems.length === 0 && (
                            <Text>No discounted items available</Text>
                        )}
                    </Flex>
                </Box>
            </Center>
            <Footer />
        </Box>
    );
};

export default DiscountedItemsPage;

import React from 'react';
import { Box, Text, Flex, Image, Badge } from '@chakra-ui/react'; // Import necessary Chakra UI components

const RewardsPage = () => {
    return (
        <Box p="6">
            <Text fontSize="xl" fontWeight="bold" mb="4">
                Rewards
            </Text>
            <Flex justify="space-between" flexWrap="wrap">
                {/* Reward Item 1 */}
                <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m="2" bg="white" boxShadow="md" _hover={{ bg: 'gray.50' }}>
                    <Image src="#" alt="Reward 1" />
                    <Box p="3">
                        <Text fontWeight="bold" fontSize="lg" mb="2" color="teal.500">10% Discount Coupon</Text>
                        <Text fontSize="md" color="gray.600">Redeemable on your next purchase</Text>
                    </Box>
                </Box>

                {/* Reward Item 2 */}
                <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m="2" bg="white" boxShadow="md" _hover={{ bg: 'gray.50' }}>
                    <Image src="#" alt="Reward 2" />
                    <Box p="3">
                        <Text fontWeight="bold" fontSize="lg" mb="2" color="purple.500">Free Shipping</Text>
                        <Text fontSize="md" color="gray.600">No minimum purchase required</Text>
                    </Box>
                </Box>

                {/* Reward Item 3 */}
                <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m="2" bg="white" boxShadow="md" _hover={{ bg: 'gray.50' }}>
                    <Image src="#" alt="Reward 3" />
                    <Box p="3">
                        <Text fontWeight="bold" fontSize="lg" mb="2" color="blue.500">Exclusive Access</Text>
                        <Text fontSize="md" color="gray.600">Early access to new collections</Text>
                    </Box>
                </Box>

                {/* Reward Item 4 */}
                <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m="2" bg="white" boxShadow="md" _hover={{ bg: 'gray.50' }}>
                    <Image src="#" alt="Reward 4" />
                    <Box p="3">
                        <Text fontWeight="bold" fontSize="lg" mb="2" color="pink.500">Birthday Gift</Text>
                        <Text fontSize="md" color="gray.600">Special gift on your birthday</Text>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default RewardsPage;

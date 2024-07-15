import React, { useState } from 'react';
import { Box, Text, Button, Image } from '@chakra-ui/react';
import avatarImage from './bikini.jpg'; // Update with your actual image path
import dressImage from './bikini2 1.jpg';
import shirtImage from './bikini2.jpg';
import tShirtImage from './bikini2.jpg';

const LingerieMatchPage = () => {
    const [avatarImages, setAvatarImages] = useState([avatarImage, tShirtImage, shirtImage, dressImage]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to handle clicking on the "Try On" button
    const handleTryOnButtonClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) % avatarImages.length);
    };

    return (
        <Box p="6">
            <Text fontSize="xl" fontWeight="bold" mb="4">
                Lingerie Match
            </Text>
            <Box mt="4" p="4" bg="gray.100" borderRadius="md" textAlign="center">
   
                <Box
                    borderWidth="1px"
                    borderRadius="md"
                    p="4"
                    mb="4"
                    position="relative"
                    overflow="hidden"
                    width="300px"
                    height="500px"
                    bg="white"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    onClick={handleTryOnButtonClick} // Handle avatar click to change looks
                    cursor="pointer"
                >
                    <Image
                        src={avatarImages[currentImageIndex]}
                        alt="Avatar"
                        width="100%"
                        height="auto"
                        objectFit="contain"
                    />
                </Box>
                <Button
                    onClick={handleTryOnButtonClick}
                    bg="pink.500" // Background color
                    color="white" // Text color
                    _hover={{ bg: 'pink.600' }} // Hover background color
                    size="lg" // Larger button size
                >
                    Try On
                </Button>
            </Box>
        </Box>
    );
};

export default LingerieMatchPage;

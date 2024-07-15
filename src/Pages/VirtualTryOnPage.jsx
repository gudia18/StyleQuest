import React, { useState } from 'react';
import { Box, Text, Button, Image } from '@chakra-ui/react';
import avatarImage from './avatars.jpg'; // Update with your actual image path
import dressImage from './avatars1.jpg';
import shirtImage from './avatars2.jpg';
import tShirtImage from './avatars3.jpg';

const VirtualTryOnPage = () => {
    const [avatarImages, setAvatarImages] = useState([avatarImage, tShirtImage, shirtImage, dressImage]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to handle clicking on the "Try On" button
    const handleTryOnButtonClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) % avatarImages.length);
    };

    return (
        <Box p="6">
            <Box mt="4" p="4" bg="gray.100" borderRadius="md" textAlign="center">
                <Text mb="2" fontWeight="bold">
                    Virtual Try-On Avatar
                </Text>
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

export default VirtualTryOnPage;

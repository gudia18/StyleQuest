import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const StylePage = () => {
  return (
    <Box width="100%" border="0px solid red" margin="auto">
      <Navbar />
      <Box mb="4rem" width="100%" margin="auto" mt={100} border="0px solid black" padding="0 1rem">
        <Flex
          flexDirection="column"
          alignItems="center"
          m="auto"
          width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
          border="0px solid black"
          borderRadius="10px"
          overflow="hidden"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px rgba(0, 0, 0, 0.1)"
        >
          {/* Upper Row */}
          <Flex
            flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
            justifyContent="center"
            alignItems="center"
            width="100%"
            mb="2rem"
          >
            {/* Virtual Try-On Section */}
            <Link to="/virtual-try-on" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
              <Box
                flex="1"
                p="1.5rem"
                backgroundColor="#F9D1B7"
                borderRadius="10px"
                margin="1rem"
                minHeight="300px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                boxShadow="0px 8px 16px rgba(135, 206, 235, 1)"
                transition="box-shadow 0.3s, transform 0.3s"
                _hover={{
                  boxShadow: "0px 12px 24px rgba(108, 166, 205, 1)",
                  transform: "scale(1.05)",
                }}
              >
                <Text fontSize="1.2rem" fontWeight="bold" mb="1rem" textAlign="center">
                  Virtual Try-On
                </Text>
              </Box>
            </Link>

            {/* Lingerie Match Section */}
            <Link to="/lingerie-match" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
              <Box
                flex="1"
                p="1.5rem"
                backgroundColor="#F9D1B7"
                borderRadius="10px"
                margin="1rem"
                minHeight="300px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                boxShadow="0px 8px 16px rgba(135, 206, 235, 1)"
                transition="box-shadow 0.3s, transform 0.3s"
                _hover={{
                  boxShadow: "0px 12px 24px rgba(108, 166, 205, 1)",
                  transform: "scale(1.05)",
                }}
              >
                <Text fontSize="1.2rem" fontWeight="bold" mb="1rem" textAlign="center">
                  Lingerie Match
                </Text>
              </Box>
            </Link>

            {/* Community Hub Section */}
            <Link to="/community-hub" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
              <Box
                flex="1"
                p="1.5rem"
                backgroundColor="#F9D1B7"
                borderRadius="10px"
                margin="1rem"
                minHeight="300px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                boxShadow="0px 8px 16px rgba(135, 206, 235, 1)"
                transition="box-shadow 0.3s, transform 0.3s"
                _hover={{
                  boxShadow: "0px 12px 24px rgba(108, 166, 205, 1)",
                  transform: "scale(1.05)",
                }}
              >
                <Text fontSize="1.2rem" fontWeight="bold" mb="1rem" textAlign="center">
                  Community Hub
                </Text>
              </Box>
            </Link>
          </Flex>

          {/* Lower Row */}
          <Flex
            flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            {/* Contests and Rewards Section */}
            <Link to="/contests-rewards" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
              <Box
                flex="1"
                p="1.5rem"
                backgroundColor="#F9D1B7"
                borderRadius="10px"
                margin="1rem"
                minHeight="300px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                boxShadow="0px 8px 16px rgba(135, 206, 235, 1)"
                transition="box-shadow 0.3s, transform 0.3s"
                _hover={{
                  boxShadow: "0px 12px 24px rgba(108, 166, 205, 1)",
                  transform: "scale(1.05)",
                }}
              >
                <Text fontSize="1.2rem" fontWeight="bold" mb="1rem" textAlign="center">
                  Contests and Rewards
                </Text>
              </Box>
            </Link>

            {/* Spend Rush Section */}
            <Link to="/spend-rush" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
              <Box
                flex="1"
                p="1.5rem"
                backgroundColor="#F9D1B7"
                borderRadius="10px"
                margin="1rem"
                minHeight="300px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                boxShadow="0px 8px 16px rgba(135, 206, 235, 1)"
                transition="box-shadow 0.3s, transform 0.3s"
                _hover={{
                  boxShadow: "0px 12px 24px rgba(108, 166, 205, 1)",
                  transform: "scale(1.05)",
                }}
              >
                <Text fontSize="1.2rem" fontWeight="bold" mb="1rem" textAlign="center">
                  Spend Rush
                </Text>
              </Box>
            </Link>

            {/* Rewards Section */}
            <Link to="/rewards" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
              <Box
                flex="1"
                p="1.5rem"
                backgroundColor="#F9D1B7"
                borderRadius="10px"
                margin="1rem"
                minHeight="300px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                boxShadow="0px 8px 16px rgba(135, 206, 235, 1)"
                transition="box-shadow 0.3s, transform 0.3s"
                _hover={{
                  boxShadow: "0px 12px 24px rgba(108, 166, 205, 1)",
                  transform: "scale(1.05)",
                }}
              >
                <Text fontSize="1.2rem" fontWeight="bold" mb="1rem" textAlign="center">
                  Rewards 🏆
                </Text>
              </Box>
            </Link>
          </Flex>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default StylePage;

import React from "react";
import { Box, Flex,  Text, } from "@chakra-ui/react";

// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { fetchCartData } from "../Redux/Cart/Cart.action";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const StylePage = () => {
//   const dispatch = useDispatch();

//   const handleAddToWishlist = async () => {
//     try {
//       // Replace with actual API endpoint for wishlist
//       await axios.post(`https://vastra.onrender.com/WishList/`, {});
//       alert("Added to Wishlist Successfully....");
//     } catch (error) {
//       alert("Already Exists in Your Wishlist");
//     }
//   };

//   const handleAddToBag = async () => {
//     try {
//       // Replace with actual API endpoint for adding to cart
//       await axios.post(`https://vastra.onrender.com/cart/`, {});
//       alert("Added to Bag Successfully....");
//       dispatch(fetchCartData());
//     } catch (error) {
//       alert("Already Exists in Your Bag");
//     }
//   };

  return (
    <Box width="100%" border="0px solid red" margin="auto">
      <Navbar />
      <Box
        mb="4rem"
        width="100%"
        margin="auto"
        mt={100}
        border="0px solid black"
        padding="0 1rem"
      >
        <Flex
          flexDirection={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
          }}
          alignItems="flex-start"
          m="auto"
          width={{ base: "100%", sm: "100%", md: "70%", lg: "70%" }}
          border="0px solid black"
        >
          <Box
            w={{ base: "100%", sm: "100%", md: "45%", lg: "45%" }}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            m="auto"
            mt={0}
            border="0px solid red"
          >
            {/* AR/VR or Virtual Try-On Section */}
            
            <Box
              borderRadius={20}
              m="auto"
              w="100%"
              p="0.5rem"
              backgroundColor="gray.200"
              height="300px" 
            >
              Virtual Try-On Component
            </Box>
          </Box>

          <Flex
            flexDirection="column"
            justifyContent="space-between"
            w={{ base: "100%", sm: "100%", md: "55%", lg: "55%" }}
            m="auto"
            mt={0}
            p="0 1rem"
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            border="0px solid green"
          >
            {/* Lingerie Match Section */}
            <Box>
              <Text
                pt="1rem"
                textAlign="left"
                fontSize="1.2rem"
                fontWeight={500}
                color="gray.500"
                noOfLines={{ base: 1, sm: 1 }}
              >
                Lingerie Recommendations
              </Text>
              
              <Box
                p="1rem"
                backgroundColor="gray.100"
                mt="1rem"
                borderRadius="md"
                height="200px" 
              >
                Lingerie Match Component
              </Box>
            </Box>

            {/* Community Section */}
            <Box mt="2rem">
              <Text
                pt="1rem"
                textAlign="left"
                fontSize="1.2rem"
                fontWeight={500}
                color="gray.500"
                noOfLines={{ base: 1, sm: 1 }}
              >
                Community Hub
              </Text>
              
              <Box
                p="1rem"
                backgroundColor="gray.100"
                mt="1rem"
                borderRadius="md"
                height="300px" 
              >
                Community Component
              </Box>
            </Box>

            {/* Contests and Rewards Section */}
            <Box mt="2rem">
              <Text
                pt="1rem"
                textAlign="left"
                fontSize="1.2rem"
                fontWeight={500}
                color="gray.500"
                noOfLines={{ base: 1, sm: 1 }}
              >
                Contests and Rewards
              </Text>
             
              <Box
                p="1rem"
                backgroundColor="gray.100"
                mt="1rem"
                borderRadius="md"
                height="200px" 
              >
                Contests and Rewards Component
              </Box>
            </Box>

            {/* Spend Rush Section */}
            <Box mt="2rem">
              <Text
                pt="1rem"
                textAlign="left"
                fontSize="1.2rem"
                fontWeight={500}
                color="gray.500"
                noOfLines={{ base: 1, sm: 1 }}
              >
                Spend Rush
              </Text>
              
              <Box
                p="1rem"
                backgroundColor="gray.100"
                mt="1rem"
                borderRadius="md"
                height="200px" 
              >
                Spend Rush Component
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default StylePage;

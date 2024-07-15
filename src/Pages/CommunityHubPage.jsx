import React, { useState, useEffect } from "react";
import {
    Box,
    Flex,
    Text,
    Heading,
    VStack,
    Button,
    Input,
    Textarea,
    Image,
    Spacer,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, SettingsIcon } from "@chakra-ui/icons";
import Navbar from "../Components/Navbar/Navbar";


const CommunityHubPage = () => {
    // Initialize posts state with localStorage fallback
    const [posts, setPosts] = useState(() => {
        const storedPosts = localStorage.getItem("communityPosts");
        return storedPosts ? JSON.parse(storedPosts) : [];
    });

    // Use useEffect to update localStorage on posts change
    useEffect(() => {
        localStorage.setItem("communityPosts", JSON.stringify(posts));
    }, [posts]);

    // State for new post input
    const [newPostContent, setNewPostContent] = useState("");
    const [newPostImage, setNewPostImage] = useState(null);

    // Function to add a new post
    const addPost = () => {
        if (newPostContent.trim() !== "" || newPostImage) {
            const newPost = {
                id: posts.length + 1,
                content: newPostContent,
                image: newPostImage,
                likes: 0,
                comments: [],
            };
            setPosts([...posts, newPost]);
            setNewPostContent(""); // Clear input after adding post
            setNewPostImage(null); // Clear image after adding post
        }
    };

    // Function to add a new comment to a post
    const addComment = (postId, commentText) => {
        const updatedPosts = posts.map((post) => {
            if (post.id === postId) {
                return {
                    ...post,
                    comments: [...post.comments, commentText],
                };
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    // Function to handle liking a post
    const handleLike = (postId) => {
        const updatedPosts = posts.map((post) => {
            if (post.id === postId) {
                return {
                    ...post,
                    likes: post.likes + 1,
                };
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    // Function to edit a post
    const editPost = (postId, newContent) => {
        const updatedPosts = posts.map((post) => {
            if (post.id === postId) {
                return {
                    ...post,
                    content: newContent,
                };
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    // Function to delete a post
    const deletePost = (postId) => {
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
    };

    return (
        <Box width="100%" margin="auto">
            <Navbar />
            <Box mb="4rem" width="100%" margin="auto" mt={100} padding="0 1rem" maxWidth="800px">
                {/* Add Post Section */}
                <Flex flexDirection="column" alignItems="center" width="100%" mb="2rem">
                    <Heading as="h1" mb="2rem" color="pink.700" textAlign="center">
                        Community
                    </Heading>
                    <Box
                        width="100%"
                        border="1px solid #ccc"
                        borderRadius="10px"
                        padding="1rem"
                        boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
                    >
                        <Textarea
                            value={newPostContent}
                            onChange={(e) => setNewPostContent(e.target.value)}
                            placeholder="What's on your mind?"
                            size="sm"
                            mb="1rem"
                        />
                        <Flex align="center" mb="1rem">
                            <Input
                                type="file"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                            setNewPostImage(reader.result);
                                        };
                                        reader.readAsDataURL(file);
                                    }
                                }}
                                display="none"
                                id="file-upload"
                            />
                            <label htmlFor="file-upload">
                                <Button as="span" colorScheme="pink" size="sm" variant="solid" mr="1rem">
                                    Upload Image
                                </Button>
                            </label>
                            {newPostImage && (
                                <Image
                                    src={newPostImage}
                                    alt="Uploaded"
                                    boxSize="50px"
                                    objectFit="cover"
                                    borderRadius="5px"
                                    mr="1rem"
                                />
                            )}
                            <Spacer />
                            <Button onClick={addPost} colorScheme="pink" size="sm" variant="solid">
                                Post
                            </Button>
                        </Flex>
                    </Box>
                </Flex>

                {/* Display Posts */}
                <VStack width="100%" spacing="2rem" align="center">
                    {posts.map((post) => (
                        <Box
                            key={post.id}
                            p="1rem"
                            backgroundColor="#F9D1B7"
                            borderRadius="10px"
                            width="100%"
                            maxWidth="800px"
                            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
                            transition="box-shadow 0.3s, transform 0.3s"
                            _hover={{
                                boxShadow: "0px 8px 16px rgba(108, 166, 205, 0.8)",
                                transform: "scale(1.02)",
                            }}
                        >
                            {/* Post Actions */}
                            <Flex justifyContent="space-between" alignItems="center" mb="0.5rem">
                                <Menu>
                                    <MenuButton
                                        as={IconButton}
                                        aria-label="Options"
                                        icon={<SettingsIcon />}
                                        variant="ghost"
                                        size="sm"
                                    />
                                    <MenuList>
                                        <MenuItem
                                            icon={<EditIcon />}
                                            onClick={() => {
                                                const newContent = prompt("Enter new content:");
                                                if (newContent) {
                                                    editPost(post.id, newContent);
                                                }
                                            }}
                                        >
                                            Edit Post
                                        </MenuItem>
                                        <MenuItem
                                            icon={<DeleteIcon />}
                                            onClick={() => deletePost(post.id)}
                                        >
                                            Delete Post
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </Flex>
                            {/* Post Content */}
                            <Text fontSize="1rem" mb="1rem" textAlign="center">
                                {post.content}
                            </Text>
                            {/* Post Image */}
                            {post.image && (
                                <Box mb="1rem" textAlign="center">
                                    <Image src={post.image} alt="Post" maxW="100%" borderRadius="10px" />
                                </Box>
                            )}
                            {/* Actions */}
                            <Flex justifyContent="space-between" alignItems="center">
                                {/* Likes */}
                                <Button
                                    onClick={() => handleLike(post.id)}
                                    colorScheme="pink"
                                    variant="outline"
                                    size="sm"
                                    mr="0.5rem"
                                >
                                    Like ({post.likes})
                                </Button>
                                {/* Comments */}
                                <Flex flexDirection="column" alignItems="flex-start" flex="1">
                                    {post.comments.length > 0 && (
                                        <Box mb="1rem" width="100%">
                                            <Text fontSize="1rem" mb="0.5rem" fontWeight="bold">
                                                Comments:
                                            </Text>
                                            {post.comments.map((comment, index) => (
                                                <Text key={index} fontSize="1rem" mb="0.5rem">
                                                    {comment}
                                                </Text>
                                            ))}
                                        </Box>
                                    )}
                                    {/* Comment Input */}
                                    <Input
                                        placeholder="Add a comment..."
                                        size="sm"
                                        onKeyPress={(e) => {
                                            if (e.key === "Enter" && e.target.value.trim() !== "") {
                                                addComment(post.id, e.target.value.trim());
                                                e.target.value = ""; // Clear input after adding comment
                                            }
                                        }}
                                    />
                                </Flex>
                            </Flex>
                        </Box>
                    ))}
                </VStack>
            </Box>
           
        </Box>
    );
};

export default CommunityHubPage;

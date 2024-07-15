import React, { useState } from 'react';
import { Box, Button, Heading, Text, VStack, Radio, RadioGroup, Stack, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const quizData = [
  {
    theme: "Summer Look",
    questions: [
      { question: "What is the most popular summer outfit in 2024?", options: ["Sundress", "Shorts and T-shirt", "Beachwear", "Linen Suit"], correct: "Sundress" },
      { question: "Which color is trending for summer 2024?", options: ["Yellow", "Blue", "Green", "Pink"], correct: "Yellow" },
    ],
  },
  {
    theme: "Festival Outfits",
    questions: [
      { question: "What is the most popular festival outfit in 2024?", options: ["Sari", "Lehenga", "Kurta Pajama", "Anarkali"], correct: "Lehenga" },
      { question: "Which accessory is essential for a festive look?", options: ["Earrings", "Bracelet", "Necklace", "Ring"], correct: "Necklace" },
    ],
  },
];

const Quiz = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuizSelect = (index) => {
    setSelectedQuiz(index);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const handleAnswerChange = (questionIndex, answer) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
  };

  const handleSubmit = () => {
    const correctAnswers = quizData[selectedQuiz].questions.filter(
      (q, index) => q.correct === selectedAnswers[index]
    ).length;
    setScore(correctAnswers);
    setShowResults(true);
  };

  return (
    <Center h="100vh" p="2rem" bg="pink.50">
      <Box width="100%" maxWidth="800px" p="2rem" bg="white" boxShadow="lg" borderRadius="md">
        {!showResults ? (
          <>
            <Heading as="h1" mb="2rem" color="pink.700" textAlign="center">
              {selectedQuiz === null ? "Select a Quiz Theme" : quizData[selectedQuiz].theme}
            </Heading>
            {selectedQuiz === null ? (
              <VStack spacing="1rem">
                {quizData.map((quiz, index) => (
                  <Button key={index} onClick={() => handleQuizSelect(index)} colorScheme="pink" size="lg">
                    {quiz.theme}
                  </Button>
                ))}
              </VStack>
            ) : (
              <VStack spacing="1rem">
                {quizData[selectedQuiz].questions.map((q, index) => (
                  <Box key={index} p="1rem" bg="pink.100" borderRadius="md" w="100%">
                    <Text mb="1rem">{q.question}</Text>
                    <RadioGroup onChange={(value) => handleAnswerChange(index, value)}>
                      <Stack direction="column">
                        {q.options.map((option, i) => (
                          <Radio key={i} value={option}>
                            {option}
                          </Radio>
                        ))}
                      </Stack>
                    </RadioGroup>
                  </Box>
                ))}
                <Button colorScheme="pink" size="lg" onClick={handleSubmit}>
                  Submit
                </Button>
              </VStack>
            )}
          </>
        ) : (
          <Box textAlign="center">
            <Heading as="h2" mb="1rem" color="pink.700">
              Results
            </Heading>
            <Text fontSize="lg" mb="2rem">
              You scored {score} out of {quizData[selectedQuiz].questions.length}
            </Text>
            <Link to="/">
              <Button colorScheme="pink" size="lg">
                Back to Home
              </Button>
            </Link>
          </Box>
        )}
      </Box>
    </Center>
  );
};

export default Quiz;

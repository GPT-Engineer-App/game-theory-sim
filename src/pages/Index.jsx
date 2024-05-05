import { Box, Flex, Heading, Text, Input, Button, VStack, useBreakpointValue, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleSimulation = () => {
    console.log("Simulate game theory scenario");
  };

  return (
    <Flex direction="column" align="center" w="full" minH="100vh" p={4} bg="gray.50">
      <Box as="nav" w="full" bg="blue.800" p={4}>
        <Flex justify="space-between" align="center" maxW="1200px" m="0 auto">
          <Heading size="lg" color="white">Game Theory Simulator</Heading>
          <Flex>
            <Menu>
              <MenuButton as={Button} colorScheme="teal" mr={2}>
                Concepts
              </MenuButton>
              <MenuList>
                <MenuItem>Introduction to Game Theory</MenuItem>
                <MenuItem>Nash Equilibrium</MenuItem>
                <MenuItem>Prisoner's Dilemma</MenuItem>
                <MenuItem>Zero-sum Games</MenuItem>
              </MenuList>
            </Menu>
            <Button colorScheme="teal">Simulations</Button>
          </Flex>
        </Flex>
      </Box>
      <Flex direction="column" align="center" justify="center" flex="1" p={4}>
        <Heading mb={4}>Interactive Game Theory Simulator</Heading>
        <Text fontSize="lg" mb={6}>Explore various game theory scenarios by adjusting the parameters below and observing the outcomes.</Text>
        <VStack spacing={4} w={isMobile ? "full" : "md"}>
          <Input placeholder="Enter number of players" />
          <Input placeholder="Enter initial strategy" />
          <Button rightIcon={<FaPlay />} colorScheme="blue" onClick={handleSimulation}>
            Simulate
          </Button>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Index;
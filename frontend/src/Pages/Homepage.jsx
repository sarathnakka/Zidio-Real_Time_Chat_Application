import React from 'react';
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup';
import { Container, Box, Text ,Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react';



const Homepage = () => {
  return (
    <div className="App" style={{ position: 'absolute', top: '20px', right: '100px' }}> 
      <Container maxW="xl" centerContent>
        <Box
          display='flex'
          justifyContent='center'
          p={3}
          bg="white"
          margin="40px 0 15px 0"
          width="500px"  // Adjust the width directly here
          borderRadius="10px" 
          borderWidth="1px"
          backgroundColor="#153448"
          
        >

          <Text fontSize="4xl" fontFamily="Work sans" color={'white'}>Talkify</Text>
        </Box>
        <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        backgroundColor='#DFF5FF'
      >
    <Tabs variant='soft-rounded' colorScheme='blue'>
  <TabList mb='1em'>
    <Tab width="50%" >Login</Tab>
    <Tab width="50%" >Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
   <Login/>
    </TabPanel>
    <TabPanel>
    <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
      </Container>
    </div>
  );
};

export default Homepage;

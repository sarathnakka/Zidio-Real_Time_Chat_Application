import React from "react";
import {Container, Box, Text, Tab, TabList, TabPanel,TabPanels, Tabs,} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";


const Homepage = () => {

  const history = useHistory();

  useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      setUser(user);
      if (!user) {
          history.push("/charts");
      }

  },[history]);

  return <Container maxW="xl" centerContent>
  <Box
  d="flex"
  justifyContent="center"
  p={3}
  bg="white"
  w="100%"
  m="40px 0 15px 0"
  borderRadius="lg"
  borderWidth="1px">
  <Text fontSize="4xl" fontFamily="Work sans">Zidio Chat Application  </Text>
  </Box>
  <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
  <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel> <Login /> </TabPanel>
            <TabPanel> <Signup /> </TabPanel>
          </TabPanels>
        </Tabs>
  </Box>
  </Container>;
};

export default Homepage;

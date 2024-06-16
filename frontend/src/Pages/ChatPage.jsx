import {Box} from "@chakra-ui/layout";
import {ChatState} from "../Context/ChatProvider";
import MyChats from "../components/MyCharts";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import Chatbox from "../components/ChatBox";

const Chatpage = () => {
  const {user} = ChatState();

  return <div style={{ width: '100%'}}>
  {user && <SideDrawer/>}
  <Box>
      {user && <MyChats/>}
      {user && <Chatbox/>}
  </Box>
  </div>
   
  
};

export default Chatpage;

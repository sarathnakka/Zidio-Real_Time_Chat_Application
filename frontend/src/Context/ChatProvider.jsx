import { createContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
const ChatContext = createContext();

const ChatProvider = ({children}) => {
    const [user, setUser] = useState();

    const history = useHistory();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setUser(user);
        if (!user) {
            history.push("/");
        }

    },[history]);


    return (
        <ChatContext.Provider value={{user, setUser}}>
        {childer}
        </ChatContext.Provider>
    );
};

export const ChatState = () => {
    return useContext(ChatProvider);
};

export default ChatProvider;
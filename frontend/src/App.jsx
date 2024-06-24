import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/chats" component={Chatpage} />
        </Switch>
      </Route>
    </div>
  );
}

export default App;

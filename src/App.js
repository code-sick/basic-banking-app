import "./App.css";
import Home from "./Pages/home";
import Costumers from "./Pages/costumers";
import Navigation from "./Components/navigation";
import TransitionHistory from "./Pages/transition";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/costumers" component={Costumers} />
          <Route path="/transitions" component={TransitionHistory} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

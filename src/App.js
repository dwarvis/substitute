import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// page imports
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

// Component Imports

function App(props) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

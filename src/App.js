import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// page imports
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"

// Component Imports
import { Text } from "@geist-ui/react"

function App() {
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Text h1>
            Substitute
          </Text>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
        </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;

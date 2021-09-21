
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './containers/Header';
import PermitListing from "./containers/PermitListing";
import PermitDetails from "./containers/PermitDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={PermitListing} />
          <Route path="/permit/:permitId" component={PermitDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

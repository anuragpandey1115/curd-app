import './App.css';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";

import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import User from "./components/User";


function App(props) {

 
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Switch>
        <Route exact path="/" component={Navbar} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/AddUser" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;


import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logOutAction from "./redux/actions/logout_action";
import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home";
import Profile from "./components/profile";

function App() {
  const dispatch = useDispatch();
  const { loginMessage: connectedUserInfo } = useSelector((state) => state);
  console.log("connectedUserInfo:", connectedUserInfo);
  return (
    <Router>
      <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/home">MyApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {connectedUserInfo ? (
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/profile">MyProfile</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link
                  href="/login"
                  onClick={() => dispatch(logOutAction())}
                >
                  LogOut
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          ) : (
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/login">LogIn</Nav.Link>
                <Nav.Link href="/signup">SignUp</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          )}
        </Navbar>
      </div>

      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;

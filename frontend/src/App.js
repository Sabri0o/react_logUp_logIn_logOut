import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import logOutAction from "./redux/actions/logout_action";
import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home";
import Profile from "./components/profile";
import UserBoard from "./components/userBoard";
import AdminBoard from "./components/admin/adminBoard";
import ShowAllSupervisors from "./components/admin/showAllSupervisors";
import ShowAllUsersForAdmin from "./components/admin/showAllUsersForAdmin";
import ShowAllUsersForSupervisor from "./components/supervisor/showAllUsersForSupervisor";
import SupervisorBoard from "./components/supervisor/supervisorBoard";
import UpdateFrofile from "./components/updateProfile";

function App() {
  const [admin, setAdmin] = useState(false);
  const [supervisor, setSupervisor] = useState(false);
  const dispatch = useDispatch();
  const { loginMessage: connectedUserInfo } = useSelector((state) => state);
  useEffect(() => {
    if (
      connectedUserInfo !== null &&
      connectedUserInfo.hasOwnProperty("roles")
    ) {
      setAdmin(connectedUserInfo.roles.includes("ROLE_ADMIN"));
      setSupervisor(
        connectedUserInfo.roles.includes("ROLE_SUPERVISOR") &&
          !connectedUserInfo.roles.includes("ROLE_ADMIN")
      );
    }
  }, [connectedUserInfo]);
  return (
    <Router>
      <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/home">MyApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {connectedUserInfo ? (
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/userBoard">User Board</Nav.Link>
                {admin && (
                  <Nav>
                    <Nav.Link href="/adminBoard">Admin Board</Nav.Link>{" "}
                    <Nav.Link href="/supervisorBoard">
                      Supervisor Board
                    </Nav.Link>
                  </Nav>
                )}
                {supervisor && (
                  <Nav.Link href="/supervisorBoard">Supervisor Board</Nav.Link>
                )}
              </Nav>
              <Nav>
                <Nav.Link href="/profile">MyProfile</Nav.Link>;
                <NavDropdown alignRight title="Menu" id="nav-dropdown">
                  {admin && (
                    <NavDropdown.Item href="/showAllUsersForAdmin">
                      Show all users
                    </NavDropdown.Item>
                  )}
                  {admin && (
                    <NavDropdown.Item href="/showAllSupervisors">
                      Show all supervisors
                    </NavDropdown.Item>
                  )}

                  {supervisor && (
                    <NavDropdown.Item href="/showAllUsersForSupervisor">
                      Show all users
                    </NavDropdown.Item>
                  )}
                  <NavDropdown.Item href="/updateProfile">
                    Update profile
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/login"
                    onClick={() => dispatch(logOutAction())}
                  >
                    LogOut{" "}
                  </NavDropdown.Item>
                </NavDropdown>
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
        <Route exact path={["/", "/home"]} component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/userBoard" component={UserBoard} />
        <Route exact path="/adminBoard" component={AdminBoard} />
        <Route
          exact
          path="/showAllSupervisors"
          component={ShowAllSupervisors}
        />
        <Route
          exact
          path="/showAllUsersForAdmin"
          component={ShowAllUsersForAdmin}
        />
        <Route exact path="/supervisorBoard" component={SupervisorBoard} />
        <Route
          exact
          path="/showAllUsersForSupervisor"
          component={ShowAllUsersForSupervisor}
        />

        <Route exact path="/supervisorBoard" component={SupervisorBoard} />
        <Route exact path="/updateProfile" component={UpdateFrofile} />
      </Switch>
    </Router>
  );
}

export default App;

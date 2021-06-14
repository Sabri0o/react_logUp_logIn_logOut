import React from "react";
import { Redirect } from "react-router";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginAsyncAction } from "../redux/actions/login_action";

export default function Login() {
  const _isMounted = useRef(true); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { loginStatus, loginMessage } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleEmailOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    return () => {
      _isMounted.current = false;
    };
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (_isMounted.current) {
      dispatch(loginAsyncAction(email, password)).then(() => {
        setLoading(false);
      });
    }
  };

  console.log(loginStatus, loginMessage);
  if (loginStatus) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <h3>LogIn form</h3>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleEmailOnChange}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handlePasswordOnChange}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading}>
          {loading && (
            <span className="spinner-border spinner-border-sm"></span>
          )}
          <span>Login</span>
        </Button>
        {!loginStatus && <div>{loginMessage}</div>}
      </Form>
    </div>
  );
}

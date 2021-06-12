import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerAsyncAction } from "../redux/actions/actions";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);
  };

  const handleOnSubmit = (e, email, password) => {
    e.preventDefault();
    dispatch(registerAsyncAction(email, password));
  };

  const { registrationStatus, registrationMessage } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  return registrationStatus === false ? (
    <div>
      <h3>SignUp form</h3>
      <Form onSubmit={(e) => handleOnSubmit(e, email, password)}>
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
        <Button type="submit" variant="primary">
          Register
        </Button>
      </Form>
      {!registrationStatus && <div>{registrationMessage}</div>}
    </div>
  ) : (
    <div>{registrationMessage}</div>
  );
}

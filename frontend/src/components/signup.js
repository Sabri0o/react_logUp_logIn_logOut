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

  const handleOnClick = (email, password) => {
    console.log("email:", email);
    console.log("password:", password);
    dispatch(registerAsyncAction(email, password))
      .then((data) => console.log("welcome", data))
      .catch((err) => console.log(err.message));
  };

  const signUpDone = useSelector((state) => state.signUpDone);
  const dispatch = useDispatch();
  console.log("signUpDone:", signUpDone);

  return (
    <div>
      SignUp
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleEmailOnChange}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handlePasswordOnChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button
          onClick={() => handleOnClick(email, password)}
          variant="primary"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
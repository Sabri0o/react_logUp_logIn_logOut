import React from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfileAsyncAction } from "../redux/actions/updateProfile_action";

export default function UpdateFrofile() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const _isMounted = useRef(true);

  const handleEmailOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnSubmit = (e, email) => {
    setLoading(true);
    e.preventDefault();
    if (_isMounted) {
      dispatch(updateProfileAsyncAction(email)).then(() => setLoading(false));
    }
  };

  useEffect(() => {
    return () => {
      _isMounted.current = false;
    };
  });

  const { updateProfileStatus, updateProfileMessage } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  if (updateProfileStatus) {
    return <Redirect to="/profile" />;
  }

  console.log(updateProfileStatus, updateProfileMessage)

  return (
    <div>
      <h3>Update info form</h3>
      <Form onSubmit={(e) => handleOnSubmit(e, email)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleEmailOnChange}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary" disabled={loading}>
          {loading && (
            <span className="spinner-border spinner-border-sm"></span>
          )}
          <span>Update</span>
        </Button>
      </Form>
      {!updateProfileStatus && <div>{updateProfileMessage}</div>}
    </div>
  );
}

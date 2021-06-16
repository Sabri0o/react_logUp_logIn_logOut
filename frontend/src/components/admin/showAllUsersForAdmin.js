import React from "react";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { getAllUsers, addSupervisor } from "../../services/adminService";

export default function ShowAllUsersForAdmin() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then((response) => {
        setAllUsers(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return (
    <div>
      <h2>All users</h2>

      {allUsers.length === 0 ? (
        <div className="container">No users yet</div>
      ) : (
        <div className="container">
          {allUsers.map((user, index) => {
            return (
              <Card key={index}>
                <Card.Header>{user.email}</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button
                    onClick={() => addSupervisor(user.email)}
                    variant="primary"
                  >
                    Add Supervisor
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}

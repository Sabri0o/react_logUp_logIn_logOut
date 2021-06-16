import React from "react";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { getAllUsers } from "../../services/adminService";

export default function ShowAllUsersForSupervisor() {
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
                </Card.Body>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}

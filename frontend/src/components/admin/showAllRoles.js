import React from "react";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { getAllRoles } from "../../services/adminService";

export default function ShowAllRolesForAdmin() {
  const [allRoles, setAllRoles] = useState([]);

  useEffect(() => {
    getAllRoles()
      .then((response) => {
        setAllRoles(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return (
    <div>
      <h2>All Roles</h2>

      {allRoles.length === 0 ? (
        <div className="container">Loading...</div>
      ) : (
        <div className="container">
          {allRoles.map((user, index) => {
            return (
              <Card key={index}>
                <Card.Header>{user.email}</Card.Header>
                <Card.Body>
                  <Card.Title>{user.roles.join(' ')}</Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}

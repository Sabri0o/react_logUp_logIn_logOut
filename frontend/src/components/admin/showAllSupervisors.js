import React from "react";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import {
  getAllSupervisors,
  removeSupervisor,
} from "../../services/adminService";

export default function ShowAllSupervisors() {
  const [allSupervisors, setAllSupervisors] = useState([]);

  useEffect(() => {
    getAllSupervisors()
      .then((response) => {
        setAllSupervisors(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return (
    <div>
      <h2>All supervisors</h2>
      {allSupervisors.length === 0 ? (
        <div className="container">No supervisors yet</div>
      ) : (
        <div className="container">
          {allSupervisors.map((supervisor, index) => {
            return (
              <Card key={index}>
                <Card.Header>{supervisor.email}</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button
                    onClick={() => removeSupervisor(supervisor.email)}
                    variant="primary"
                  >
                    Remove Supervisor
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

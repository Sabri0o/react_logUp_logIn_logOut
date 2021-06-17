import React from "react";
import { useState, useEffect } from "react";
import { showSupervisorContent } from "../../services/supervisorService";

export default function SupervisorBoard() {
  const [content, setContent] = useState("");

  useEffect(() => {
    showSupervisorContent()
      .then((response) => {
        setContent(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return (
    <div>
      <h2>welcome to the supervisor Board</h2>
      <h4>{content}</h4>
    </div>
  );
}

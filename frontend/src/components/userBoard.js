
import React from "react";
import { useState, useEffect } from "react";
import { showUserContent } from "../services/userService";

export default function UserBoard() {
  const [content, setContent] = useState("");

  useEffect(() => {
    showUserContent()
      .then((response) => {
        setContent(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return (
    <div>
      <h2>welcome to the User Board</h2>
      <h4>{content}</h4>
    </div>
  );
}

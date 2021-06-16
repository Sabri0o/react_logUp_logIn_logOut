import React from "react";
import { useState, useEffect } from "react";
import { showAdminContent } from "../../services/adminService";

export default function AdminBoard() {
  const [content, setContent] = useState("");

  useEffect(() => {
    showAdminContent()
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

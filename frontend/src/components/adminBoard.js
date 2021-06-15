import React from "react";
import { useState, useEffect } from "react";
import { showAdminContent, showAllUsers } from "../services/adminService";

export default function AdminBoard() {
  const [content, setContent] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    showAdminContent()
      .then((response) => {
        setContent(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  const showUsersInfo = () => {
    showAllUsers()
      .then((response) => {
        setAllUsers(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <h3>{content}</h3>
      <button onClick={showUsersInfo}>show all users</button>
      <ul>
        {allUsers.map((user, index) => {
          return <li key={index}>{user.email}</li>;
        })}
      </ul>
    </div>
  );
}

import React from "react";
import { useSelector } from "react-redux";
export default function Profile() {
  const { loginMessage } = useSelector((state) => state);
  console.log('loginMessage',loginMessage);
  return (
    <div>
      <h3>User Information</h3>
      <p>
        <strong>Email :</strong>
        {loginMessage.email}
      </p>
        <strong>Roles :</strong>
        <ul>
          {loginMessage.roles.map((role, index) => {
            return <li key={index}>{role}</li>;
          })}
        </ul>
    </div>
  );
}

import { useSelector } from "react-redux";

export default function Profile() {
  const { updateProfileStatus, loginMessage } = useSelector((state) => state);

  return (
    <div>
      {updateProfileStatus && <p>Your profile has been updated successfully</p>}
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

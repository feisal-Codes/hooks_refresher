import { useReducer } from "react";

const firstUser = {
  id: "0391-3233-3201",
  firstName: "Bill",
  lastName: "Wilson",
  city: "Missoula",
  state: "Montana",
  email: "bwilson@mtnwilsons.com",
  admin: false
};

const User = () => {
  const [user, setUser] = useReducer(
    (user, newDetails) => ({ ...user, ...newDetails }),
    firstUser
  );

  const onClick = () => {
    setUser({ admin: true });
  };
  const revoke = () => {
    setUser({ admin: false });
  };

  return (
    <>
      <h2>{user.firstName}</h2>
      <p>{user.admin.toString()}</p>
      <button onClick={onClick}>make user an admin</button>
      <button onClick={revoke}>Revoke admin</button>
    </>
  );
};

export default User;

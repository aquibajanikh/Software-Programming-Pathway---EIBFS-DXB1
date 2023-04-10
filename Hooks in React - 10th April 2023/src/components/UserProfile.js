import { useEffect, useState } from "react";

function UserProfile() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setUser(data.results));
  }, []);

  return (
    <>
      <img src={user[0].picture.medium} />
      <h1>{user[0].name.first}</h1>
      <h2>{user[0].email}</h2>
      <h3>{user[0].login.username}</h3>
      <h4>{user[0].login.password}</h4>
    </>
  );
}

export default UserProfile;

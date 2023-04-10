import { useEffect, useState } from "react";
import "./AllUsers.css";

function AllUsers() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);
  return (
    <>
      <section id="allUsers">
        {allUsers.map((user) => (
          <div className="individual-user">
            <h4>{user.name}</h4>
            <h4>{user.email}</h4>
          </div>
        ))}
      </section>
    </>
  );
}

export default AllUsers;

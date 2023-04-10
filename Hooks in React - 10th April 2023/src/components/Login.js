import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <form>
        <div>
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            placeholder="Your username"
          />
        </div>
        <div>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            placeholder="Your password"
          />
        </div>
        <input
          onClick={(e) => {
            e.preventDefault();
            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ username: username, password: password }),
            };
            fetch(
              "https://crudcrud.com/api/69485e86dcd547a09b631f5db25de4cf/users",
              requestOptions
            );
            setIsLoggedIn(true);
          }}
          type="submit"
          value="Login"
        />
      </form>
      {isLoggedIn ? (
        <h1>
          Your name is {username} and your password is {password}
        </h1>
      ) : null}
    </>
  );
}

export default Login;

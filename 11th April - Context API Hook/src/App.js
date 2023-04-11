import { useState } from "react";
import ThemeContext from "./context/ThemeContext";
import Button from "./components/Button";
import Container from "./components/Container";
import AuthContext from "./context/AuthContext";
import LoginButton from "./components/LoginButton";

export default function App() {
  const [theme, setTheme] = useState("white");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <AuthContext.Provider value={isLoggedIn}>
        <ThemeContext.Provider value={theme}>
          <Button setTheme={setTheme} />
          <LoginButton setIsLoggedIn={setIsLoggedIn} />
          {isLoggedIn === false ? <h1>Please login</h1> : <Container />}
        </ThemeContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

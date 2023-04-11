import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import AuthContext from "../context/AuthContext";

function LoginButton(props) {
  const theme = useContext(ThemeContext);
  const isLoggedIn = useContext(AuthContext);
  const textColor = theme === "white" ? "black" : "white";

  return (
    <>
      <button
        style={{
          background: theme,
          color: textColor,
          border: `1px solid ${textColor}`,
          borderRadius: 8,
        }}
        onClick={() => {
          isLoggedIn === false
            ? props.setIsLoggedIn(true)
            : props.setIsLoggedIn(false);
        }}
      >
        {isLoggedIn ? "Sign Out" : "Login"}
      </button>
    </>
  );
}

export default LoginButton;

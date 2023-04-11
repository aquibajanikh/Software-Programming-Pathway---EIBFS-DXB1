import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Button(props) {
  const theme = useContext(ThemeContext);
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
          theme === "white" ? props.setTheme("black") : props.setTheme("white");
        }}
      >
        Click to change theme
      </button>
    </>
  );
}

export default Button;

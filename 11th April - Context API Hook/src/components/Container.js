import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Container() {
  const theme = useContext(ThemeContext);
  const textColor = theme === "white" ? "black" : "white";

  return (
    <>
      <div
        style={{
          backgroundColor: theme,
          color: textColor,
        }}
      >
        <h2>This is some heading</h2>
        <p>
          Nisi adipisicing laborum consequat aliqua anim in ad amet sint esse eu
          sint consequat est. Fugiat ullamco commodo aliqua nulla laboris magna
          cupidatat in esse consectetur commodo. Occaecat aute ullamco mollit
          qui anim qui enim velit irure. Nostrud elit fugiat adipisicing minim.
          Adipisicing et commodo ad amet eiusmod culpa aliquip quis pariatur
          duis. Mollit officia commodo esse sint mollit do deserunt sunt officia
          occaecat eu ipsum quis.
        </p>
      </div>
    </>
  );
}

export default Container;

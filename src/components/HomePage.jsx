import { useState } from "react";
import { Button } from "./Button";

export default function HomePage() {
  const colors = ["green", "blue", "pink", "wheat"];
  const [isColor, setColor] = useState("");

  function changeColor(e) {
    let color_index = Math.floor(Math.random() * colors.length);
    let selectedColor = colors[color_index];
    return setColor(selectedColor);
  }
  return (
    <div
      className="max-w-full h-screen grid place-content-center"
      style={{ backgroundColor: ` ${isColor}` }}
    >
      <h2 className="mb-4 text-xl">
        Background Color: {isColor.toUpperCase()}
      </h2>
      <Button
        handleClick={changeColor}
        name={"Click Me"}
      />
    </div>
  );
}

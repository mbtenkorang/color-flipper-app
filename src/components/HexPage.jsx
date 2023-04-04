import { useState } from "react";
import { Button } from "./Button";

export default function HexPage() {
  const [hexColor, setHexColor] = useState("");
  const hex_values = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  const get_random_hex_value = () => {
    return Math.floor(Math.random() * hex_values.length);
  };

  function randomColor(e) {
    let random_hex_color = "#";
    for (let i = 0; i < 6; i++) {
      random_hex_color += hex_values[get_random_hex_value()];
    }
    return setHexColor(random_hex_color);
  }

  return (
    <div
      className="h-screen max-w-full grid place-content-center"
      style={{ backgroundColor: `${hexColor}` }}
    >
      <h2 className="mb-4 text-xl">Background Color: {`${hexColor}`}</h2>
      <Button
        name={"Click Me"}
        handleClick={randomColor}
      />
    </div>
  );
}

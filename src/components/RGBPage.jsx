import { useState } from "react";
import { Button } from "./Button";

export default function () {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [rgbaColor, setRgbaColor] = useState("");

  function changeRed(e) {
    return setRed(e.target.value);
  }
  function changeGreen(e) {
    return setGreen(e.target.value);
  }
  function changeBlue(e) {
    return setBlue(e.target.value);
  }

  function assign_rgb_value(e) {
    let rgb_value = `rgb(${red}, ${green}, ${blue})`;
    return setRgbaColor(rgb_value);
  }

  return (
    <div className="h-2/3">
      <label htmlFor="red">Red:</label>
      <input
        className="border-2 ml-4"
        type="number"
        value={red}
        onChange={(e) => changeRed(e)}
      />
      <br />
      <label htmlFor="green">Green:</label>
      <input
        className="border-2 ml-4"
        type={"number"}
        value={green}
        onChange={(e) => changeGreen(e)}
      />
      <br />
      <label htmlFor="blue">Blue:</label>
      <input
        className="border-2 ml-4"
        type={"number"}
        value={blue}
        onChange={(e) => changeBlue(e)}
      />
      <br />
      <Button
        name="Click me"
        handleClick={assign_rgb_value}
      />
      <p
        className="text-md"
        style={{ backgroundColor: `${rgbaColor}` }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quod
        necessitatibus expedita quo impedit cumque ipsa dolorum veritatis
        officia nostrum.
      </p>
    </div>
  );
}

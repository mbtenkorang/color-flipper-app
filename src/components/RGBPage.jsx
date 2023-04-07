import { useState } from "react";
import { Button } from "./Button";

export default function () {
  const [rgbValues, setRgbValues] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });
  const [rgbaColor, setRgbaColor] = useState("");

  function assign_rgb_value() {
    let rgb_value = `rgb(${rgbValues.red}, ${rgbValues.green}, ${rgbValues.blue})`;
    return setRgbaColor(rgb_value);
  }

  const handleChange = (name) => (event) => {
    setRgbValues({ ...rgbValues, [name]: event.target.value });
  };

  return (
    <div
      className="h-2/3"
      style={{ backgroundColor: `${rgbaColor}` }}
    >
      <label htmlFor="red">Red:</label>
      <input
        className="border-2 ml-4"
        type="number"
        value={rgbValues.red}
        onChange={handleChange("red")}
      />
      <br />
      <label htmlFor="green">Green:</label>
      <input
        className="border-2 ml-4"
        type={"number"}
        value={rgbValues.green}
        onChange={handleChange("green")}
      />
      <br />
      <label htmlFor="blue">Blue:</label>
      <input
        className="border-2 ml-4"
        type={"number"}
        value={rgbValues.blue}
        onChange={handleChange("blue")}
      />
      <br />
      <Button
        name="Set Color"
        handleClick={assign_rgb_value}
      />
      <p className="text-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quod
        necessitatibus expedita quo impedit cumque ipsa dolorum veritatis
        officia nostrum.
      </p>
    </div>
  );
}

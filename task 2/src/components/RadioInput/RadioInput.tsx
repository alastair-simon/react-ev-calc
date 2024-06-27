import React, { useState } from "react";
import "./RadioInput.css";

export default function RadioInput() {
  const [selectedPower, setSelectedPower] = useState("huey");

  const handleChange = (e) => {
    setSelectedPower(e.target.value);
  };
``
  return (
    <form className="flex flex-col">
      <label className="text-[13px] mb-[10px]">Presets</label>
      <div className="flex flex-row items-center gap-2">
        <button ></button>
        <label>5x 11kw</label>
      </div>
      <div className="flex flex-row items-center gap-2">
        <input
          type="radio"
          name="power"
          value="mat"
          checked={selectedPower === "mat"}
          onChange={handleChange}
        />
        <label>3x 22kw</label>
      </div>
      <div className="flex flex-row items-center gap-2">
        <input
          type="radio"
          name="power"
          value="alex"
          checked={selectedPower === "alex"}
          onChange={handleChange}
        />
        <label>1x 50kw</label>
      </div>
    </form>
  );
}

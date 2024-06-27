import { SetStateAction, useState } from "react";
import "./slider.css";
import { getBackgroundSize } from "../../utils/getBackgroundSize";

type propstype = {
    max: number;
    value: number;
    setValue: React.Dispatch<SetStateAction<number>>
}

export default function Slider({ max, value, setValue }: propstype) {
  return (
    <div className="App">
      <input
        type="range"
        min="0"
        max={max}
        onChange={(e) => setValue(Number(e.target.value))}
        style={getBackgroundSize(max, value)}
        value={value}
      />
    </div>
  );
}

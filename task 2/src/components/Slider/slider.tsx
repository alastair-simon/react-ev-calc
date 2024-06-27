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
    <div>
      <h4 className="text-[34px]">
        {value} <span className="text-[16px]">kWh</span>
      </h4>
      <input
        type="range"
        min="0"
        max={max}
        onChange={(e) => setValue(Number(e.target.value))}
        style={getBackgroundSize(max, value)}
        value={value}
      />
      <div className="flex flex-row justify-between text-[13px]">
        <p>0 kWh</p> <p>{max} kWh</p>
      </div>
    </div>
  );
}

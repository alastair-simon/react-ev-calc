import { SetStateAction } from "react";
import { getBackgroundSize } from "../../utils/getBackgroundSize";
import "./slider.css";
interface propstype {
    max: number;
    value: number;
    setValue: React.Dispatch<SetStateAction<number>>
}

export default function Slider({ max, value, setValue }: propstype) {
  return (
    <div>
      <h4 className="text-[34px] font-medium">
        {value} <span className="text-[16px] font-medium">kWh</span>
      </h4>
      <input
        type="range"
        min="0"
        max={max}
        onChange={(e) => setValue(Number(e.target.value))}
        style={getBackgroundSize(max, value)}
        value={value}
      />
      <div className="flex flex-row justify-between text-[13px] mt-3">
        <p className="font-medium">0 kWh</p>{" "}
        <p className="font-medium">{max} kWh</p>
      </div>
    </div>
  );
}

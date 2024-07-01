import { SetStateAction } from "react";
import {useSlider} from "../../hooks/useSlider";
import "./slider.css";

interface propstype {
  max: number;
  value: number;
  setValue: React.Dispatch<SetStateAction<number>>;
  unit: string;
  label: string;
}

export default function Slider({ max, value, setValue, unit, label }:propstype) {
  const {
    sliderRef,
    indicatorRef,
    indicatorPosition,
    handleChange,
    sliderStyle,
  } = useSlider({ max, value, setValue });

  return (
    <div className="flex flex-col">
      <div className="text-sm font-semibold flex flex-row justify-between mb-2">
        <label>{label}</label>
        <h4>
          {max} {unit}
        </h4>
      </div>
      <div className="relative">
        <input
          ref={sliderRef}
          type="range"
          min="0"
          max={max}
          onChange={handleChange}
          style={sliderStyle}
          value={value}
          className="slider"
        />
        <div
          ref={indicatorRef}
          className="value-indicator mt-2"
          style={{ left: `${indicatorPosition}px` }}
        >
          <div className="indicator-text w-12 h-7 -mr-6 font-medium flex justify-center items-center text-center rounded-md bg-black text-white">
            <div className="arrUp"></div>
            <p>{value}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


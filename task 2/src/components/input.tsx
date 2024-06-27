import { useState } from "react";
import Slider from "./Slider/slider"
import NumberInput from "./NumberInput/NumberInput";
import RadioInput from "./RadioInput/RadioInput";

export default function Input() {
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);

  return (
    <div className="w-[460px] h-full flex flex-col">
      <form className="w-full mb-[40px] flex flex-col">
        <label className="text-[13px]">Number chargepoints</label>
        <NumberInput value={22} />
      </form>
      <form className="w-full mb-[40px]">
        <label className="text-[13px]">Car consumption</label>
        <h4 className="text-[34px]">
          {value} <span className="text-[16px]">kWh</span>
        </h4>
        <Slider max={100} value={value} setValue={setValue} />
        <div className="flex flex-row justify-between text-[13px]">
          <p>0 kWh</p> <p>100 kWh</p>
        </div>
      </form>
      <form className="w-full mb-[40px]">
        <label className="text-[13px]">Chargepoint power</label>
        <h4 className="text-[34px]">
          {value2}
          <span className="text-[16px]">kWh</span>
        </h4>
        <Slider max={100} value={value2} setValue={setValue2} />
        <div className="flex flex-row justify-between text-[13px]">
          <p>0 kWh</p> <p>100 kWh</p>
        </div>
      </form>
      <div className="w-full flex flex-row justify-between">
        <RadioInput/>
        <form className="flex flex-col">
          <label className="text-[13px]">Arrival multiplier</label>
          <NumberInput value={22} />
        </form>
      </div>
    </div>
  );
}
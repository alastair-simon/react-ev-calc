import { useState } from "react";
import Slider from "./Slider/slider"
import NumberInput from "./NumberInput/NumberInput";
import RadioInput from "./RadioInput/RadioInput";

export default function Input() {
  const [value, setValue] = useState(22);
  const [value2, setValue2] = useState(11);
  const [preset, setPreset] = useState("one");
  const [chargePoints, setChargePoints] = useState(22);

  return (
    <div className="w-[460px] h-full flex flex-col">
      <div className="w-full mb-[40px] flex flex-col">
        <label className="text-[13px]">Number chargepoints</label>
        <NumberInput chargePoints={chargePoints} setChargePoints={setChargePoints}/>
      </div>
      <div className="w-full mb-[40px]">
        <label className="text-[13px]">Car consumption</label>
        <Slider max={100} value={value} setValue={setValue} />
      </div>
      <div className="w-full mb-[40px]">
        <label className="text-[13px]">Chargepoint power</label>
        <Slider max={100} value={value2} setValue={setValue2} />
      </div>
      <RadioInput preset={preset} setPreset={setPreset} />
    </div>
  );
}
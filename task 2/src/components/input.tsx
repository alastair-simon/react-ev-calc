import { SetStateAction } from "react";
import Slider from "./Slider/slider";
import NumberInput from "./NumberInput/NumberInput";
import RadioInput from "./RadioInput/RadioInput";
interface props {
  consumption: number;
  setConsumption: React.Dispatch<SetStateAction<number>>;
  chargePointPower: number;
  setChargePointPower: React.Dispatch<SetStateAction<number>>;
  chargePoints: number;
  setChargePoints: React.Dispatch<SetStateAction<number>>;
  multiplier: number;
  setMultiplier: React.Dispatch<SetStateAction<number>>;
}

export default function Input({
  consumption,
  setConsumption,
  chargePointPower,
  setChargePointPower,
  chargePoints,
  setChargePoints,
  multiplier,
  setMultiplier,
}: props) {
  return (
    <div className="w-[460px] h-full flex flex-col">
      <div className="flex flex-row gap-8">
        <div className="w-full mb-[40px] flex flex-col">
          <label className="text-[13px] mb-4">Number chargepoints</label>
          <NumberInput value={chargePoints} setValue={setChargePoints} />
        </div>
        <div className="w-full mb-[40px] flex flex-col">
          <label className="text-[13px] mb-4">Arrival probability</label>
          <NumberInput value={multiplier} setValue={setMultiplier} />
        </div>
      </div>
      <div className="w-full mb-[40px]">
        <label className="text-[13px] mb-[20px]">Car consumption</label>
        <Slider max={100} value={consumption} setValue={setConsumption} />
      </div>
      <div className="w-full mb-[40px]">
        <label className="text-[13px]">Chargepoint power</label>
        <Slider
          max={100}
          value={chargePointPower}
          setValue={setChargePointPower}
        />
      </div>
      <RadioInput
        setChargePointPower={setChargePointPower}
        setChargePoints={setChargePoints}
      />
    </div>
  );
}

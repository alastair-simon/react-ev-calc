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
  probability: number;
  setProbability: React.Dispatch<SetStateAction<number>>;
}

export default function Input({
  consumption,
  setConsumption,
  chargePointPower,
  setChargePointPower,
  chargePoints,
  setChargePoints,
  probability,
  setProbability,
}: props) {
  return (
    <div className="w-[460px] h-full flex flex-col">
      <div className="flex flex-row gap-8">
        <div className="w-full mb-[40px] flex flex-col">
          <label className="text-[13px] mb-4 font-semibold">Number chargepoints</label>
          <NumberInput max={20} min={1} value={chargePoints} setValue={setChargePoints} />
        </div>
        <div className="w-full mb-[40px] flex flex-col">
          <label className="text-[13px] mb-4 font-semibold">Arrival probability</label>
          <NumberInput max={100} min={1} value={probability} setValue={setProbability} />
        </div>
      </div>
      <div className="w-full mb-[40px]">
        <label className="text-[13px] mb-[20px] font-semibold">Car consumption</label>
        <Slider max={100} value={consumption} setValue={setConsumption} />
      </div>
      <div className="w-full mb-[40px]">
        <label className="text-[13px] font-semibold">Chargepoint power</label>
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

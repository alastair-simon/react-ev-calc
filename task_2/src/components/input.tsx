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
    <div className="h-full flex flex-col md:pt-20 md:w-full xl:pt-30">
      <div className="mb-10 mt-10">
        <h2 className="font-PingFang font-semibold text-3xl mb-2">
          EV charge point calculator
        </h2>
        <p className="">Adjust the inputs to get an estimate</p>
      </div>
      <div className="w-full flex flex-col gap-5 md:flex-row md:gap-0 mb-12">
        <div className="w-full flex flex-col">
          <label className="text-sm mb-4 font-medium">
            Number of charge points
          </label>
          <NumberInput
            max={20}
            min={1}
            initialVal={5}
            value={chargePoints}
            setValue={setChargePoints}
          />
        </div>
        <div className="w-full flex flex-col">
          <label className="text-sm mb-4 font-medium">
            Arrival probability
          </label>
          <NumberInput
            max={100}
            min={1}
            initialVal={100}
            value={probability}
            setValue={setProbability}
          />
        </div>
      </div>
      <div className="w-full mb-16">
        <Slider
          max={100}
          value={consumption}
          setValue={setConsumption}
          unit={"kWh"}
          label={"Car consumption"}
        />
      </div>
      <div className="w-full mb-20">
        <Slider
          max={100}
          value={chargePointPower}
          setValue={setChargePointPower}
          unit={"kW"}
          label={"Chargepoint power"}
        />
      </div>
      <RadioInput
        setChargePointPower={setChargePointPower}
        setChargePoints={setChargePoints}
      />
    </div>
  );
}

import { useState } from "react";
import useChargingSimulation from "../hooks/useChargingSimulation";
import { TimePeriod } from "../types/TimePeriod";
import { getFormattedNum } from "../utils/getFromattedNum";
import { ToggleButton } from "./ToggleButton/ToggleButton";
import { ImPowerCord } from "react-icons/im";
import { useCountUpAnimation } from "../hooks/useNumAnimation";
interface propsType {
  consumption: number;
  chargePointPower: number;
  chargePoints: number;
  probability: number;
}

export default function Results({ consumption, chargePointPower, chargePoints, probability }: propsType) {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("year");
  const {
    totalEnergyConsumed,
    maxPowerDemand,
    concurrencyFactor,
    chargingEvents,
    theoreticalMaxPowerDemand,
  } = useChargingSimulation(
    consumption,
    chargePointPower,
    chargePoints,
    probability,
    timePeriod
  );
  const { currentValue } = useCountUpAnimation(totalEnergyConsumed, 800);

  return (
    <div className="flex flex-col items-center z-99">
      <div className="w-[570px] relative flex flex-col p-[70px] rounded-[25px] bg-white">
        <div className="mb-4">
          <ToggleButton timePeriod={timePeriod} setTimePeriod={setTimePeriod} />
        </div>
        <div className="mb-8">
          <p className="text-[22px] mb-2 font-medium">Total energy charged</p>
          <h3 className="w-full text-[85px] tracking-tighter font-medium leading-[100px] flex flex-row justify-between">
            {getFormattedNum(currentValue)}{" "}
            <span className="w-[40px] tracking-normal text-3xl self-end mb-2 mr-5">
              kWh
            </span>
          </h3>
        </div>

        <div className="flex flex-row gap-10">
          <div>
            <p className="text-[13px]">Max demand</p>
            <h4 className="text-[20px] font-medium">
              {theoreticalMaxPowerDemand} kW
            </h4>
          </div>
          <div>
            <p className="text-[13px]">Actual demand</p>
            <h4 className="text-[20px] font-medium">{maxPowerDemand} kW</h4>
          </div>
          <div>
            <p className="text-[13px]">Concurrency factor</p>
            <h4 className="text-[20px] font-medium">{concurrencyFactor}%</h4>
          </div>
        </div>

        <div className="w-[220px] h-[68px] m-auto left-0 right-0 bottom-[-34px] flex flex-row gap-2 justify-center items-center rounded-[15px] bg-black absolute">
          <p className="text-white text-[28px]">{chargingEvents}</p>
          <ImPowerCord color="white" size={24} className="mt-0.5" />
        </div>
      </div>
    </div>
  );
}

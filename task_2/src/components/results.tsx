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
      <div className="w-full flex flex-col justify-center relative pt-8 pb-14 mt-20 ml-24 rounded-3xl bg-white md:w-[570px] md:h-[430px] md:p-20">
        <div className="mb-4">
          <ToggleButton timePeriod={timePeriod} setTimePeriod={setTimePeriod} />
        </div>
        <div className="mb-9">
          <p className="text-xl mb-3 font-medium">Total energy charged</p>
          <h3 className="w-full text-6xl md:text-[85px] tracking-tighter font-medium leading-[80px] flex flex-row ">
            {getFormattedNum(currentValue)}{" "}
            <span className="tracking-normal text-3xl self-end mb-0 ml-5">
              kWh
            </span>
          </h3>
        </div>
        <div className="flex flex-row gap-10">
          <div>
            <p className="text-sm mb-1 font-bold">Max demand</p>
            <h4 className="text-xl">{theoreticalMaxPowerDemand} kW</h4>
          </div>
          <div>
            <p className="text-sm mb-1 font-bold">Actual demand</p>
            <h4 className="text-xl">{maxPowerDemand} kW</h4>
          </div>
          <div>
            <p className="text-sm mb-1 font-bold">Concurrency factor</p>
            <h4 className="text-xl">{concurrencyFactor}%</h4>
          </div>
        </div>
        <div className="w-[220px] h-[68px] m-auto left-0 right-0 bottom-[-34px] flex flex-row gap-2 justify-center items-center rounded-xl bg-black absolute">
          <p className="text-white text-3xl">{chargingEvents}</p>
          <ImPowerCord color="white" size={24} className="mt-0.5" />
        </div>
      </div>
  );
}

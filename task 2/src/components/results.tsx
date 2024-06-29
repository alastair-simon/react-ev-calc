import { useState } from "react";
import useChargingSimulation from "../hooks/useChargingSimulation";
import { getFormattedNum } from "../utils/getFromattedNum";
import { ToggleButton } from "./ToggleButton/ToggleButton";
import { ImPowerCord } from "react-icons/im";

interface propsType {
  consumption: number;
  chargePointPower: number;
  chargePoints: number;
  probability: number;
}
type TimePeriod = "day" | "month" | "year";

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

  return (
    <div className="flex flex-col items-center z-99">
      <div className="w-[570px] h-[440px] relative flex flex-col p-[70px] rounded-[25px] bg-white">
        <div className="mb-4">
          <ToggleButton timePeriod={timePeriod} setTimePeriod={setTimePeriod} />
        </div>
        <div className="mb-8">
          <p className="text-[22px] mb-2 font-medium">Total energy charged</p>
          <h3 className="text-[90px] leading-[100px]">
            {getFormattedNum(totalEnergyConsumed)}{" "}
            <span className="text-3xl">kWh</span>
          </h3>
        </div>

        <div className="flex flex-row gap-10">
          <div>
            <p className="text-[13px] font-semibold">Max demand</p>
            <h4 className="text-[20px]">{theoreticalMaxPowerDemand} kW</h4>
          </div>
          <div>
            <p className="text-[13px] font-semibold">Actual demand</p>
            <h4 className="text-[20px]">{maxPowerDemand} kW</h4>
          </div>
          <div>
            <p className="text-[13px] font-semibold">Concurrency factor</p>
            <h4 className="text-[20px]">{concurrencyFactor}%</h4>
          </div>
        </div>

        <div className="w-[220px] h-[68px] m-auto left-0 right-0 bottom-[-34px] flex flex-row gap-2 justify-center items-center rounded-[15px] bg-black absolute">
          <p className="text-white text-[28px]">{chargingEvents}</p>
          <ImPowerCord color="white" size={24} className="mt-0.5"/>
        </div>
      </div>
    </div>
  );
}

import useChargingSimulation from "../hooks/useChargingSimulation";
import { getFormattedNum } from "../utils/getFromattedNum";
interface propsType {
  consumption: number;
  chargePointPower: number;
  chargePoints: number;
  probability: number;
}

export default function Results({ consumption, chargePointPower, chargePoints, probability }:propsType) {
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
    probability
  );

  return (
    <div className="flex flex-col items-center z-99">
      <div className="w-[570px] h-[420px] relative flex flex-col p-[70px] rounded-[25px] bg-white">
        <div>
          <p className="text-[22px]">Total energy charged</p>
          <h3 className="text-[100px] mb-[30px] leading-[140px]">
            {getFormattedNum(totalEnergyConsumed)}{" "}
            <span className="text-3xl">kWh</span>
          </h3>
        </div>

        <div className="flex flex-row gap-10">
          <div>
            <p className="text-[13px]">Max demand</p>
            <h4 className="text-[20px]">{theoreticalMaxPowerDemand} kW</h4>
          </div>
          <div>
            <p className="text-[13px]">Actual demand</p>
            <h4 className="text-[20px]">{maxPowerDemand} kW</h4>
          </div>
          <div>
            <p className="text-[13px]">Concurrency factor</p>
            <h4 className="text-[20px]">{concurrencyFactor}%</h4>
          </div>
        </div>

        <div className="w-[220px] h-[68px] m-auto left-0 right-0 bottom-[-34px] flex flex-row justify-center items-center rounded-[15px] bg-black absolute">
          <p className="absolute -top-[25px] text-[13px]">Number of charges</p>
          <p className="text-white text-[28px]">{chargingEvents}</p>
        </div>
      </div>
    </div>
  );
}

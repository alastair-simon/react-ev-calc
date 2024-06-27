import useChargingSimulation from "../hooks/useChargingSimulation";
import Input from "../components/input"
import Results from "../components/results";

export default function Dash() {
  //const { totalEnergyConsumed, maxPowerDemand, concurrencyFactor } = useChargingSimulation();

  return (
    <div
      id="wrapper"
      className="w-full h-screen flex flex-row justify-between pl-[110px] pr-[110px] pt-[70px] pb-[70px]"
    >
      <div id="aside" className="w-[460px] flex flex-col">
        <h2 className="font-PingFang font-medium text-[30px] mb-[4px]">
          EV charge point calculator
        </h2>
        <h3 className="font-PingFang font-medium text-[14px] mb-[50px]">
          Adjust the inputs to get an estimate
        </h3>
        <Input />
      </div>
      <div id="bside" className="">
        <Results />
      </div>
      {/* <h1>Charging Simulation Results</h1>
        <p>Total energy consumed: {totalEnergyConsumed} kWh</p>
        <p>Theoretical maximum power demand: {20 * 11} kW</p>
        <p>Actual maximum power demand: {maxPowerDemand} kW</p>
        <p>Concurrency factor: {concurrencyFactor}%</p> */}
    </div>
  );
}
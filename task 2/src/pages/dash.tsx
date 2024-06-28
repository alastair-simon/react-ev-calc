import { useState } from "react";
import Input from "../components/input"
import Results from "../components/results";
import blurYellow from "../assets/blurYellow.svg"
import blurGreen from "../assets/blurGreen.svg"

export default function Dash() {
  const [consumption, setConsumption] = useState(18);
  const [chargePointPower, setChargePointPower] = useState(11);
  const [chargePoints, setChargePoints] = useState(5);
  const [multiplier, setMultiplier] = useState(1);

  return (
    <div
      id="wrapper"
      className="w-full h-screen flex flex-col items-center pt-5 md:flex-row md:justify-between md:items-start md:pl-20 md:pt-14"
    >
      <div className="w-[460px] flex flex-col">
        <h2 className="font-PingFang font-medium text-[30px] mb-[40px]">
          EV charge point calculator
        </h2>
        <Input
          consumption={consumption}
          setConsumption={setConsumption}
          chargePointPower={chargePointPower}
          setChargePointPower={setChargePointPower}
          chargePoints={chargePoints}
          setChargePoints={setChargePoints}
          multiplier={multiplier}
          setMultiplier={setMultiplier}
        />
      </div>
      <div className="w-full h-full justify-center md:flex-grow relative md:pr-[120px] pb-[150px] flex md:justify-end md:items-end">
        <Results
          consumption={consumption}
          chargePointPower={chargePointPower}
          chargePoints={chargePoints}
          multiplier={multiplier}
        />
        <div className="w-full h-full absolute top-0 left-0 -z-10 overflow-hidden">
          <img
            src={blurYellow}
            className="w-[700px] -bottom-[70px] right-[350px] -mr-[200px] absolute"
          ></img>
          <img
            src={blurGreen}
            className="w-[600px] top-[0px] right-0 -mr-[190px] absolute"
          ></img>
        </div>
      </div>
    </div>
  );
}
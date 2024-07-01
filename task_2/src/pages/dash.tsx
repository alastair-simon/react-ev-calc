import { useState } from "react";
import Input from "../components/input"
import Results from "../components/results";
import logo from "../assets/logo.svg"
import blurYellow from "../assets/blurYellow.svg"
import blurGreen from "../assets/blurGreen.svg"
import { IoMdMenu } from "react-icons/io";


export default function Dash() {
  const [consumption, setConsumption] = useState<number>(18);
  const [chargePointPower, setChargePointPower] = useState<number>(11);
  const [chargePoints, setChargePoints] = useState<number>(5);
  const [probability, setProbability] = useState<number>(100);

  return (
    <div className="w-full h-screen">
      <nav className="w-full h-16 bg-lightGrey pl-20 pr-20 flex flex-row justify-between items-center">
        <img src={logo} className="w-[80px]"></img>
        <IoMdMenu size={30} />
      </nav>
      <div
        id="wrapper"
        className="w-full md:w-full flex flex-col items-center md:pt-5 md:flex-row md:justify-between md:items-start md:pl-20 "
      >
        <div id="left-side-wrap" className="w-full md:w-[500px] flex flex-col">
          <Input
            consumption={consumption}
            setConsumption={setConsumption}
            chargePointPower={chargePointPower}
            setChargePointPower={setChargePointPower}
            chargePoints={chargePoints}
            setChargePoints={setChargePoints}
            probability={probability}
            setProbability={setProbability}
          />
        </div>

        <div id="right-side-wrap" className="flex justify-center items-center relative flex-grow md:flex md:flex-col md:flex-grow md:justify-center md:items-center">
          <Results
            consumption={consumption}
            chargePointPower={chargePointPower}
            chargePoints={chargePoints}
            probability={probability}
          />
          <div className="w-full h-[640px] absolute opacity-0 md:opacity-100 top-0 left-0 -z-10 overflow-hidden">
            <img
              src={blurYellow}
              className="w-[700px] -bottom-[100px] right-[300px] -mr-[200px] absolute"
            ></img>
            <img
              src={blurGreen}
              className="w-[700px] -bottom-[130px] -right-[80px] -mr-[140px] absolute"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
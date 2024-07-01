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
      <nav className="w-full fixed h-16 bg-lightGrey pl-10 pr-10 md:pl-20 md:pr-20 flex flex-row justify-between items-center z-10">
        <img src={logo} className="w-[80px]"></img>
        <IoMdMenu size={30} />
      </nav>
      <div
        id="wrapper"
        className="w-full h-screen md:w-full flex flex-col items-center p-10 md:pr-0 md:pb-0 md:pt-0 md:flex-row md:justify-between md:items-start md:pl-20 "
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

        <div
          id="right-side-wrap"
          className="h-full flex justify-center items-center relative flex-grow md:full md:flex md:flex-col md:flex-grow md:justify-center md:items-center"
        >
          <Results
            consumption={consumption}
            chargePointPower={chargePointPower}
            chargePoints={chargePoints}
            probability={probability}
          />
          <div className="w-full h-full absolute opacity-0 md:opacity-100 top-0 left-0 -z-10 overflow-hidden">
            <img
              src={blurYellow}
              className="w-[700px] md:-bottom-[100px] md:right-[300px] md:-mr-[200px] 2xl:-bottom-[50px] 2xl:right-[600px] absolute"
            ></img>
            <img
              src={blurGreen}
              className="w-[700px] md:-bottom-[120px] md:-right-[80px] md:-mr-[140px] 2xl:-bottom-[30px] 2xl:right-[100px] absolute"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
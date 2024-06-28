import { SetStateAction } from "react";
import { usePreset } from "../../hooks/usePreset";
import "./RadioInput.css";
interface propsType {
  setChargePoints: React.Dispatch<SetStateAction<number>>;
  setChargePointPower: React.Dispatch<SetStateAction<number>>;
};

export default function RadioInput({setChargePoints, setChargePointPower}:propsType) {
  const { preset, setCurPreset } = usePreset(setChargePoints, setChargePointPower);

  return (
    <div className="flex flex-col">
      <label className="text-[13px] mb-[10px]">Presets</label>
      <div className="flex flex-row gap-5">
        <div className="flex flex-row items-center gap-2">
          <button
            className={`w-[20px] h-[20px] rounded-full ${
              preset === 1 ? "bg-green" : "border-[1.5px] border-midGrey"
            }  flex justify-center items-center`}
            onClick={() => setCurPreset(1)}
          >
            <div className="w-[7px] h-[7px] rounded-full bg-white"></div>
          </button>
          <label>5x 11kw</label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <button
            className={`w-[20px] h-[20px] rounded-full ${
              preset === 2 ? "bg-green" : "border-[2px] border-midGrey"
            }  flex justify-center items-center`}
            onClick={() => setCurPreset(2)}
          >
            <div className="w-[7px] h-[7px] rounded-full bg-white"></div>
          </button>
          <label>3x 22kw</label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <button
            className={`w-[20px] h-[20px] rounded-full ${
              preset === 3
                ? "bg-green-400"
                : "border-[2px] border-midGrey"
            }  flex justify-center items-center`}
            onClick={() => setCurPreset(3)}
          >
            <div className="w-[7px] h-[7px] rounded-full bg-white"></div>
          </button>
          <label>1x 50kw</label>
        </div>
      </div>
    </div>
  );
}

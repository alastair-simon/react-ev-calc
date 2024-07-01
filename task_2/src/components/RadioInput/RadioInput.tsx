import { SetStateAction } from "react";
import { usePreset } from "../../hooks/usePreset";
interface propsType {
  setChargePoints: React.Dispatch<SetStateAction<number>>;
  setChargePointPower: React.Dispatch<SetStateAction<number>>;
};

export default function RadioInput({setChargePoints, setChargePointPower}:propsType) {
  const { preset, setCurPreset } = usePreset(setChargePoints, setChargePointPower);

  return (
    <div className="flex flex-col">
      <label className="text-sm mb-4 font-semibold">Presets</label>
      <div className="flex flex-row gap-5">
        <div className="flex flex-row items-center gap-2">
          <button
            className={`w-5 h-5 rounded-full ${
              preset === 1 ? "bg-black" : "bg-lightGrey border-[1px] border-midGrey"
            }  flex justify-center items-center`}
            onClick={() => setCurPreset(1)}
          >
            <div className="w-[6px] h-[6px] rounded-full bg-lightGrey"></div>
          </button>
          <label className="font-medium">5x 11kw</label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <button
            className={`w-5 h-5 rounded-full ${
              preset === 2 ? "bg-black" : "bg-lightGrey border-[1px] border-midGrey"
            }  flex justify-center items-center`}
            onClick={() => setCurPreset(2)}
          >
            <div className="w-[6px] h-[6px] rounded-full bg-lightGrey"></div>
          </button>
          <label className="font-medium">3x 22kw</label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <button
            className={`w-5 h-5 rounded-full ${
              preset === 3 ? "bg-black" : "bg-lightGrey border-[1px] border-midGrey"
            }  flex justify-center items-center`}
            onClick={() => setCurPreset(3)}
          >
            <div className="w-[6px] h-[6px] rounded-full bg-lightGrey"></div>
          </button>
          <label className="font-medium">1x 50kw</label>
        </div>
      </div>
    </div>
  );
}

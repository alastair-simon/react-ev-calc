import { useState } from "react";
import "./RadioInput.css";

export default function RadioInput({preset, setPreset}) {

  return (
    <div className="flex flex-col">
      <label className="text-[13px] mb-[10px]">Presets</label>
      <div className="flex flex-row gap-5">
        <div className="flex flex-row items-center gap-2">
          <button
            className={`w-[20px] h-[20px] rounded-full ${
              preset === "one" ? "bg-green-400" : "border-[1.5px] border-black"
            }  flex justify-center items-center`}
            onClick={() => setPreset("one")}
          >
            <div className="w-[7px] h-[7px] rounded-full bg-white"></div>
          </button>
          <label>5x 11kw</label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <button
            className={`w-[20px] h-[20px] rounded-full ${
              preset === "two" ? "bg-green-400" : "border-[1.5px] border-black"
            }  flex justify-center items-center`}
            onClick={() => setPreset("two")}
          >
            <div className="w-[7px] h-[7px] rounded-full bg-white"></div>
          </button>
          <label>3x 22kw</label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <button
            className={`w-[20px] h-[20px] rounded-full ${
              preset === "three"
                ? "bg-green-400"
                : "border-[1.5px] border-black"
            }  flex justify-center items-center`}
            onClick={() => setPreset("three")}
          >
            <div className="w-[7px] h-[7px] rounded-full bg-white"></div>
          </button>
          <label>1x 50kw</label>
        </div>
      </div>
    </div>
  );
}

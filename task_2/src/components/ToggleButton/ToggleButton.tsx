import { SetStateAction } from "react";
import { TimePeriod } from "../../types/TimePeriod";

interface Props {
  timePeriod: TimePeriod;
  setTimePeriod: React.Dispatch<SetStateAction<TimePeriod>>;
}

export function ToggleButton({ timePeriod, setTimePeriod }: Props) {

  return (
    <div className="flex flex-row gap-2 mb-4">
      <button
        className={`${
          timePeriod === "day"
            ? "bg-offBlack border-[2px] border-offBlack text-white"
            : "border-[2px] border-midGrey text-midGrey"
        } text-sm font-medium pl-5 pr-5 pt-1 pb-1 rounded-full hover:bg-offBlack hover:text-white hover:border-offBlack`}
        onClick={() => setTimePeriod("day")}
      >
        Day
      </button>
      <button
        className={`${
          timePeriod === "month"
            ? "bg-offBlack border-[2px] border-offBlack text-white"
            : "border-[2px] border-midGrey text-midGrey"
        } text-sm font-medium pl-5 pr-5 pt-1 pb-1 rounded-full hover:bg-offBlack hover:text-white hover:border-offBlack`}
        onClick={() => setTimePeriod("month")}
      >
        Month
      </button>
      <button
        className={`${
          timePeriod === "year"
            ? "bg-offBlack border-[2px] border-offBlack text-white"
            : "border-[2px] border-midGrey text-midGrey"
        } text-sm font-medium pl-5 pr-5 pt-1 pb-1 rounded-full hover:bg-offBlack hover:text-white hover:border-offBlack`}
        onClick={() => setTimePeriod("year")}
      >
        Year
      </button>
    </div>
  );
}

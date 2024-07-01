import { SetStateAction } from "react";
import { TimePeriod } from "../../types/TimePeriod";

interface Props {
  timePeriod: TimePeriod;
  setTimePeriod: React.Dispatch<SetStateAction<TimePeriod>>;
}

export function ToggleButton({ timePeriod, setTimePeriod }: Props) {

  return (
    <div className="flex flex-row mb-4">
      <button
        className={`${
          timePeriod === "day"
            ? "bg-offBlack text-white"
            : "bg-lightGrey text-darkGrey"
        } text-sm font-medium pl-5 pr-5 pt-2 pb-2 rounded-l-lg hover:bg-offBlack hover:text-white hover:border-offBlack`}
        onClick={() => setTimePeriod("day")}
      >
        Day
      </button>
      <button
        className={`${
          timePeriod === "month"
            ? "bg-offBlack text-white"
            : "bg-lightGrey text-darkGrey"
        } text-sm font-medium pl-5 pr-5 pt-2 pb-2 hover:bg-offBlack hover:text-white hover:border-offBlack`}
        onClick={() => setTimePeriod("month")}
      >
        Month
      </button>
      <button
        className={`${
          timePeriod === "year"
            ? "bg-offBlack text-white"
            : "bg-lightGrey text-darkGrey"
        } text-sm font-medium pl-5 pr-5 pt-2 pb-2 rounded-r-lg hover:bg-offBlack hover:text-white hover:border-offBlack`}
        onClick={() => setTimePeriod("year")}
      >
        Year
      </button>
    </div>
  );
}

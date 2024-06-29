import { SetStateAction } from "react";

type TimePeriod = "day" | "month" | "year";

interface Props {
  timePeriod: TimePeriod;
  setTimePeriod: React.Dispatch<SetStateAction<TimePeriod>>;
}

export function ToggleButton({ timePeriod, setTimePeriod }: Props) {

  return (
    <div className="flex flex-row gap-3 mb-4">
      <button
        className={`${
          timePeriod === "day"
            ? "bg-offBlack text-white"
            : "border-[2px] border-midGrey text-midGrey"
        } text-sm font-medium pl-5 pr-5 pt-1 pb-1 rounded-full hover:bg-offBlack hover:text-white hover:border-offBlack`}
        onClick={() => setTimePeriod("day")}
      >
        Day
      </button>
      <button
        className={`${
          timePeriod === "month"
            ? "bg-offBlack text-white"
            : "border-[2px] border-midGrey text-midGrey"
        } text-sm font-medium pl-5 pr-5 pt-1 pb-1 rounded-full hover:bg-offBlack hover:text-white hover:border-offBlack`}
        onClick={() => setTimePeriod("month")}
      >
        Month
      </button>
      <button
        className={`${
          timePeriod === "year"
            ? "bg-offBlack text-white"
            : "border-[2px] border-midGrey text-midGrey"
        } text-sm font-medium pl-5 pr-5 pt-1 pb-1 rounded-full hover:bg-offBlack hover:text-white hover:border-offBlack`}
        onClick={() => setTimePeriod("year")}
      >
        Year
      </button>
    </div>
  );
}

import { useState, Dispatch, SetStateAction } from "react";

type SetChargePointsType = Dispatch<SetStateAction<number>>;
type SetChargePointPowerType = Dispatch<SetStateAction<number>>;

export function usePreset(
  setChargePoints: SetChargePointsType,
  setChargePointPower: SetChargePointPowerType
) {
  const [preset, setPreset] = useState<number>(1);

  type Setting = {
    power: number;
    points: number;
    preset: number;
  };

  const settings: Setting[] = [
    { power: 11, points: 5, preset: 1 },
    { power: 22, points: 3, preset: 2 },
    { power: 50, points: 1, preset: 3 },
  ];

  const setCurPreset = (num: number): void => {
    if (num >= 1 && num <= 3) {
      const setting = settings[num - 1];
      setChargePointPower(setting.power);
      setChargePoints(setting.points);
      setPreset(setting.preset);
    } else {
      console.error("Invalid input number");
    }
  };

  return { preset, setCurPreset };
}

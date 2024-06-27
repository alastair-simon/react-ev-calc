import { useState, useCallback } from "react";
import { useRandomChargingDemand } from "./useRandomChargingDemand";

const arrivalProbabilities: number[] = [
  0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 2.83, 2.83, 5.66, 5.66, 5.66,
  7.55, 7.55, 7.55, 10.38, 10.38, 10.38, 4.72, 4.72, 4.72, 0.94, 0.94,
];

interface SimulationResult {
  totalEnergyConsumed: string;
  maxPowerDemand: number;
  concurrencyFactor: string;
}

interface propsType {
  numChargePoints:number;
  chargingPower:number;
  intervalsPerHour:number;
  kwhPer100:number;
}

function useChargingSimulation(numChargePoints, chargingPower, kwhPer100):propsType {
    const intervalsPerHour = 4;
  const hoursPerDay = 24;
  const totalIntervals = 35040;
  const [totalEnergyConsumed, setTotalEnergyConsumed] = useState<number>(0);
  const [maxPowerDemand, setMaxPowerDemand] = useState<number>(0);
  const [concurrencyFactor, setConcurrencyFactor] = useState<number>(0);
  const { getRandomChargingDemand } = useRandomChargingDemand();

  const simulateCharge = useCallback((): void => {
    let totalEnergyConsumed = 0;
    let maxPowerDemand = 0;

    const chargepoints = new Array<number>(numChargePoints).fill(0);

    for (let interval = 0; interval < totalIntervals; interval++) {
      const hour = Math.floor((interval / intervalsPerHour) % hoursPerDay);
      const arrivalProbability = arrivalProbabilities[hour] / 100 / 4;
      let intervalPowerDemand = 0;

      for (let i = 0; i < chargepoints.length; i++) {
        if (chargepoints[i] > 0) {
          const energyThisInterval = chargingPower / intervalsPerHour;
          chargepoints[i] -= energyThisInterval;
          totalEnergyConsumed += energyThisInterval;
          intervalPowerDemand += chargingPower;
        } else if (Math.random() < arrivalProbability) {
          const chargingDemand = getRandomChargingDemand();
          if (chargingDemand > 0) {
            chargepoints[i] = (chargingDemand / 100) * kwhPer100;
            intervalPowerDemand += chargingPower;
          }
        }
      }

      maxPowerDemand = Math.max(maxPowerDemand, intervalPowerDemand);
    }

    const theoreticalMaxPowerDemand = numChargePoints * chargingPower;
    const concurrencyFactor = maxPowerDemand / theoreticalMaxPowerDemand;

    setTotalEnergyConsumed(totalEnergyConsumed);
    setMaxPowerDemand(maxPowerDemand);
    setConcurrencyFactor(concurrencyFactor);
  }, [numChargePoints, chargingPower, intervalsPerHour, kwhPer100]);

    simulateCharge();

  return {
    totalEnergyConsumed: totalEnergyConsumed.toFixed(2),
    maxPowerDemand,
    concurrencyFactor: (concurrencyFactor * 100).toFixed(2),
  };
};

export default useChargingSimulation;

import { useState, useEffect, useCallback } from "react";
import { useRandomChargingDemand } from "./useRandomChargingDemand";

const arrivalProbabilities: number[] = [
  0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 2.83, 2.83, 5.66, 5.66, 5.66,
  7.55, 7.55, 7.55, 10.38, 10.38, 10.38, 4.72, 4.72, 4.72, 0.94, 0.94,
];

interface SimulationResult {
  totalEnergyConsumed: number;
  maxPowerDemand: number;
  concurrencyFactor: number;
  chargingEvents: number;
}

function useChargingSimulation(
  consumption: number,
  chargingPower: number,
  chargePoints: number,
  multiplier: number
): SimulationResult {
  const { getRandomChargingDemand } = useRandomChargingDemand();

  const intervalsPerHour = 4;
  const hoursPerDay = 24;
  const totalIntervals = 35040; // 365 days * 24 hours * 4 intervals per hour

  const [totalEnergyConsumed, setTotalEnergyConsumed] = useState<number>(0.00);
  const [maxPowerDemand, setMaxPowerDemand] = useState<number>(0);
  const [concurrencyFactor, setConcurrencyFactor] = useState<number>(0);
  const [chargingEvents, setChargingEvents] = useState<number>(0);

  const simulateCharge = useCallback((): void => {
    let totalEnergyConsumed = 0;
    let maxPowerDemand = 0;
    let chargingEvents = 0;

    const chargepoints = new Array(chargePoints).fill(0);

    for (let interval = 0; interval < totalIntervals; interval++) {
      const hour = Math.floor((interval / intervalsPerHour) % hoursPerDay);
      const arrivalProbability = arrivalProbabilities[hour] / 100 / 4;
      const arrivalProbabilityMultiplier = arrivalProbability * multiplier;
      let intervalPowerDemand = 0;

      for (let i = 0; i < chargepoints.length; i++) {
        if (chargepoints[i] > 0) {
          const energyThisInterval = chargingPower / intervalsPerHour;
          chargepoints[i] -= energyThisInterval;
          totalEnergyConsumed += energyThisInterval;
          intervalPowerDemand += chargingPower;
        } else if (Math.random() < arrivalProbabilityMultiplier) {
          const chargingDemand = getRandomChargingDemand();
          if (chargingDemand > 0) {
            chargepoints[i] = (chargingDemand / 100) * consumption * multiplier;
            intervalPowerDemand += chargingPower;
            chargingEvents += 1;
          }
        }
      }

      maxPowerDemand = Math.max(maxPowerDemand, intervalPowerDemand);
    }

    const theoreticalMaxPowerDemand = chargePoints * chargingPower;
    const concurrency = maxPowerDemand / theoreticalMaxPowerDemand * 100 || 0;
    setTotalEnergyConsumed(parseFloat(totalEnergyConsumed.toFixed(2)));
    setMaxPowerDemand(maxPowerDemand);
    setConcurrencyFactor(Math.round(concurrency));
    setChargingEvents(chargingEvents);
  }, [
    chargePoints,
    chargingPower,
    consumption,
    multiplier,
    getRandomChargingDemand,
  ]);

  useEffect(() => {
    simulateCharge();
  }, [simulateCharge]);

  return {
    totalEnergyConsumed,
    maxPowerDemand,
    concurrencyFactor,
    chargingEvents,
  };
}

export default useChargingSimulation;

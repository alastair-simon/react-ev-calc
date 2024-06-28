import { useState, useEffect, useCallback } from "react";
import { useRandomChargingDemand } from "./useRandomChargingDemand";

interface SimulationResult {
  totalEnergyConsumed: number;
  maxPowerDemand: number;
  concurrencyFactor: number;
  chargingEvents: number;
  theoreticalMaxPowerDemand: number;
}

function useChargingSimulation(
  consumption: number,
  chargingPower: number,
  chargePoints: number,
  probability: number
): SimulationResult {
  const { getRandomChargingDemand } = useRandomChargingDemand();

  const intervalsPerHour = 4;
  const hoursPerDay = 24;
  const totalIntervals = 35040; // 365 days * 24 hours * 4 intervals per hour

  const [totalEnergyConsumed, setTotalEnergyConsumed] = useState<number>(0.0);
  const [maxPowerDemand, setMaxPowerDemand] = useState<number>(0);
  const [concurrencyFactor, setConcurrencyFactor] = useState<number>(0);
  const [chargingEvents, setChargingEvents] = useState<number>(0);
  const[theoreticalMaxPowerDemand, setTheorecticalPowerDemand]= useState<number>(0)

  const simulateCharge = useCallback(() => {
    let totalEnergyConsumed = 0;
    let maxPowerDemand = 0;
    let chargingEvents = 0;

    const chargepoints = new Array(chargePoints).fill(0);

    for (let interval = 0; interval < totalIntervals; interval++) {
      const arrivalProbability = probability / 1000 / 4;
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
            chargepoints[i] = (chargingDemand / 100) * consumption;
            intervalPowerDemand += chargingPower;
            chargingEvents += 1;
          }
        }
      }

      maxPowerDemand = Math.max(maxPowerDemand, intervalPowerDemand);
    }

    const theoreticalMaxPowerDemand = chargePoints * chargingPower;
    const concurrency = (maxPowerDemand / theoreticalMaxPowerDemand) * 100 || 0;
    setTotalEnergyConsumed(parseFloat(totalEnergyConsumed.toFixed(2)));
    setTheorecticalPowerDemand(theoreticalMaxPowerDemand);
    setMaxPowerDemand(maxPowerDemand);
    setConcurrencyFactor(Math.round(concurrency));
    setChargingEvents(chargingEvents);
  }, [
    chargePoints,
    chargingPower,
    consumption,
    probability,
    getRandomChargingDemand,
  ]);

  useEffect(() => {
    simulateCharge();
  }, [simulateCharge]);

  return {
    totalEnergyConsumed,
    theoreticalMaxPowerDemand,
    maxPowerDemand,
    concurrencyFactor,
    chargingEvents,
  };
}

export default useChargingSimulation;

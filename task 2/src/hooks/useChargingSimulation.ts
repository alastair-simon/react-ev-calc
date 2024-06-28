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
  // const hoursPerDay = 24;
  const totalIntervals = 35040; // 365 days * 24 hours * 4 intervals per hour

  const [totalEnergyConsumed, setTotalEnergyConsumed] = useState<number>(0.0);
  const [maxPowerDemand, setMaxPowerDemand] = useState<number>(0);
  const [concurrencyFactor, setConcurrencyFactor] = useState<number>(0);
  const [chargingEvents, setChargingEvents] = useState<number>(0);
  const [theoreticalMaxPowerDemand, setTheoreticalMaxPowerDemand] =
    useState<number>(0);

  const simulateCharge = useCallback(() => {
    // Validate inputs
    if (
      chargePoints <= 0 ||
      probability <= 0 ||
      consumption <= 0 ||
      chargingPower <= 0
    ) {
      console.error("Invalid inputs");
      return;
    }

    let totalEnergyConsumed = 0;
    let maxPowerDemand = 0;
    let chargingEvents = 0;

    // Create new array with 0s in number chargepoints
    const chargepoints = new Array(chargePoints).fill(0);

    // Loop through intervals
    for (let interval = 0; interval < totalIntervals; interval++) {
      const arrivalProbability = probability / 1000 / 4;
      let intervalPowerDemand = 0;

      // Check if charge point has remaining power
      for (let i = 0; i < chargepoints.length; i++) {
        if (chargepoints[i] > 0) {
          const energyThisInterval = chargingPower / intervalsPerHour;
          chargepoints[i] = Math.max(0, chargepoints[i] - energyThisInterval); // Ensure charge point value does not go below 0
          totalEnergyConsumed += energyThisInterval;
          intervalPowerDemand += chargingPower;
        } else if (Math.random() < arrivalProbability) {
          // if a car arrives and there is no charge
          const chargingDemand = getRandomChargingDemand();
          chargepoints[i] = (chargingDemand / 100) * consumption;
          intervalPowerDemand += chargingPower;
          chargingEvents += 1;
        }
      }

      maxPowerDemand = Math.max(maxPowerDemand, intervalPowerDemand);
    }

    const theoreticalMaxPowerDemand = chargePoints * chargingPower;
    const concurrency = (maxPowerDemand / theoreticalMaxPowerDemand) * 100 || 0;

    // Update state
    setTotalEnergyConsumed(parseFloat(totalEnergyConsumed.toFixed(2)));
    setTheoreticalMaxPowerDemand(theoreticalMaxPowerDemand);
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

  // Re-run function if args change
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

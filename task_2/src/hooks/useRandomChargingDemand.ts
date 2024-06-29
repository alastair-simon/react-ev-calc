import { useCallback } from "react";

interface ChargingDemandProbability {
  demand: number;
  probability: number;
}

const chargingDemandProbabilities: ChargingDemandProbability[] = [
  { demand: 0, probability: 34.31 },
  { demand: 5, probability: 4.9 },
  { demand: 10, probability: 9.8 },
  { demand: 20, probability: 11.76 },
  { demand: 30, probability: 8.82 },
  { demand: 50, probability: 11.76 },
  { demand: 100, probability: 10.78 },
  { demand: 200, probability: 4.9 },
  { demand: 300, probability: 2.94 },
];

// Generates random demand from array
export function useRandomChargingDemand () {
    const getRandomChargingDemand = useCallback((): number => {
      const rand = Math.random() * 100;
      let cumulative = 0;

      // Loop through objects in array
      for (const i of chargingDemandProbabilities) {
      cumulative += i.probability;
          if (rand < cumulative) {
          return i.demand;
          }
      }
      return 0;
    }, []);

    return { getRandomChargingDemand };
}



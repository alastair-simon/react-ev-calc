// EV charging simulator

// Probability (%) of an EV arriving per interval (adjusted for intervals per hour)
const arrivalProbabilities = [
  0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 2.83, 2.83, 5.66, 5.66, 5.66,
  7.55, 7.55, 7.55, 10.38, 10.38, 10.38, 4.72, 4.72, 4.72, 0.94, 0.94,
];

// Probability distribution of EV charging demands
const chargingDemandProbabilities = [
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

// Configuration constants
const numChargePoints = 20;
const chargingPower = 11;
const intervalsPerHour = 4;
const hoursPerDay = 24;
const totalIntervals = 35040;
const kwhPer100 = 18;

// Helper function: Get a random charging demand based on defined probabilities
function getRandomChargingDemand() {
  const rand = Math.random() * 100;
  let cumulative = 0;

  for (const demand of chargingDemandProbabilities) {
    cumulative += demand.probability;
    if (rand < cumulative) {
      return demand.demand;
    }
  }
  return 0;
}

// Returns total energy consumed and max power demand
function simulateCharge() {
  let totalEnergyConsumed = 0;
  let maxPowerDemand = 0;

  // Array to track remaining charge at each charge point
  const chargepoints = new Array(numChargePoints).fill(0);

  // Loop through each interval
  for (let interval = 0; interval < totalIntervals; interval++) {
    const hour = Math.floor((interval / intervalsPerHour) % hoursPerDay); // Calculate hour from interval

    // Probability of an EV arriving in this interval (adjusted)
    const arrivalProbability =
      arrivalProbabilities[hour] / 100 / intervalsPerHour;

    let intervalPowerDemand = 0;

    // Loop through each charge point
    for (let i = 0; i < chargepoints.length; i++) {
      // If the charge point has remaining charge
      if (chargepoints[i] > 0) {
        const energyThisInterval = chargingPower / intervalsPerHour;
        chargepoints[i] -= energyThisInterval; // Deduct energy used
        totalEnergyConsumed += energyThisInterval;
        intervalPowerDemand += chargingPower;

        // If no charge remains and an EV arrives based on arrival probability
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

  return { totalEnergyConsumed, maxPowerDemand };
}

// Run simulation
const { totalEnergyConsumed, maxPowerDemand } = simulateCharge();

// Calculate theoretical maximum power demand and concurrency factor
const theoreticalMaxPowerDemand = numChargePoints * chargingPower;
const concurrencyFactor = maxPowerDemand / theoreticalMaxPowerDemand;

// Output results
console.log(`Total energy consumed: ${totalEnergyConsumed.toFixed(2)} kWh`);
console.log(`Theoretical maximum power demand: ${theoreticalMaxPowerDemand} kW`);
console.log(`Actual maximum power demand: ${maxPowerDemand} kW`);
console.log(`Concurrency factor: ${(concurrencyFactor * 100).toFixed(2)}%`);

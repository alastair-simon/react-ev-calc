const arrivalProbabilities = [
  0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 2.83, 2.83, 5.66, 5.66, 5.66,
  7.55, 7.55, 7.55, 10.38, 10.38, 10.38, 4.72, 4.72, 4.72, 0.94, 0.94,
];

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

const numChargePoints = 20;
const chargingPower = 11;
const intervalsPerHour = 4;
const hoursPerDay = 24;
const totalIntervals = 35040;
const kwhPer100 = 18;

//helper to get random demand
function getRandomChargingDemand() {
  const rand = Math.random() * 100;
  let cumulative = 0;

  for (const i of chargingDemandProbabilities) {
    cumulative += i.probability;
    if (rand < cumulative) {
      return i.demand;
    }
  }
  return 0;
}

// simulateCharge total
function simulateCharge() {
  let totalEnergyConsumed = 0;
  let maxPowerDemand = 0;

  const chargepoints = new Array(numChargePoints).fill(0);

  //loop through intervals
  for (let interval = 0; interval < totalIntervals; interval++) {
    const hour = Math.floor((interval / intervalsPerHour) % hoursPerDay); // get hour from interval

    const arrivalProbability = arrivalProbabilities[hour] / 100 / 4; // Adjust for the number of intervals per hour.

    let intervalPowerDemand = 0;

    // Loop through each charge point (chargepoints array)
    for (let i = 0; i < chargepoints.length; i++) {

      // Check if the chargepoint has remaining charge
      if (chargepoints[i] > 0) {
        // Calculate energy to be consumed in this interval
        const energyThisInterval = chargingPower / intervalsPerHour;
        // Reduce the remaining charge of the chargepoint
        chargepoints[i] -= energyThisInterval;
        // Increase the total energy consumed
        totalEnergyConsumed += energyThisInterval;
        // Increase the interval power demand by the charging power
        intervalPowerDemand += chargingPower;

        // If there is no remaining charge and a new arrival occurs based on arrival probability
      } else if (Math.random() < arrivalProbability) {
        // Get a random charging demand for the new arrival
        const chargingDemand = getRandomChargingDemand();
        if (chargingDemand > 0) {
          // Calculate the energy required for the charging demand
          chargepoints[i] = (chargingDemand / 100) * kwhPer100;
          // Increase the interval power demand by the charging power
          intervalPowerDemand += chargingPower;
        }
      }

    }
    //keep track of highest power demand
    maxPowerDemand = Math.max(maxPowerDemand, intervalPowerDemand);
  }

  return { totalEnergyConsumed, maxPowerDemand };
}

const { totalEnergyConsumed, maxPowerDemand } = simulateCharge();
const theoreticalMaxPowerDemand = numChargePoints * chargingPower;
const concurrencyFactor = maxPowerDemand / theoreticalMaxPowerDemand;

console.log(`Total energy consumed: ${totalEnergyConsumed.toFixed(2)} kWh`);
console.log(`Theoretical maximum power demand: ${theoreticalMaxPowerDemand} kW`);
console.log(`Actual maximum power demand: ${maxPowerDemand} kW`);
console.log(`Concurrency factor: ${(concurrencyFactor * 100).toFixed(2)}%`);

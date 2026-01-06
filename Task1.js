const temperatures = [32, 35, 28, 40, 38, 30, 42];

// filter() temperatures above 35
let above35 = temperatures.filter(temp => temp > 35);
console.log("Above 35:", above35);

// map() Celsius → Fahrenheit
let fahrenheitTemps = temperatures.map(temp => (temp * 9/5) + 32);
console.log("Fahrenheit:", fahrenheitTemps);

// reduce() average temperature
let total = temperatures.reduce((sum, temp) => sum + temp, 0);
let average = total / temperatures.length;
console.log("Average:", average);

// find() first temperature above 40
let firstAbove40 = temperatures.find(temp => temp > 40);
console.log("First Above 40:", firstAbove40);

// findIndex() of temperature 28
let indexOf28 = temperatures.findIndex(temp => temp === 28);
console.log("Index of 28:", indexOf28);

// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// Function to return the first two drivers from the passed-in array
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

// Function to return the last two drivers from the passed-in array
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

// Array containing both functions that can be invoked
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


// Function to create a fare multiplier
function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // Function to double fares
  const fareDoubler = createFareMultiplier(2);
  
  // Function to triple fares
  const fareTripler = createFareMultiplier(3);
  
  function selectDifferentDrivers(drivers, func) {
    return func(drivers);
  }
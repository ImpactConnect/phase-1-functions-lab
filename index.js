// Code your solution in this file!
// function distanceFromHqInBlocks() {
//   const num1 = 1;
//   const num2 = 1;
//   const distance = num1 * num2;
//   return distance;
// }
// distanceFromHqInBlocks();

function distanceFromHqInBlocks(location) {
  const hqBlock = 42;
  return Math.abs(location - hqBlock);
}
console.log(distanceFromHqInBlocks(41));

function distanceFromHqInFeet(distance) {
  const hq = 42; // HQ location in blocks
  const feetPerBlock = 264; // Number of feet in a block
  return Math.abs(distance - hq) * feetPerBlock;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  const feetPerBlock = 264; // Assuming one block is 264 feet
  const distance = Math.abs(startBlock - endBlock) * feetPerBlock;
  return distance;
}

// function calculatesFarePrice(start, destination) {
//   const distance = Math.abs(destination - start); // Calculate the absolute distance
//   let fare = 0;

//   if (distance <= 400) {
//     // Free sample
//     fare = 0;
//   } else if (distance > 400 && distance < 2000) {
//     // Charges 2 cents per foot between 400 and 2000 feet
//     fare = (distance - 400) * 0.02;
//   } else if (distance > 2000) {
//     // Charges 25 dollars for distance over 2000 feet
//     fare = 25;
//   } else if (distance > 2500) {
//     // Does not allow rides over 2500 feet
//     fare = 0;
//   }

//   return fare;
// }

function calculatesFarePrice(start, destination) {
  const distance = Math.abs(destination - start);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    const fare = (distance - 400) * 0.02;
    return fare.toFixed(2);
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
console.log(calculatesFarePrice(0, 200));
console.log(calculatesFarePrice(0, 500));
console.log(calculatesFarePrice(0, 2500));
console.log(calculatesFarePrice(0, 3000));

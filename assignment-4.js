/* Assignment on ES5 */

// function cubeNumber(number) {
//   if (typeof number !== "number") return "Please give a valid (number) input.";
//   let result = Math.pow(number, 3);
//   return result;
// }

// function matchFinder(string1, string2) {
//   if (typeof string1 !== "string" || typeof string2 !== "string")
//     return "Please give a valid (string) input";
//   let bool = string1.includes(string2);
//   return bool;
// }

// function sortMaker(arr) {
//   if (arr[0] > 0 && arr[1] > 0) {
//     if (arr[1] > arr[0]) {
//       [arr[1], arr[0]] = [arr[0], arr[1]];
//       return arr;
//     } else if (arr[0] === arr[1]) {
//       return "equal";
//     } else {
//       return arr;
//     }
//   } else {
//     return "Invalid Input";
//   }
// }

// function findAddress(obj) {
//   const street = obj.street || "__",
//     house = obj.house || "__",
//     society = obj.society || "__";
//   const result = street + "," + house + "," + society;
//   return result;
// }

// function canPay(changeArray, totalDue) {
//   if (!Array.isArray(changeArray) || !changeArray.length)
//     return "Please give an array at least with a petty cash.";
//   let sum = 0,
//     L = changeArray.length;
//   for (let i = 0; i < L; i++) {
//     sum += changeArray[i];
//   }
//   console.log(sum);
//   return sum >= totalDue;
// }

/* Update of Assignment Solving in ES6 */

function cubeNumber(number) {
  /* Validation: is number */
  if (typeof number !== "number") {
    return "Please give a valid (number) input.";
  } else if (number <= 0) return "Please give a positive number.";

  /* Cube of a number */
  // let result = Math.pow(number, 3);
  let result =
    number ** 3; /* best since direct oparation to calling function */
  return result;
}

function matchFinder(string1, string2) {
  /* Validation: is string */
  if (typeof string1 !== "string" || typeof string2 !== "string")
    return "Please give a valid (string) input";
  else if (!string2.length)
    return "Please provide a string to compare with the first string parameter.";

  let bool = string1.includes(string2);
  return bool;
}

function sortMaker(arr) {
  if (arr[0] > 0 && arr[1] > 0) {
    if (arr[1] > arr[0]) {
      [arr[1], arr[0]] = [arr[0], arr[1]];
      return arr;
    } else if (arr[0] === arr[1]) {
      return "equal";
    } else {
      return arr;
    }
  } else {
    return "Invalid Input";
  }
}

function findAddress(obj) {
  const street = obj.street || "__",
    house = obj.house || "__",
    society = obj.society || "__";
  const result = street + "," + house + "," + society;
  return result;
}

function canPay(changeArray, totalDue) {
  if (!Array.isArray(changeArray) || !changeArray.length)
    return "Please give an array at least with a petty cash.";
  let sum = changeArray.reduce(
    (total, currentElement) => total + currentElement,
    0
  );
  return sum >= totalDue;
}

/* Test Cases */

/* Problem 01 */
// console.log("Int: " + cubeNumber(3));
// console.log("Negative: " + cubeNumber(-3));
// console.log("Fraction: " + cubeNumber(3.5));
// console.log("Text: " + cubeNumber("cube"));

/* Problem 02 */
// console.log(matchFinder("John Doe", "ohn"));
// console.log(matchFinder("Peter Parker", "Pen"));
// console.log(matchFinder("Peter Parker","pet"));

/* Problem 03 */
// console.log(sortMaker([2, 2]));
// console.log(sortMaker(2, 2));
// console.log(sortMaker([2, "2"]));
// console.log(sortMaker([-2, -2]));
// console.log(sortMaker([4, -2]));
// console.log(sortMaker([4, 2]));
// console.log(sortMaker([2, 3]));

/* Problem 04 */
// const obj = { street: 10, house: "15A", society: "Earth Perfect" };
// const obj = { street: 10, society: "Earth Perfect" };
// const obj = { street: 10 };
// console.log(findAddress(obj));

/* Problem 05 */
// console.log(canPay([1, 2, 5], 10));
// console.log(canPay([1, 5, 5], 10));
// console.log(canPay([], 10));

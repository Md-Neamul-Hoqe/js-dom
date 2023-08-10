/**
 * ===================================
 * JavaScript has a few restrictions:
 * ----------------------------------
 * It can't easily talk to other websites for security reasons.
 * It handles tasks one by one, which can be slow for some jobs.
 * It doesn't deal with low-level technical details directly.
 * It manages memory automatically, but this might slow things down sometimes.
 * It can't directly access files on your computer.
 * It can fetch data from the internet, but there are rules to follow.
 * It sometimes mixes up different types, causing bugs.
 * In the past, writing code that waits for tasks to finish was hard.
 * It can sort of work with multiple tasks at once, but it's a bit complicated.
 * ===================================
 */

/**
 * Basic Concepts
 */
/* Math */
/* Variable */
/* convension */
/* Shorthand */

/* Operation */
var price1 = 32,
  price2 = 54;
var totalPrice = price1 + price2;
console.log(totalPrice);

var fname = "Muhammad",
  mname = "Neamul",
  lname = "Hoqe";
var fullName = fname + " " + mname + " " + lname;
console.log("My Name is :", fullName);

var number = 4,
  text = "5";
var addIntText = number + text;
console.log(addIntText);

var price1 = "31",
  price2 = 10;
var totalPrice = price1 + price2;
console.log(totalPrice);

/* String to Int */
price1 = parseInt(price1);
totalPrice = price1 + price2;
console.log(totalPrice);

/* String to Float */
price2 = parseFloat(price2);
totalPrice = price1 + price2;
console.log(totalPrice);
console.log(typeof totalPrice);
/* Also OK */
console.log(typeof totalPrice);

console.log(typeof "neamul");

/* fixed decimal */
console.log(0.1 + 0.2);
var sum = 0.1 + 0.2;
sum = sum.toFixed(3);
console.log(sum);

/**
 * Problem 1
 * Input given money, Cost of 1 kg oranges and 1 kg apples
 * OUTPUT returned money?
 */

let given = 1000,
  cost = 400 + 300;
let output = given - cost;
console.log(output);

/**
 * Problem 2
 * Input marks of the five subjects
 * OUTPUT average marks of the subjects
 */

let math = 98,
  bio = 76,
  che = 94,
  phy = 59,
  ban = 99;
let average = (math + bio + che + phy + ban) / 5;
average = average.toFixed(2);
console.log(average);

/**
 * Problem 3
 * INPUT Two variables containing string
 * OUTPUT Combine the string in a line
 */

let var1 = "I am a",
  var2 = "student named Neamul";
let fstring = var1 + " " + var2;
console.log(fstring);

/**
 * Problem 4
 * INPUT a number
 * OUTPUT remainder when divided by 5
 */

let Number = 453;
Remainder = Number % 5;
console.log(Remainder);

/* Array */
let Names = ["neamul", "hasan", "tamim"];
console.log(Names);

console.log(Names[0]);

/* append to the last position */
Names.push("Mahdi");
console.log(Names);

/* Delete last one */
Names.pop();
console.log(Names);

/* Delete 1st one */
Names.shift();
console.log(Names);

/* Append to the first position */
Names.unshift("Abdulloh");
console.log(Names);

/* Find the index of an element in the array [-1 means Not Found] */
let indexNeamul = Names.indexOf("neamul");
console.log(indexNeamul);

const numbersIndex = [4, 34.4, true, 643];
let bool = true;
console.log(numbersIndex.indexOf(bool));

numbersIndex[40] = 456;
console.log(numbersIndex[38]);
console.log(numbersIndex.length);

/* Comparison */
console.log(5 < 6);

/**
 * ================Problems Practices=======================
 */
/**
 * Problem 1
 * Given  fruits = ['Apple', 'Banana', 'Orange'];
 * Find index of 'Banana'
 * replace 'Banana' by "Mango"
 * Remove "Orange"
 * Add "Watermelon"
 */
var fruits = ["Apple", "Banana", "Orange"];
let index = fruits.indexOf("Banana");
console.log(index);
fruits[index] = "Mango";
fruits.pop();
fruits.push("Watermelon");
console.log(fruits);

/**
 * Problem 2
 * Scores My 85, Tom 66, Jane 95, Peter 56, John 40
 * 80 or above A grade
 * 60 or above B grade
 * 50 or above C grade
 * 40 or above D grade
 * 39 or less F grade
 * Write a program to find grades using if-else
 */

let neamul = 85,
  Tom = 66,
  Jane = 95,
  Peter = 56,
  John = 40;
let Grade = Tom;
if (Grade >= 80) {
  console.log("Congratulations! You got A grade.");
} else if (Grade >= 60) {
  console.log("Congratulations! You got B grade.");
} else if (Grade >= 50) {
  console.log("You got C grade.");
} else if (Grade >= 40) {
  console.log("You got D grade.");
} else {
  console.log("Sad! You got F grade.");
}
/**
 * Problem 3
 * Three numbers 13, 79, 45
 * Write a program that will print the largest number using if-else
 */
let num1 = 13,
  num2 = 79,
  num3 = 45;
num1 >= num2
  ? num1 >= num3
    ? console.log(num1, " is the largest number.")
    : console.log(num3, " is the largest number.")
  : num3 >= num2
  ? console.log(num3, " is the largest number.")
  : console.log(num2, " is the largest number.");
if (num1 >= num2) {
  if (num1 >= num3) {
    console.log(num1, " is the largest number.");
  } else {
    console.log(num3, " is the largest number.");
  }
} else if (num3 >= num2) {
  console.log(num3, " is the largest number.");
} else {
  console.log(num2, " is the largest number.");
}

/* Go to 638 to see largest num finding from an array */

/**
 * Problem 3
 * Given the sides of a triange are 9, 8, 9.
 * Write a program that will check the triangle is isosceles or not using if-else
 */

let side1 = 7,
  side2 = 7,
  side3 = 8;
side1 === side2
  ? console.log("The triangle is isosceles.")
  : side3 === side2
  ? console.log("The triangle is isosceles.")
  : side3 === side1
  ? console.log("The triangle is isosceles.")
  : console.log("The triangle is not isosceles.");
/* simplest code is */
side1 === side2 || side1 === side3 || side2 === side3
  ? console.log("The triangle is isosceles.")
  : console.log("The triangle is not isosceles.");

/* Function */
function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
var SUM = add(12, 34);
console.log(SUM);

function averageNums(num1, num2, num3) {
  const sum = num1 + num2 + num3;
  const average = sum / 3;
  return average;
}
console.log(averageNums(60, 6, 60));

/* Object */

var student = {
  id: 2015133099,
  name: "Neamul",
  class: "Honours",
  Dept: "Mathematics",
  Array: [
    [23, 53],
    [564, 45],
  ],
};
console.log("With backets & quots: ", student["id"]);
console.log("With dot: ", student.id);

student.class = "Masters";
console.log(student);

student.id = 2020123032;
console.log(student);

/* property-names / keys of the object  */
const key = Object.keys(student);
console.log(key);

/* values of the object */
const values = Object.values(student);
console.log(values);

/* Object's entries as array */
const entries = Object.entries(student);
console.log(entries);

var keys = ["id", "name", "class", "Dept"];
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
  console.log(student[keys[i]]);
}

/* Loops: for, for in, for of */
let a1 = [4, 6, 2, 6, 8, 0, 45, 645, 78];
const a = [
  {
    name: "neamul",
    age: 274,
    dept: "Mathematics",
  },
];

for (const iterator of a) {
  console.log(iterator);
}

for (let index = 0; index < a.length; index++) {
  const indexedElement = a[index];
  console.log(index);
}

for (const key in a) {
  if (Object.hasOwnProperty.call(a, key)) {
    const element = a[key];
    console.log(key);
  }
}

/* Switch */

const color = "Yellow";
if (color === "green") {
  console.log("You are a green friend.");
} else if (color === "green") {
  console.log("You are a green friend.");
} else if (color === "blue") {
  console.log("You are a blue friend.");
} else if (color === "green") {
  console.log("You are a green friend.");
} else if (color === "red") {
  console.log("You are a red friend.");
} else if (color === "white") {
  console.log("You are a white friend.");
} else if (color === "yellow") {
  console.log("You are a yellow friend.");
} else {
  console.log("You are not my friend.");
}

switch (color) {
  case "green":
    console.log("You are a green friend.");
    break;
  case "blue":
    console.log("You are a blue friend.");
    break;
  case "red":
    console.log("You are a red friend.");
    break;
  case "white":
    console.log("You are a white friend.");
    break;
  case "yellow":
    console.log("You are a yellow friend.");
    break;
  default:
    console.log("You are not my friend.");
}

/**
 * Problem 1
 * function foo() & bar(), bar() called in foo()
 * call foo()
 * what is output
 */

function foo() {
  console.log("This is foo function");
  bar();
}

function bar() {
  console.log("This is bar function.");
}

foo();

/**
 * Problem 2
 * function make_avg() of three integers
 */

function make_avg(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

console.log(make_avg(3, 5, 7));

/**
 * Problem 3
 * function make_avg() of three integers
 * INPUT an array of integers and size of that array
 * OUTPUT average of them
 */

function make_avg(Array, Size) {
  var sum = 0;
  for (let i = 0; i < Size; i++) {
    sum = sum + Array[i];
  }
  return sum / Size;
}

console.log(make_avg([2, 4, 1, 5, 5, 6, 7, 23, 8], 9));

/**
 * Problem 4
 * function odd_even()
 * INPUT an integer
 * OUTPUT is the integer odd or even
 */

/* no return & has parameter */
function odd_even(int) {
  if (int % 2 === 0) {
    console.log("The integer is an even number.");
  } else {
    console.log("The integer is an odd number.");
  }
}

odd_even(8);

/* Has return & has parameter */
function odd_even(int) {
  oddOrEven = null;
  if (int % 2 === 0) {
    return (oddOrEven = "even");
  } else {
    return (oddOrEven = "odd");
  }
}

console.log("the number is", odd_even(7));

/**
 * Problem 5
 * a function that check the traffic signal light color
 * INPUT color
 * OUTPUT decision
 */

function trafficSignalDecision(color) {
  switch (color) {
    case "red":
      console.log("It may danger, don't cross the road.");
      break;
    case "yellow":
      console.log("Should Stop Now.");
      break;
    case "green":
      console.log("Should cross the road.");
      break;
    default:
      return;
  }
}

function trafficSignalDecision(color) {
  color === "red"
    ? console.log("It may danger, don't cross the road.")
    : color === "yellow"
    ? console.log("Should Stop Now.")
    : console.log("Should cross the road.");
}

trafficSignalDecision("red");

/* Inches to Feets Converter */
function inchToFeet(inches) {
  return inches / 12;
}

console.log(inchToFeet(144));

/* Check Even Number */
function isEven(num) {
  if (!(num % 2)) {
    return true;
  }
  return false;
}

console.log(isEven(12));

/* Check is Leap year (which year divisible by 4 or if it divisible by 100 then 400 also then leapyear) */
function isLeapYear(year) {
  return !(year % 100) ? year % 400 === 0 : year % 4 === 0;
}

console.log(isLeapYear(2000));

/* Given Years Array */
function isLeapYear(year) {
  let leapYears = [];
  for (let i = 0; i < year.length; i++) {
    if (year[i] % 4 === 0) {
      if (year[i] % 100 !== 0 || year[i] % 400 === 0) {
        leapYears.push(year[i]);
      }
    }
  }
  return leapYears;
}

let years = [2000, 1000, 2324, 100, 2020, 3636];
console.log(isLeapYear(years));

/**
 * Find Odd sum from an given array
 */

function oddSum(nums) {
  let n = nums.length;
  console.log(n);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i] % 2 ? nums[i] : 0;
  }
  return sum;
}

numbers = [1, 4, 56, 2, 7, 8, 5, 3453, 11];
console.log("The sum of the odd from ", numbers, " is ", oddSum(numbers));

/**
 * Find the multiplication of n numbers OR factorial of n
 */

function factorialOfN(num) {
  let mult = 1;
  for (let i = 2; i <= num; i++) {
    mult *= i;
  }
  return mult;
}

/* Recursive way */
var mult = 1;
function factorialOfN(num) {
  return num === 0 || num === 1 ? 1 : (mult = num * factorialOfN(num - 1));
}

var n = 4;
console.log("The multiplication of numbers up to ", n, "is ", factorialOfN(n));

/**
 * Problem
 * make takaToDollar() named function
 * Input: Take a number TAKA
 * OUTPUT: convert it to DOLLAR and console it.
 */

function takaToDollar(takaDe) {
  /* letting 1 Dollar == 102 Taka */
  return takaDe * 102;
}
let Taka = 165;
console.log(takaToDollar(Taka));

/**
 * Problem
 * make barbieKen() named function
 * INPUT: a string
 * OUTPUT: If string length even number then Show "Hi Ken!" otherwise "Hi Barbie!"
 */

function barbieKen(StringDe) {
  //   console.log(StringDe.length);
  if (StringDe.length % 2) {
    /* If Odd return */
    return "Hi Barbie!";
  } else {
    /* If even return */
    return "Hi Ken!";
  }
}

let StringNe = "chatgpt";
console.log(barbieKen(StringNe));

/**
 * ===================================================
 * Module 21
 * ===================================================
 */

var demoString = "Ami ekhon chira khabo. keu distarb dibana.";
console.log(demoString.length);
console.log(demoString[5]);
console.log(demoString.includes("chira"));
console.log(demoString.indexOf("ekhon"));
console.log(demoString.lastIndexOf("b"));

console.log(demoString.toLowerCase());
console.log(demoString.toUpperCase());

var FileName = "demoBook.pdf";
console.log(FileName.toLowerCase().startsWith("demo"));
console.log(FileName.toLowerCase().endsWith("pdf"));

let splitWord = demoString.split(" ");
/* split word */
console.log(splitWord[3]);

/* Join Them Again with : */
console.log(splitWord.join(":"));

/* split sentences */
let splitString = demoString.split(". ");

/* split char */
let split = demoString.split("");
console.log(split);

/* Slicing The String */
console.log(demoString.slice(4, 15));
console.log(
  demoString.slice(demoString.indexOf("keu"), demoString.indexOf("keu") + 10)
);

/* Sub string same as slicing */
console.log(
  demoString.substring(
    demoString.indexOf("keu"),
    demoString.indexOf("keu") + 10
  )
);
console.log(demoString.substring(demoString.lastIndexOf("k")));
let TrimString = " Md. Neamul Hoqe ";
console.log(TrimString.trim());

/* Swap */
let first = 5,
  second = 6;
console.log(first, second);
let temp = first;
first = second;
second = temp;

/* approach: Destructuring  */
[first, second] = [second, first];
console.log(first, second);

/**
 *  Max Number From an Array
 * */

function maxInt(givenArray) {
  let biggestInt = givenArray[0];
  for (let i = 0; i < givenArray.length; i++) {
    if (biggestInt < givenArray[i + 1]) {
      //   [givenArray[i], givenArray[i + 1]] = [givenArray[i + 1], givenArray[i]];
      biggestInt = givenArray[i + 1];
    }
  }
  console.log(biggestInt);
}

let arrayG = [1, 4, 1, 6, 7, 100, 56];
maxInt(arrayG);

/**
 *  Who is Topper
 * */

function topperOne(m, n) {
  if (m > n) {
    console.log("m is topper one in the class with the marks:", m);
    return;
  }
  console.log("n is topper one in the class with the marks:", n);
}

function topperOne(givenMarks) {
  let topper = givenMarks[0];
  for (let i = 0; i < givenMarks.length; i++) {
    if (topper < givenMarks[i + 1]) {
      topper = givenMarks[i + 1];
    }
  }
  return topper;
}
let marks = [78, 90, 100, 45, 56, 99];
console.log(topperOne(marks));

console.log(Math.max(78, 90, 100, 45, 56, 99));
console.log(Math.max(...marks)); /* array print */

let mark1 = 78,
  mark2 = 54,
  mark3 = 90;

if (mark1 > mark2 && mark1 > mark3) {
  console.log(mark1, "is largest number");
} else if (mark2 > mark1 && mark2 > mark3) {
  console.log(mark2, "is largest number");
} else {
  console.log(mark3, "is largest number");
}

console.log(Math.max(mark1, mark2, mark3));

let heights = [78, 90, 100, 45, 56, 99];

let stringOne = "This is a string so lets.";
function reverseStr(text) {
  let temp = [];
  let tL = text.length;
  for (let i = 0; i < tL; i++) {
    temp[tL - i] = text[i];
  }
  return temp.join("");
}

function reverseStr(text) {
  let chars = text.split("");
  let reverseChars = chars.reverse();
  return reverseChars.join("");
}

/* We can apply multiple methon in a array at a time */
function reverseStr(text) {
  return text.split("").reverse().join("");
}

console.log(reverseStr(stringOne));

/**
 * Problem
 *  Module 22-2
 * */
const friends = [12, 34, 5, 6, 76, 8, 9];
/* Copy from the array */
const partialSlice = friends.slice(2, 6);
console.log(partialSlice);
/* Cut from the array OR replace some elements */
const partial = friends.splice(3, 2, 3, 6, 7);
console.log(partial);
console.log(friends);

/**
 * Problem
 *  Remove Duplicates
 * */
const names = [
  "abul Mia Jabu Kha",
  "babul",
  "tabul",
  "babul",
  "abul",
  "afi",
  "rafi",
  "taki",
  "afi",
];

function removeDuplicates(names) {
  const unique = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (unique.includes(name)) {
      console.log("This is already exist.");
      continue;
    }
    unique.push(name);
    console.log("A unique ", name, " name found");
  }
  return unique;
}

console.log(removeDuplicates(names));

/**
 * Problem
 *  output 1-50 but which divided by 3 replace that number by 'foo'
 * */

function foo() {
  for (let index = 1; index <= 50; index++) {
    if (index % 3 === 0 && index % 5 === 0) console.log("foobar");
    else if (index % 3 === 0) console.log("foo");
    else if (index % 5 === 0) console.log("bar");
    else console.log(index);
  }
}
foo();

/**
 * Problem
 *  wood requirement
 * */
function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3,
    perTableWood = 10,
    perBedWood = 50;
  const chairWood = chairQuantity * perChairWood;
  const tableWood = tableQuantity * perTableWood;
  const bedWood = bedQuantity * perBedWood;
  console.log(
    "For Chair",
    chairWood,
    "cft",
    "For Table",
    tableWood,
    "cft",
    "For Bed",
    bedWood,
    "cft"
  );
  console.log("Total wood required:", chairWood + tableWood + bedWood);
}
woodCalculator(5, 2, 4);

/**
 * Problem
 *  Cheapest Phone
 * */
const phones = [
  {
    name: "Samsung",
    camera: 12,
    storage: "32gb",
    price: 16000,
    color: "silver",
  },
  { name: "Oppo", camera: 22, storage: "64gb", price: 36000, color: "silver" },
  { name: "Xiaomi", camera: 42, storage: "32gb", price: 96000, color: "black" },
  {
    name: "Walton",
    camera: 62,
    storage: "62gb",
    price: 26000,
    color: "silver",
  },
  { name: "Nokia", camera: 12, storage: "2gb", price: 8000, color: "red" },
];

function cheapestPhone(phones) {
  let cheapestPhone = phones[0];
  for (let phone in phones) {
    const choosenPhone = phones[phone];
    if (cheapestPhone.price > choosenPhone.price) cheapestPhone = choosenPhone;
  }
  return cheapestPhone;
}

console.log(cheapestPhone(phones));

const shoppingCart = [
  { name: "panjabi", price: 3200 },
  { name: "payjama", price: 1000 },
  { name: "tupi", price: 500 },
  { name: "shoe", price: 1200 },
];

function totalCost(shoppingCart) {
  let totalCost = 0;
  for (let shop in shoppingCart) totalCost += shoppingCart[shop].price;
  return totalCost;
}

console.log(totalCost(shoppingCart));

const shoppingCart2 = [
  { name: "panjabi", price: 3200, quantity: 5 },
  { name: "payjama", price: 1000, quantity: 3 },
  { name: "tupi", price: 500, quantity: 2 },
  { name: "shoe", price: 1200, quantity: 1 },
];

function totalCost(shoppingCart2) {
  let totalCost = 0;
  for (let shop in shoppingCart2)
    totalCost += shoppingCart2[shop].price * shoppingCart2[shop].quantity;
  return totalCost;
}

console.log(totalCost(shoppingCart2));

/**
 * Problem
 *  Ticket Price
 * */

function totalPriceOfTickets(ticket) {
  const notMoreThan100 = 100,
    notMoreThan200 = 90,
    moreThan200 = 70,
    firstDiscount = 100,
    secondDiscount = 200;
  let totalPriceOfTickets = 0;
  if (ticket < firstDiscount)
    return (totalPriceOfTickets += ticket * notMoreThan100);
  else if (ticket < secondDiscount)
    return (totalPriceOfTickets +=
      firstDiscount * notMoreThan100 +
      (ticket - firstDiscount) * notMoreThan200);
  else
    return (totalPriceOfTickets +=
      firstDiscount * notMoreThan100 +
      firstDiscount * notMoreThan200 +
      (ticket - secondDiscount) * moreThan200);
}

console.log(totalPriceOfTickets(300));

/**
 *  validation
 * */

function add(num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number")
    return "Please input numbers:";
  else return num1 + num2;
}

console.log(add(3, "556"));

/**
 * Problem
 *  Feet To Inch
 * */
function feetToInch(feet) {
  if (typeof feet !== "number")
    return "Please Input The Feet (Number) Without Units.";
  return feet * 12;
}

console.log(feetToInch(4));

/**
 * Problem
 *  Centementer to Meter
 * */

function centementerToMeter(centementer) {
  if (typeof centementer !== "number")
    return "Please Input The Centementer (Number) Without Units.";
  return centementer / 100;
}
console.log(centementerToMeter(2400));

/**
 * Problem
 *  Paper Requirements
 * */

function paperRequirements(firstBook, secondBook, thirdBook) {
  const firstBookPage = 100,
    secondBookPage = 200,
    thirdBookPage = 300;
  return (
    firstBook * firstBookPage +
    secondBook * secondBookPage +
    thirdBook * thirdBookPage
  );
}

console.log("The total page requirements ", paperRequirements(3, 4, 1));

/**
 * Problem
 *  best friend [largest name]
 * */

function bestFriend(names) {
  let bestFriend = names[0];
  for (let name = 0; name < names.length; name++) {
    if (bestFriend.length < names[name].length) bestFriend = names[name];
  }
  return bestFriend;
}

console.log("The best friend is", bestFriend(names));

/**
 * Problem
 *  Only Positive [return upto negative number]
 * */

/* numbers declared in 500 */

function onlyPositive(nums) {
  // for(let i = 0; i<nums.length; i++)
  IndexOfNegativeNum = nums.findIndex((number) => {
    console.log(number);
    return number < 0;
  });
  console.log(IndexOfNegativeNum);
  if (IndexOfNegativeNum !== -1) return nums.slice(0, IndexOfNegativeNum);
  return nums;
}

console.log(onlyPositive(numbers));

/**
 * Problem
 *  Find vowels from a string
 * */
function vowelCount(givenString) {
  if (typeof givenString !== "string")
    return "The input is not a string. Please input a string.";
  const givenStringLower = givenString.toLowerCase();
  const L = givenStringLower.length;
  var vowel = 0,
    semivowel = 0,
    space = 0,
    consonent = 0;
  for (let i = 0; i < L; i++) {
    const char = givenStringLower[i];
    switch (char) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vowel++;
        break;
      case "w":
      case "y":
        semivowel++;
        break;
      case " ":
      case ".":
        space++;
        break;
      default:
        consonent++;
        break;
    }
  }
  return vowel;
}

console.log(
  vowelCount("Lorem ipsum dolor sit amet consectetur adipisicing elit.")
);

/**
 * Problem
 * a function named isInteger()
 * Input: a number
 * OUTPUT: if integer then return true
 */

function isInteger(number) {
  if (typeof number !== "number") return "Please give a number";
  if (number % 1 === 0) return true;
  else return false;
}

console.log(isInteger(564));

/**
 * Problem
 * function isJavaScriptFile()
 * INPUT: a filename string like "index.js"
 * OUTPUT: If this is js file then true otherwise false
 */

function isJavaScriptFile(name) {
  if (typeof name !== "string")
    return "Please provide a valid file name (string).";
  return name.toLowerCase().endsWith(".js");
}

console.log(isJavaScriptFile(564));

/**
 * Problem
 * Function mindGame()
 * INPUT: a positive number
 * OUTPUT: (number*3+10)/2-5
 */

function mindGame(num) {
  if (typeof num !== "number" || num <= 0)
    return "Please provide a positive number.";
  return (num * 3 + 10) / 2 - 5;
}

console.log(mindGame(5));

/**
 * Problem
 * function isLGSeven()
 * INPUT: a number
 * OUTPUT: if number < 7 then return number - 7 else return number * 2
 */

function isLGSeven(num) {
  if (typeof num !== "number") return "Please provide a number.";
  return num - 7 < 7 ? num - 7 : num * 2;
}

console.log(isLGSeven(15));

/**
 * Problem
 * function findingBadData()
 * INPUT: array of numbers
 * OUTPUT: if -ve then badData +ve hole good data
 */

function findingBadData(arr) {
  if (!Array.isArray(arr)) return "Please provide an array with numbers.";
  var badData = 0;
  for (let element of arr) {
    // In foreach loop break doesn't work && the return statement doesn't return out to the function.
    if (typeof element !== "number") {
      return "Please provide an array with numbers.";
    } else if (element < 0) {
      badData++;
    }
  }
  return badData;
}

const givenArray1 = [3, -2, "-5", -6, 5, -7, 3];
console.log(findingBadData(givenArray1));

const givenArray = "3, 5, 6, 7, 2, -4, -1";
let givenArray2 = givenArray.split(","); // string to array
// givenArray2.forEach((element, index) => {
//   console.log((givenArray2[index] = Number(element))); // array elements to numbers || Number() not work on terminal
// });
// const givenArray2 = 'dsaf'
// const givenArray2 = [3, 2, 5, 6, 5, 7, 3]
// const givenArray2 = [3, 2, "-5", 6, 5, 7, "-3"];
console.log(givenArray2);

/**
 * User Input:
 */
/* User Input */
function getUserInput() {
  let getArray = prompt(
    "Please provide an array with numbers.",
    "4, 6, -4, 2, -1, 5"
  ); //if not provide the getArray contain 'null' || promt() not work on terminal only use in browser environment
  // console.log(getArray.split(","));
  let givenArray2 = getArray.split(","); // string to array
  givenArray2.forEach((element, index) => {
    console.log((givenArray2[index] = Number(element))); // array elements to numbers
  });
  return givenArray2;
}
// getUserInput();
/**
 * Problem
 * function gemsToDiamond()
 * INPUT: three gems power (three friends gems numbers) are 21, 32, 43 respectively [means 1st one gem can convert to 21 diamond ]
 * OUTPUT: if total gems > 1000*2 then return total - 2000 otherwise return total
 *
 */

function gemsToDiamond(firstGem, secondGem, thirdGem) {
  if (
    typeof firstGem !== "number" ||
    typeof secondGem !== "number" ||
    typeof thirdGem !== "number" ||
    firstGem < 0 ||
    secondGem < 0 ||
    thirdGem < 0 ||
    firstGem % 1 !== 0 ||
    secondGem % 1 !== 0 ||
    thirdGem % 1 !== 0
  )
    return "Please provide valid positive integer numbers.";
  const firstCanDiamond = 21,
    secondCanDiamond = 32,
    thirdCanDiamond = 43;
  let totalDiamond =
    firstGem * firstCanDiamond +
    secondGem * secondCanDiamond +
    thirdGem * thirdCanDiamond;
  if (totalDiamond > 1000 * 2) return totalDiamond - 2000;
  return totalDiamond;
}

console.log(gemsToDiamond(100, 5, -1));
console.log(gemsToDiamond(100, 5.5, 1));
console.log(gemsToDiamond(100, "5", 1));
console.log(gemsToDiamond(20, 200, 50));
console.log(gemsToDiamond(1, 1, 1));

/**
 * Problem
 * function printDetails()
 * INPUT: get an object
 * OUTPUT: make meaning full sentence using the object's properties, use 'nai' for a missing property
 */

const obj = { name: "Neamul", age: 12, dept: "Mathematics" };
function printDetails(obj) {
  if (typeof obj !== "object") return "Please provide an object type data.";
  console.log(obj.name);
  let name = obj.name || "nai",
    age = obj.age || "nai",
    dept = obj.dept || "nai",
    school = obj.school || "nai";
  institute = obj.institute || "nai";
  return (
    "I am " +
    name +
    " & " +
    age +
    " years old. Now I am studing in " +
    dept +
    " department on " +
    school +
    " school & institute of " +
    institute
  );
}

console.log(printDetails(obj));

/**
 * Problem
 * function isValidPhotoName(photoName, imageExtensions)
 * Input: photoName of image name, imageExtensions is an array of valid extension a image type file
 * OUTPUT: if photoName extension is valid in imageExtensions then return true otherwise false
 */

const photoName = "photoname.Ico",
  //   photoName = "photonamegif",
  //   imageExtensions = "sdjfoi";
  //   imageExtensions = [".jpg", ".png", ".jpeg", ".ico", ".gif", "svg"];
  imageExtensions = [".jpg", ".png", ".jpeg", ".ICO", ".gif", "svg"];

function isValidPhotoName(photoName, imageExtensions) {
  if (typeof photoName !== "string" || !Array.isArray(imageExtensions))
    return "Please input a valid string as photoName and array as imageExtensions.";
  const photoLCName = photoName.toLowerCase();

  for (const extension of imageExtensions) {
    // const extension = imageExtensions[index];
    if (photoLCName.endsWith(extension.toLowerCase())) {
      return true;
    }
  }
  return false;
}

console.log(isValidPhotoName(photoName, imageExtensions));

/**
 * Problem
 * INPUT: an array of numbers
 * OUTPUT: an array of primes from the array
 */
const givenArray3 = [1, 3, 6, 9, 0, -7, 1257, 5];

function findingPrimes(givenArray) {
  /* validation */
  if (!Array.isArray(givenArray)) {
    return "Please provide an array numbers.";
  }
  for (const element of givenArray) {
    if (typeof element !== "number")
      return "Please provide an array with all number elements";
  }

  let primes = [];

  /* check primes */
  for (const element of givenArray) {
    var divisible = false;
    if (element > 1) {
      for (let divisor = 2; divisor < element; divisor++) {
        console.log(divisor, element);
        if (element % divisor === 0) {
          divisible = true;
          break;
        } else continue;
      }

      console.log(divisible);
      if (!divisible) primes.push(element);
    }
  }
  return primes;
}

console.log(findingPrimes(givenArray));

/**
 * Problem
 * function sumOfN()
 * INPUT: a number n
 * OUTPUT: calculate 1 to n
 *
 */

function sumOfN(num) {
  // console.log(num);
  if (num === 1) return 1;
  else return num + sumOfN(num - 1);
}
let num = 100;
console.log(sumOfN(num));

/* Module 23.5 */

const person = {
  name: "Neamul",
  dept: "Mathematics",
  act: function () {
    for (let index = 0; index < 3; index++) {
      console.log("A programmer & web developer.");
    }
  },
  result: {
    MAT101: "4.00",
    MAT102: "3.96",
  },
  dress: ["panjabi", "payjama", "sunglass"],
};

/* property access */
console.log(person.name);

/* array / object in object access */
console.log(person.dress[0]); // array
console.log(person.result.MAT101); // object

/* function access */
person.act();

/* Object in array */
const products = [
  { name: "Phone", price: 1200 },
  { name: "Laptop", price: 3200 },
];

console.log(products[1].name);

function add(num1, num2) {
  console.log(arguments);
  return num1 + num2;
}

add(2, 5, 6, 7, 9, 23, 1);

/* For-of loop */
/* names is declared in 716 */
for (const name of names) {
  console.log(name);
}

const productsList = [
  { id: 1, name: "Xiaomi phone One night", price: 19000 },
  { id: 2, name: "iphone", price: 19000 },
  { id: 3, name: "mac book air", price: 119000 },
  { id: 4, name: "lenovo yoga laptop 2025", price: 19000 },
  { id: 5, name: "Samsung Phone note 7", price: 19000 },
];

function matchedProducts(productsList, search) {
  const matched = [];
  for (const product of productsList) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}

const resut = matchedProducts(productsList, "phone");
console.log(resut);

console.log(4 / 0); /* is js give an error? */
